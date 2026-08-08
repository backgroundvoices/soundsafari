import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Sparkles, ArrowRight, ArrowLeft, Play, CheckCircle, Shuffle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SENTENCES_DATA } from '../utils/phonicsData';
import { audioEngine } from '../utils/audioEngine';

export function SentenceSafari({ onAwardStar }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredSentences, setFilteredSentences] = useState(SENTENCES_DATA);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const currentSentenceObj = filteredSentences[sentenceIndex] || filteredSentences[0];

  const [placedWords, setPlacedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(null);

  // Identifies the sentence on screen. Reading a solved sentence aloud spans
  // one word per utterance plus a final pass, and the praise waits on all of
  // it, so a child pressing Next lands in the middle of that chain. Every
  // continuation captures the token it began under and stops if the sentence
  // has moved on. A boolean cannot do this: cancelling speech resolves the
  // pending utterance a task later, after the next sentence's effect has
  // already cleared the flag, so the stale work would read itself as current.
  const sentenceTokenRef = useRef(0);
  const successTimerRef = useRef(null);
  const categories = ['All', 'Animals', 'Nature', 'School', 'Toys', 'Family', 'Food'];

  useEffect(() => {
    return () => {
      sentenceTokenRef.current += 1;
      if (successTimerRef.current !== null) {
        clearTimeout(successTimerRef.current);
        successTimerRef.current = null;
      }
      audioEngine.stopSpeech();
    };
  }, []);

  // Shuffle sentences on initial load or category change
  useEffect(() => {
    let list = SENTENCES_DATA;
    if (selectedCategory !== 'All') {
      list = SENTENCES_DATA.filter(s => s.category === selectedCategory);
    }
    const randomizedList = [...list].sort(() => 0.5 - Math.random());
    setFilteredSentences(randomizedList);
    setSentenceIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    sentenceTokenRef.current += 1;
    if (currentSentenceObj) {
      initSentence(currentSentenceObj);
    }
    return () => {
      if (successTimerRef.current !== null) {
        clearTimeout(successTimerRef.current);
        successTimerRef.current = null;
      }
    };
  }, [sentenceIndex, filteredSentences]);

  const initSentence = (obj) => {
    setPlacedWords([]);
    setIsCompleted(false);
    setActiveHighlightIndex(null);

    const shuffledWords = [...obj.words].sort(() => 0.5 - Math.random());
    const wordTiles = shuffledWords.map((w, idx) => ({
      id: `${w}-${idx}-${Date.now()}-${Math.random()}`,
      text: w
    }));

    setAvailableWords(wordTiles);
    audioEngine.speakText(`Build the sentence: ${obj.audioHint}`, { rate: 0.8 });
  };

  const handleWordTileClick = (tile) => {
    if (isCompleted) return;

    audioEngine.playAudioEffect('pop');
    audioEngine.speakText(tile.text, { rate: 0.85 });

    const newPlaced = [...placedWords, tile];
    setPlacedWords(newPlaced);
    setAvailableWords(availableWords.filter(w => w.id !== tile.id));

    if (newPlaced.length === currentSentenceObj.words.length) {
      const builtString = newPlaced.map(w => w.text).join(' ');
      if (builtString === currentSentenceObj.targetSentence) {
        handleSuccess();
      } else {
        handleMistake();
      }
    }
  };

  const handlePlacedWordClick = (index) => {
    if (isCompleted) return;

    const tileToRemove = placedWords[index];
    if (!tileToRemove) return;

    audioEngine.playAudioEffect('click');
    const newPlaced = [...placedWords];
    newPlaced.splice(index, 1);
    setPlacedWords(newPlaced);

    setAvailableWords([...availableWords, tileToRemove]);
  };

  const handleSuccess = () => {
    setIsCompleted(true);
    audioEngine.playAudioEffect('correct');

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });

    // The star is earned by building the sentence, so it is awarded here
    // rather than after the reading: a child who presses Next straight away
    // has still built it.
    onAwardStar();

    const token = sentenceTokenRef.current;
    const solvedSentence = currentSentenceObj;

    successTimerRef.current = setTimeout(() => {
      successTimerRef.current = null;
      if (sentenceTokenRef.current !== token) return;

      readAloudWithHighlighting(token, solvedSentence).then(() => {
        if (sentenceTokenRef.current !== token) return;
        audioEngine.playAudioEffect('star');
        audioEngine.speakText("Way to go! You built a full sentence!", { rate: 0.85 });
      });
    }, 400);
  };

  const handleMistake = () => {
    audioEngine.playAudioEffect('tryAgain');
    audioEngine.speakText("Oops! Let's check the word order. Tap a word to change it!", { rate: 0.8 });
  };

  // Reads `sentenceObj` word by word under `token`, abandoning the run as soon
  // as the screen has moved on to another sentence.
  const readAloudWithHighlighting = async (token, sentenceObj) => {
    const words = sentenceObj.words;
    for (let i = 0; i < words.length; i++) {
      if (sentenceTokenRef.current !== token) return;
      setActiveHighlightIndex(i);
      await audioEngine.speakText(words[i], { rate: 0.75 });
    }
    if (sentenceTokenRef.current !== token) return;
    setActiveHighlightIndex(null);
    await audioEngine.speakText(sentenceObj.targetSentence, { rate: 0.8 });
  };

  const getRandomSentence = () => {
    audioEngine.stopSpeech();
    audioEngine.playAudioEffect('click');
    const randomIndex = Math.floor(Math.random() * filteredSentences.length);
    setSentenceIndex(randomIndex);
  };

  const nextSentence = () => {
    audioEngine.stopSpeech();
    audioEngine.playAudioEffect('click');
    setSentenceIndex((prev) => (prev + 1) % filteredSentences.length);
  };

  const prevSentence = () => {
    audioEngine.stopSpeech();
    audioEngine.playAudioEffect('click');
    setSentenceIndex((prev) => (prev - 1 + filteredSentences.length) % filteredSentences.length);
  };

  return (
    <div className="mode-container sentence-safari">
      <div className="mode-header glass-panel">
        <div className="title-area">
          <h2>🦁 Sentence Safari</h2>
          <p>Arrange word cards to create simple sentences. Random & fresh every time!</p>
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

          <button className="btn-primary shuffle-btn" onClick={getRandomSentence} title="Random Sentence">
            <Shuffle className="icon-md" />
            <span>Random</span>
          </button>

          <div className="word-nav-controls">
            <button className="btn-secondary nav-arrow" onClick={prevSentence}>
              <ArrowLeft className="icon-md" />
              <span>Prev</span>
            </button>
            <span className="word-progress-badge">Sentence {sentenceIndex + 1} of {filteredSentences.length}</span>
            <button className="btn-secondary nav-arrow" onClick={nextSentence}>
              <span>Next</span>
              <ArrowRight className="icon-md" />
            </button>
          </div>
        </div>
      </div>

      <div className="sentence-stage glass-panel">
        <div className="sentence-picture-card">
          <span className="sentence-emoji floating-anim">{currentSentenceObj.emoji}</span>
          <span className="word-category-tag">{currentSentenceObj.category}</span>
          <button 
            className="btn-speaker hint-btn"
            onClick={() => audioEngine.speakText(`Hint: ${currentSentenceObj.audioHint}`, { rate: 0.8 })}
          >
            <Volume2 className="icon-md" />
            <span>Hear Hint</span>
          </button>
        </div>

        {/* Target Sentence Strip */}
        <div className={`sentence-slots-strip ${isCompleted ? 'success-anim' : ''}`}>
          {Array.from({ length: currentSentenceObj.words.length }).map((_, idx) => {
            const wordTile = placedWords[idx];
            const isHighlighted = activeHighlightIndex === idx;

            return (
              <div
                key={idx}
                className={`sentence-word-slot ${wordTile ? 'filled' : 'empty'} ${isHighlighted ? 'active-highlight' : ''}`}
                onClick={() => handlePlacedWordClick(idx)}
              >
                {wordTile ? (
                  <span className="word-text">{wordTile.text}</span>
                ) : (
                  <span className="slot-placeholder">Word {idx + 1}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Success Banner & Read-Along */}
        {isCompleted && (
          <div className="success-banner pop-in-anim">
            <CheckCircle className="icon-lg text-green" />
            <div className="banner-info">
              <h3>GREAT READING!</h3>
              <p>"{currentSentenceObj.targetSentence}"</p>
            </div>

            <div className="banner-actions">
              <button
                className="btn-secondary read-again-btn"
                onClick={() =>
                  readAloudWithHighlighting(sentenceTokenRef.current, currentSentenceObj)
                }
              >
                <Play className="icon-sm" />
                <span>Read Along Again</span>
              </button>
              <button className="btn-primary next-btn pulse-anim" onClick={nextSentence}>
                <span>Next Sentence</span>
                <ArrowRight className="icon-md" />
              </button>
            </div>
          </div>
        )}

        {/* Scrambled Word Cards Bank */}
        <div className="word-bank-section">
          <p className="bank-title">Tap the word cards in correct order:</p>
          <div className="words-flex-bank">
            {availableWords.map((wordTile) => (
              <button
                key={wordTile.id}
                className="word-card-btn bounce-on-hover"
                onClick={() => handleWordTileClick(wordTile)}
              >
                <span>{wordTile.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
