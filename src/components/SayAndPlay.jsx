import React, { useState, useEffect } from 'react';
import { Mic, Volume2, ArrowLeft, ArrowRight, CheckCircle, Radio, Sparkles, Grid } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CVC_WORDS } from '../utils/phonicsData';
import { audioEngine } from '../utils/audioEngine';
import { voiceRecognition } from '../utils/speechRecognition';

export function SayAndPlay({ onAwardStar }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredWords, setFilteredWords] = useState(CVC_WORDS);
  const [wordIndex, setWordIndex] = useState(0);

  const targetObj = filteredWords[wordIndex] || filteredWords[0];

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [micError, setMicError] = useState('');

  const categories = ['All', 'Animals', 'Home', 'Nature', 'Vehicles', 'Food'];

  useEffect(() => {
    return () => {
      voiceRecognition.stopListening();
      audioEngine.stopSpeech();
    };
  }, []);

  useEffect(() => {
    let list = CVC_WORDS;
    if (selectedCategory !== 'All') {
      list = CVC_WORDS.filter(w => w.category === selectedCategory);
    }
    setFilteredWords(list);
    setWordIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    if (targetObj) {
      resetState(targetObj);
    }
  }, [wordIndex, filteredWords]);

  const resetState = (wordObj) => {
    voiceRecognition.stopListening();
    setIsListening(false);
    setTranscript('');
    setIsSuccess(false);
    setMicError('');
    setStatusMessage(`Tap the mic button and say "${wordObj.word}"!`);
  };

  const handleSelectWord = (index, wordItem) => {
    audioEngine.playAudioEffect('pop');
    setWordIndex(index);
    audioEngine.speakText(`Selected ${wordItem.word}! ${wordItem.prompt}`, { rate: 0.85 });
  };

  const handleListenClick = () => {
    if (isListening) {
      voiceRecognition.stopListening();
      setIsListening(false);
      return;
    }

    setTranscript('');
    setIsSuccess(false);
    setMicError('');
    audioEngine.playAudioEffect('click');

    const started = voiceRecognition.startListening({
      targetWord: targetObj.word,
      onStart: () => {
        setIsListening(true);
        setStatusMessage('🎤 Listening... Say the word now!');
      },
      onResult: ({ transcript: text, isFinal, isMatch }) => {
        setTranscript(text);
        if (isMatch) {
          handleSuccessResult(text);
        } else if (isFinal) {
          handleTryAgainResult(text);
        }
      },
      onError: (msg) => {
        setIsListening(false);
        setMicError(msg);
        setStatusMessage(msg);
        audioEngine.speakText("Tap the mic or try the speech simulator button!", { rate: 0.85 });
      },
      onEnd: () => {
        setIsListening(false);
      }
    });

    if (!started && !voiceRecognition.isSupported) {
      setMicError('Web Speech Recognition is not supported in this browser. Use the Voice Simulator below!');
      setStatusMessage('Use the Voice Simulator below to practice!');
    }
  };

  const handleSuccessResult = (spokenText) => {
    voiceRecognition.stopListening();
    setIsListening(false);
    setIsSuccess(true);
    setStatusMessage(`🎉 Super Star! You pronounced "${targetObj.word}"!`);
    audioEngine.playAudioEffect('correct');

    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      audioEngine.playAudioEffect('star');
      audioEngine.speakText(`Super job! You said ${targetObj.word} perfectly!`, { rate: 0.85 });
      onAwardStar();
    }, 300);
  };

  const handleTryAgainResult = (spokenText) => {
    audioEngine.playAudioEffect('tryAgain');
    setStatusMessage(`Heard: "${spokenText}". Let's try again! Say "${targetObj.word}".`);
    audioEngine.speakText(`Good try! Listen again: ${targetObj.word}!`, { rate: 0.8 });
  };

  const simulateVoiceInput = (simulateCorrect = true) => {
    audioEngine.playAudioEffect('click');
    setIsListening(true);
    setStatusMessage('🎙️ Simulating child speaking...');

    setTimeout(() => {
      setIsListening(false);
      if (simulateCorrect) {
        setTranscript(targetObj.word.toLowerCase());
        handleSuccessResult(targetObj.word);
      } else {
        setTranscript('cat');
        handleTryAgainResult('cat');
      }
    }, 1500);
  };

  const playTargetAudioPrompt = () => {
    audioEngine.playAudioEffect('click');
    audioEngine.speakText(`Say the word: ${targetObj.word}! ${targetObj.letters.join(' . ')} . ${targetObj.word}!`, { rate: 0.75 });
  };

  const nextWord = () => {
    audioEngine.playAudioEffect('click');
    setWordIndex((prev) => (prev + 1) % filteredWords.length);
  };

  const prevWord = () => {
    audioEngine.playAudioEffect('click');
    setWordIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  return (
    <div className="mode-container say-and-play">
      {/* Top Header Bar */}
      <div className="mode-header glass-panel">
        <div className="title-area">
          <h2>🎙️ Say & Play (Voice Studio)</h2>
          <p>Practice speaking words out loud: interaction box on left, word list on right!</p>
        </div>

        <div className="word-nav-controls">
          <button className="btn-secondary nav-arrow" onClick={prevWord} title="Previous Word">
            <ArrowLeft className="icon-md" />
            <span>Prev</span>
          </button>
          <span className="word-progress-badge">Word {wordIndex + 1} of {filteredWords.length}</span>
          <button className="btn-secondary nav-arrow" onClick={nextWord} title="Next Word">
            <span>Next</span>
            <ArrowRight className="icon-md" />
          </button>
        </div>
      </div>

      {/* Optimized Main Layout: Left Interaction Stage + Right Word List Panel */}
      <div className="say-play-split-layout">
        {/* LEFT COLUMN: Main Interaction Stage */}
        <div className="left-interaction-box glass-panel">
          <div className="target-display-header">
            <span className="target-emoji floating-anim">{targetObj.emoji}</span>
            <div className="target-title-block">
              <span className="word-category-tag">{targetObj.category}</span>
              <h1 className="target-word-title">{targetObj.word}</h1>
            </div>

            <button className="btn-speaker demo-audio-btn" onClick={playTargetAudioPrompt}>
              <Volume2 className="icon-md" />
              <span>Hear Sound</span>
            </button>
          </div>

          <div className="interaction-core-stage">
            {/* Microphone Button */}
            <div className="mic-action-area">
              <button
                className={`mic-button ${isListening ? 'listening-pulse' : ''} ${isSuccess ? 'success-gold' : ''}`}
                onClick={handleListenClick}
                aria-label="Microphone"
              >
                {isListening ? (
                  <Radio className="icon-xl spin-anim" />
                ) : isSuccess ? (
                  <CheckCircle className="icon-xl" />
                ) : (
                  <Mic className="icon-xl" />
                )}
              </button>

              {isListening && (
                <div className="waveform-visualizer">
                  <div className="bar bar1"></div>
                  <div className="bar bar2"></div>
                  <div className="bar bar3"></div>
                  <div className="bar bar4"></div>
                  <div className="bar bar5"></div>
                </div>
              )}
            </div>

            {/* Status & Feedback */}
            <div className="voice-status-box">
              <p className="status-text">{statusMessage}</p>
              {transcript && (
                <div className="transcript-chip">
                  <span className="chip-label">Heard:</span>
                  <strong className="chip-value">"{transcript}"</strong>
                </div>
              )}
            </div>

            {/* Stage Quick Controls */}
            <div className="stage-controls-row">
              <div className="quick-word-nav">
                <button className="btn-secondary" onClick={prevWord}>
                  <ArrowLeft className="icon-sm" />
                  <span>Prev Word</span>
                </button>
                <button className="btn-primary" onClick={nextWord}>
                  <span>Next Word</span>
                  <ArrowRight className="icon-sm" />
                </button>
              </div>

              <div className="simulator-box compact-sim">
                <span className="sim-title">Voice Simulator:</span>
                <button className="btn-secondary sim-btn" onClick={() => simulateVoiceInput(true)}>
                  <span>✨ Test Voice ("{targetObj.word}")</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Word Selection Panel */}
        <div className="right-words-panel glass-panel">
          <div className="panel-header-strip">
            <div className="panel-title">
              <Grid className="icon-sm text-gold" />
              <span>Pick a Word to Practice:</span>
            </div>

            <div className="category-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="word-cards-vertical-grid">
            {filteredWords.map((item, idx) => {
              const isCurrent = idx === wordIndex;

              return (
                <button
                  key={item.id}
                  className={`word-select-card ${isCurrent ? 'selected-card' : ''}`}
                  onClick={() => handleSelectWord(idx, item)}
                >
                  <span className="card-emoji">{item.emoji}</span>
                  <div className="card-text-group">
                    <span className="card-word">{item.word}</span>
                    <span className="card-cat">{item.category}</span>
                  </div>
                  {isCurrent && <span className="active-star-badge">⭐</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
