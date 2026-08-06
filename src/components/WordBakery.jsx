import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, ArrowRight, ArrowLeft, RefreshCw, Star, CheckCircle, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CVC_WORDS } from '../utils/phonicsData';
import { audioEngine } from '../utils/audioEngine';

export function WordBakery({ onAwardStar }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredList, setFilteredList] = useState(CVC_WORDS);
  const [wordIndex, setWordIndex] = useState(0);

  const currentWord = filteredList[wordIndex] || filteredList[0];

  const [slots, setSlots] = useState(Array(currentWord.letters.length).fill(null));
  const [availableTiles, setAvailableTiles] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const categories = ['All', 'Animals', 'Home', 'Nature', 'Vehicles', 'Food'];

  useEffect(() => {
    let list = CVC_WORDS;
    if (selectedCategory !== 'All') {
      list = CVC_WORDS.filter(w => w.category === selectedCategory);
    }
    setFilteredList(list);
    setWordIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    if (currentWord) {
      initWord(currentWord);
    }
  }, [wordIndex, filteredList]);

  const initWord = (wordObj) => {
    setSlots(Array(wordObj.letters.length).fill(null));
    setIsCompleted(false);

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const distractors = alphabet
      .filter(l => !wordObj.letters.includes(l))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const allTiles = [...wordObj.letters, ...distractors]
      .map((letter, idx) => ({ id: `${letter}-${idx}-${Date.now()}`, letter }))
      .sort(() => 0.5 - Math.random());

    setAvailableTiles(allTiles);
    audioEngine.speakText(`${wordObj.prompt} Listen: ${wordObj.word}!`, { rate: 0.8 });
  };

  const handleTileClick = (tile) => {
    if (isCompleted) return;

    const emptyIndex = slots.findIndex(s => s === null);
    if (emptyIndex === -1) return;

    audioEngine.playAudioEffect('pop');
    audioEngine.speakText(tile.letter, { rate: 0.9 });

    const newSlots = [...slots];
    newSlots[emptyIndex] = tile;
    setSlots(newSlots);

    setAvailableTiles(availableTiles.filter(t => t.id !== tile.id));

    const currentSpelling = newSlots.map(s => s ? s.letter : '').join('');
    if (newSlots.every(s => s !== null)) {
      if (currentSpelling === currentWord.word) {
        handleSuccess();
      } else {
        handleMistake();
      }
    }
  };

  const handleSlotClick = (index) => {
    if (isCompleted) return;

    const tileToRemove = slots[index];
    if (!tileToRemove) return;

    audioEngine.playAudioEffect('click');
    const newSlots = [...slots];
    newSlots[index] = null;
    setSlots(newSlots);

    setAvailableTiles([...availableTiles, tileToRemove]);
  };

  const handleSuccess = () => {
    setIsCompleted(true);
    audioEngine.playAudioEffect('correct');
    
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      audioEngine.speakWordSlowly(currentWord.word).then(() => {
        audioEngine.playAudioEffect('star');
        audioEngine.speakText(`Awesome! You spelled ${currentWord.word}!`, { rate: 0.85 });
        onAwardStar();
      });
    }, 400);
  };

  const handleMistake = () => {
    audioEngine.playAudioEffect('tryAgain');
    audioEngine.speakText("Let's try again! Listen closely to the letters.", { rate: 0.8 });
  };

  const nextWord = () => {
    audioEngine.playAudioEffect('click');
    setWordIndex((prev) => (prev + 1) % filteredList.length);
  };

  const prevWord = () => {
    audioEngine.playAudioEffect('click');
    setWordIndex((prev) => (prev - 1 + filteredList.length) % filteredList.length);
  };

  const speakPrompt = () => {
    audioEngine.playAudioEffect('click');
    audioEngine.speakText(`Spell ${currentWord.word}! ${currentWord.letters.join(' . ')} . ${currentWord.word}!`, { rate: 0.75 });
  };

  return (
    <div className="mode-container word-bakery">
      <div className="mode-header glass-panel">
        <div className="title-area">
          <h2>🧁 Word Bakery</h2>
          <p>Spell 40+ CVC words with drag/tap letter blocks!</p>
        </div>

        <div className="action-buttons">
          <div className="filter-group">
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

          <div className="word-nav-controls">
            <button className="btn-secondary nav-arrow" onClick={prevWord}>
              <ArrowLeft className="icon-md" />
              <span>Prev</span>
            </button>
            <span className="word-progress-badge">Word {wordIndex + 1} of {filteredList.length}</span>
            <button className="btn-secondary nav-arrow" onClick={nextWord}>
              <span>Next</span>
              <ArrowRight className="icon-md" />
            </button>
          </div>
        </div>
      </div>

      <div className="spelling-stage glass-panel">
        <div className="picture-card">
          <span className="picture-emoji floating-anim">{currentWord.emoji}</span>
          <span className="word-category-tag">{currentWord.category}</span>
          <button className="btn-speaker prompt-audio-btn" onClick={speakPrompt}>
            <Volume2 className="icon-md" />
            <span>Hear Word</span>
          </button>
        </div>

        <div className={`spelling-slots ${isCompleted ? 'success-anim' : ''}`}>
          {slots.map((slot, idx) => (
            <div
              key={idx}
              className={`letter-slot ${slot ? 'filled' : 'empty'}`}
              onClick={() => handleSlotClick(idx)}
            >
              {slot ? (
                <span className="slot-letter-text">{slot.letter}</span>
              ) : (
                <span className="slot-placeholder">?</span>
              )}
            </div>
          ))}
        </div>

        {isCompleted && (
          <div className="success-banner pop-in-anim">
            <CheckCircle className="icon-lg text-green" />
            <div className="banner-info">
              <h3>SUPER JOB!</h3>
              <p>You spelled <strong>{currentWord.word}</strong>!</p>
            </div>
            <button className="btn-primary next-btn pulse-anim" onClick={nextWord}>
              <span>Next Word</span>
              <ArrowRight className="icon-md" />
            </button>
          </div>
        )}

        <div className="choices-bank-section">
          <p className="bank-title">Tap a letter block to build the word:</p>
          <div className="tiles-bank">
            {availableTiles.map((tile) => (
              <button
                key={tile.id}
                className="letter-tile-btn bounce-on-hover"
                onClick={() => handleTileClick(tile)}
              >
                <span>{tile.letter}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="btn-tertiary reset-word-btn" onClick={() => initWord(currentWord)}>
          <RefreshCw className="icon-xs" />
          <span>Reset Letters</span>
        </button>
      </div>
    </div>
  );
}
