import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, Music, Star, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RHYME_DATA } from '../utils/phonicsData';
import { audioEngine } from '../utils/audioEngine';

export function RhymeTime({ onAwardStar }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentLevel = RHYME_DATA[currentIndex];

  const [selectedOption, setSelectedOption] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    initLevel(currentLevel);
  }, [currentIndex]);

  const initLevel = (level) => {
    setSelectedOption(null);
    setIsCompleted(false);
    audioEngine.speakText(level.hint, { rate: 0.8 });
  };

  const handleOptionClick = (option) => {
    if (isCompleted) return;

    setSelectedOption(option);
    audioEngine.playAudioEffect('pop');
    audioEngine.speakText(option.word, { rate: 0.85 });

    if (option.isRhyme) {
      setIsCompleted(true);
      audioEngine.playAudioEffect('correct');

      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        audioEngine.playAudioEffect('star');
        audioEngine.speakText(`YES! ${currentLevel.targetWord} and ${option.word} rhyme! Super job!`, { rate: 0.85 });
        onAwardStar();
      }, 300);
    } else {
      audioEngine.playAudioEffect('tryAgain');
      audioEngine.speakText(`Hmm, ${currentLevel.targetWord} and ${option.word} do not rhyme. Listen again!`, { rate: 0.8 });
    }
  };

  const nextRhyme = () => {
    audioEngine.playAudioEffect('click');
    setCurrentIndex((prev) => (prev + 1) % RHYME_DATA.length);
  };

  const speakHint = () => {
    audioEngine.playAudioEffect('click');
    audioEngine.speakText(currentLevel.hint, { rate: 0.8 });
  };

  return (
    <div className="mode-container rhyme-time">
      <div className="mode-header glass-panel">
        <div className="title-area">
          <h2>🎵 Rhyme Time</h2>
          <p>Find the word that rhymes with the target sound!</p>
        </div>

        <div className="word-nav-controls">
          <span className="word-progress-badge">Rhyme {currentIndex + 1} of {RHYME_DATA.length}</span>
          <button className="btn-secondary nav-arrow" onClick={nextRhyme}>
            <span>Next</span>
            <ArrowRight className="icon-md" />
          </button>
        </div>
      </div>

      <div className="spelling-stage glass-panel">
        {/* Target Rhyme Word Card */}
        <div className="picture-card">
          <span className="picture-emoji floating-anim">{currentLevel.targetEmoji}</span>
          <h1 className="target-word-title">{currentLevel.targetWord}</h1>
          <button className="btn-speaker prompt-audio-btn" onClick={speakHint}>
            <Volume2 className="icon-md" />
            <span>Hear Hint</span>
          </button>
        </div>

        <div className="rhyme-options-section">
          <p className="bank-title">Tap the picture that RHYMES with "{currentLevel.targetWord}":</p>

          <div className="rhyme-cards-grid">
            {currentLevel.options.map((opt) => {
              const isSelected = selectedOption?.word === opt.word;

              return (
                <button
                  key={opt.word}
                  className={`rhyme-choice-card ${isSelected ? (opt.isRhyme ? 'correct-glow' : 'wrong-shake') : ''}`}
                  onClick={() => handleOptionClick(opt)}
                >
                  <span className="choice-emoji">{opt.emoji}</span>
                  <span className="choice-word">{opt.word}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Success Banner */}
        {isCompleted && (
          <div className="success-banner pop-in-anim">
            <CheckCircle className="icon-lg text-green" />
            <div className="banner-info">
              <h3>RHYME MATCH!</h3>
              <p><strong>{currentLevel.targetWord}</strong> & <strong>{selectedOption.word}</strong> sound the same!</p>
            </div>

            <button className="btn-primary next-btn pulse-anim" onClick={nextRhyme}>
              <span>Next Rhyme</span>
              <ArrowRight className="icon-md" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
