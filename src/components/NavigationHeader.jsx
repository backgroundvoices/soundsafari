import React from 'react';
import { Volume2, Award, Settings, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export function NavigationHeader({ currentMode, setMode, starsCount, openStickers, openSettings }) {
  const modes = [
    { id: 'phonics', label: 'Alphabet', icon: '🔤', prompt: 'Alphabet Phonics Jungle! Learn letter sounds.' },
    { id: 'voice', label: 'Say & Play', icon: '🎙️', prompt: 'Say and Play! Practice speaking words out loud.' },
    { id: 'words', label: 'Word Bakery', icon: '🧁', prompt: 'Word Bakery! Spell common CVC words.' },
    { id: 'sentences', label: 'Sentence', icon: '🦁', prompt: 'Sentence Safari! Build simple sentences.' },
    { id: 'blends', label: 'Blend', icon: '🧩', prompt: 'Blends Lab! Learn CH, SH, TH and blend sounds.' },
    { id: 'rhyme', label: 'Rhyme', icon: '🎵', prompt: 'Rhyme Time! Find matching rhyming words.' }
  ];

  const handleModeClick = (mode) => {
    audioEngine.stopSpeech();
    audioEngine.playAudioEffect('click');
    audioEngine.speakText(mode.prompt, { rate: 0.85 });
    setMode(mode.id);
  };

  return (
    <header className="app-header glass-panel">
      <div className="header-brand" onClick={() => audioEngine.speakText('SoundSafari! Ready for school!', { rate: 0.85 })}>
        <span className="brand-logo floating-anim">🦁</span>
        <div className="brand-text">
          <span className="brand-name">SoundSafari</span>
          <span className="brand-tagline">Pre-K Sound Academy</span>
        </div>
      </div>

      <nav className="header-nav">
        {modes.map((m) => (
          <button
            key={m.id}
            className={`nav-tab ${currentMode === m.id ? 'active' : ''}`}
            onClick={() => handleModeClick(m)}
            aria-label={m.label}
          >
            <span className="tab-icon">{m.icon}</span>
            <span className="tab-label">{m.label}</span>
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <button 
          className="star-counter-btn badge-btn" 
          onClick={() => {
            audioEngine.playAudioEffect('star');
            audioEngine.speakText(`You have earned ${starsCount} stars! Open sticker book!`);
            openStickers();
          }}
          title="Sticker Album"
        >
          <span className="star-icon">⭐</span>
          <span className="star-val">{starsCount}</span>
          <Award className="icon-sm text-gold" />
        </button>

        <button 
          className="icon-btn settings-btn" 
          onClick={() => {
            audioEngine.playAudioEffect('click');
            openSettings();
          }}
          title="Settings"
          aria-label="Settings"
        >
          <Settings className="icon-md" />
        </button>
      </div>
    </header>
  );
}
