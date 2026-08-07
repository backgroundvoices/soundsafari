import React, { useState } from 'react';
import { Volume2, Sparkles, Star, Play, CheckCircle } from 'lucide-react';
import { ALPHABET_DATA } from '../utils/phonicsData';
import { audioEngine } from '../utils/audioEngine';

export function PhonicsJungle({ onAwardStar }) {
  const [selectedLetter, setSelectedLetter] = useState(ALPHABET_DATA[0]);
  const [filter, setFilter] = useState('all');
  const [learnedLetters, setLearnedLetters] = useState(new Set(['A']));

  const vowels = ['A', 'E', 'I', 'O', 'U'];

  const filteredAlphabet = ALPHABET_DATA.filter((item) => {
    if (filter === 'vowels') return vowels.includes(item.letter);
    if (filter === 'consonants') return !vowels.includes(item.letter);
    return true;
  });

  const handleLetterClick = (item) => {
    setSelectedLetter(item);
    audioEngine.playAudioEffect('pop');
    audioEngine.speakPhonics(item.letter, item.sound, item.word);

    if (!learnedLetters.has(item.letter)) {
      const nextLearned = new Set(learnedLetters);
      nextLearned.add(item.letter);
      setLearnedLetters(nextLearned);
      onAwardStar();
    }
  };

  const handleExampleWordClick = (word) => {
    audioEngine.playAudioEffect('click');
    audioEngine.speakText(`${word}! Starts with ${selectedLetter.letter}!`, { rate: 0.8 });
  };

  return (
    <div className="mode-container phonics-jungle">
      <div className="mode-header glass-panel">
        <div className="title-area">
          <h2>🔤 Phonics Jungle</h2>
          <p>Tap any letter to hear its name, phonics sound, and example words!</p>
        </div>

        <div className="action-buttons">
          <div className="filter-group">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All A-Z
            </button>
            <button 
              className={`filter-btn ${filter === 'vowels' ? 'active' : ''}`}
              onClick={() => setFilter('vowels')}
            >
              Vowels (A,E,I,O,U)
            </button>
            <button 
              className={`filter-btn ${filter === 'consonants' ? 'active' : ''}`}
              onClick={() => setFilter('consonants')}
            >
              Consonants
            </button>
          </div>
        </div>
      </div>

      <div className="phonics-main-layout">
        {/* Selected Letter Spotlight Card */}
        {selectedLetter && (
          <div className="spotlight-card glass-panel" style={{ borderColor: selectedLetter.color }}>
            <div className="spotlight-badge" style={{ backgroundColor: selectedLetter.color }}>
              <span>{selectedLetter.phoneticText}</span>
            </div>

            <div className="spotlight-display">
              <span className="big-letter">{selectedLetter.letter}</span>
              <span className="small-letter">{selectedLetter.lower}</span>
              <span className="big-emoji floating-anim">{selectedLetter.emoji}</span>
            </div>

            <div className="sound-description">
              <h3>"{selectedLetter.letter}" says <span className="sound-highlight">"{selectedLetter.sound}"</span></h3>
              <p className="word-cue">like <strong style={{ color: selectedLetter.color }}>{selectedLetter.word}</strong></p>
            </div>

            <div className="spotlight-actions">
              <button 
                className="btn-speaker pulse-anim"
                onClick={() => handleLetterClick(selectedLetter)}
              >
                <Volume2 className="icon-lg" />
                <span>Hear Sound Again</span>
              </button>
            </div>

            <div className="example-words-section">
              <h4>More Words with "{selectedLetter.letter}":</h4>
              <div className="example-chips">
                {selectedLetter.exampleWords.map((word) => (
                  <button 
                    key={word} 
                    className="word-chip"
                    onClick={() => handleExampleWordClick(word)}
                  >
                    <span>{word}</span>
                    <Volume2 className="icon-xs" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 26-Letter Grid */}
        <div className="letters-grid">
          {filteredAlphabet.map((item) => {
            const isSelected = selectedLetter?.letter === item.letter;
            const isLearned = learnedLetters.has(item.letter);

            return (
              <button
                key={item.letter}
                className={`letter-card ${isSelected ? 'selected' : ''} ${isLearned ? 'learned' : ''}`}
                style={{ '--card-accent': item.color }}
                onClick={() => handleLetterClick(item)}
              >
                {isLearned && <span className="learned-badge">⭐</span>}
                <span className="card-letter">{item.letter}</span>
                <span className="card-lower">{item.lower}</span>
                <span className="card-emoji">{item.emoji}</span>
                <span className="card-sound">{item.sound}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
