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
    setStatusMessage('Tap the mic button and say this word out loud!');
  };

  const handleSelectWord = (index, wordItem) => {
    audioEngine.playAudioEffect('pop');
    setWordIndex(index);
    audioEngine.speakText("Your turn! Tap the mic and say this word out loud!", { rate: 0.85 });
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
        audioEngine.speakText("Tap the mic button to try speaking again!", { rate: 0.85 });
      },
      onEnd: () => {
        setIsListening(false);
      }
    });

    if (!started && !voiceRecognition.isSupported) {
      setMicError('Speech recognition requires browser microphone permissions.');
      setStatusMessage('Please enable microphone access in your browser to speak!');
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
    audioEngine.speakText(`Good try! Say it into the mic again!`, { rate: 0.8 });
  };

  // Spells the word out and stops there: saying it would be the answer, since
  // pronouncing it is the child's job on this page.
  const handleHearLetters = () => {
    audioEngine.playAudioEffect('click');
    audioEngine.speakText(`${targetObj.letters.join(' . ')} . Now say the word!`, { rate: 0.75 });
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
      <div className="mode-header glass-panel">
        <div className="title-area">
          <h2>🎙️ Say & Play (Voice Studio)</h2>
          <p>Tap the microphone and say the word out loud to test your pronunciation!</p>
        </div>

        <div className="word-nav-controls">
          <span className="word-progress-badge">Word {wordIndex + 1} of {filteredWords.length}</span>
        </div>
      </div>

      <div className="say-play-split-layout">
        {/* LEFT COLUMN: Main Interaction Stage */}
        <div className="left-interaction-box glass-panel">
          {/* Centered Target Word Hero Display */}
          <div className="hero-target-card">
            <span className="target-emoji floating-anim">{targetObj.emoji}</span>
            <div className="target-title-block">
              <span className="target-word-title">{targetObj.word}</span>
              <span className="word-category-tag">{targetObj.category}</span>
            </div>
            
            <button
              className="btn-speaker sound-hint-btn"
              onClick={handleHearLetters}
              title="Hear the letters"
            >
              <Volume2 className="icon-sm" />
              <span>Hear Letters</span>
            </button>
          </div>

          {/* Microphone Core Stage */}
          <div className="interaction-core-stage">
            <div className="mic-action-area">
              <button 
                className={`mic-button ${isListening ? 'listening-pulse' : ''} ${isSuccess ? 'success-gold' : ''}`}
                onClick={handleListenClick}
                aria-label="Microphone"
              >
                {isSuccess ? (
                  <CheckCircle className="icon-xl text-green" />
                ) : (
                  <Mic className="icon-xl" />
                )}
              </button>

              {/* Pulsing Waveform Bars */}
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

            {/* Audio Feedback Status Box */}
            <div className="voice-status-box">
              <p className={`status-text ${isSuccess ? 'text-green' : ''}`}>
                {statusMessage}
              </p>
              {transcript && (
                <div className="transcript-chip">
                  <span>Speech Detected: <strong>"{transcript}"</strong></span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Word Nav Buttons */}
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
              const isSelected = wordIndex === idx;
              return (
                <button
                  key={item.id}
                  className={`word-select-card ${isSelected ? 'selected-card' : ''}`}
                  onClick={() => handleSelectWord(idx, item)}
                >
                  <span className="card-emoji">{item.emoji}</span>
                  <div className="card-text-group">
                    <span className="card-word">{item.word}</span>
                    <span className="card-cat">{item.category}</span>
                  </div>
                  {isSelected && <span className="active-star-badge">⭐</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
