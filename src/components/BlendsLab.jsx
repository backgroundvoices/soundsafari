import React, { useState } from 'react';
import { Volume2, Sparkles, Star } from 'lucide-react';
import { BLENDS_DATA } from '../utils/phonicsData';
import { audioEngine } from '../utils/audioEngine';

export function BlendsLab({ onAwardStar }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlend, setSelectedBlend] = useState(BLENDS_DATA[0]);
  const [exploredBlends, setExploredBlends] = useState(new Set(['CH']));

  const categories = ['All', 'H-Digraphs', 'L-Blends', 'R-Blends', 'S-Blends'];

  const filteredBlends = BLENDS_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleBlendClick = (blendObj) => {
    setSelectedBlend(blendObj);
    audioEngine.playAudioEffect('pop');
    audioEngine.speakBlend(blendObj);

    if (!exploredBlends.has(blendObj.blend)) {
      const nextExplored = new Set(exploredBlends);
      nextExplored.add(blendObj.blend);
      setExploredBlends(nextExplored);
      onAwardStar();
    }
  };

  const handleExampleClick = (word) => {
    audioEngine.playAudioEffect('click');
    audioEngine.speakText(`${word}! Starts with the ${selectedBlend.blend} sound!`, { rate: 0.8 });
  };

  return (
    <div className="mode-container blends-lab">
      <div className="mode-header glass-panel">
        <div className="title-area">
          <h2>🧩 Digraphs & Blends Lab (25 Blends!)</h2>
          <p>Learn how two letters combine to make special sounds!</p>
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
        </div>
      </div>

      <div className="phonics-main-layout">
        {/* Selected Blend Card */}
        {selectedBlend && (
          <div className="spotlight-card glass-panel" style={{ borderColor: '#c084fc' }}>
            <div className="spotlight-badge" style={{ backgroundColor: '#9333ea' }}>
              <span>{selectedBlend.phoneticText} • {selectedBlend.category}</span>
            </div>

            <div className="spotlight-display">
              <span className="big-letter">{selectedBlend.blend}</span>
              <span className="big-emoji floating-anim">{selectedBlend.emoji}</span>
            </div>

            <div className="sound-description">
              <h3>Letters {selectedBlend.letters} make the <span className="sound-highlight">"{selectedBlend.sound}"</span> sound</h3>
              <p className="word-cue">like <strong style={{ color: '#c084fc' }}>{selectedBlend.word}</strong></p>
            </div>

            <button 
              className="btn-speaker pulse-anim"
              onClick={() => handleBlendClick(selectedBlend)}
            >
              <Volume2 className="icon-lg" />
              <span>Hear Sound Again</span>
            </button>

            <div className="example-words-section">
              <h4>Words starting with "{selectedBlend.blend}":</h4>
              <div className="example-chips">
                {selectedBlend.exampleWords.map((word) => (
                  <button 
                    key={word}
                    className="word-chip"
                    onClick={() => handleExampleClick(word)}
                  >
                    <span>{word}</span>
                    <Volume2 className="icon-xs" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Blends Grid */}
        <div className="letters-grid">
          {filteredBlends.map((item) => {
            const isSelected = selectedBlend?.id === item.id;
            const isExplored = exploredBlends.has(item.blend);

            return (
              <button
                key={item.id}
                className={`letter-card ${isSelected ? 'selected' : ''}`}
                style={{ '--card-accent': '#c084fc' }}
                onClick={() => handleBlendClick(item)}
              >
                {isExplored && <span className="learned-badge">⭐</span>}
                <span className="card-letter">{item.blend}</span>
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
