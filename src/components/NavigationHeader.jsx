import React, { useState } from 'react';
import { Volume2, Award, Settings, Sparkles, Menu, X, Trophy } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export function NavigationHeader({ currentMode, setMode, starsCount, openStickers, openSettings }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modes = [
    { id: 'phonics', label: 'Alphabet', icon: '🔤', prompt: 'Alphabet Phonics Jungle! Learn letter sounds.' },
    { id: 'voice', label: 'Say & Play', icon: '🎙️', prompt: 'Say and Play! Practice speaking words out loud.' },
    { id: 'words', label: 'Word Bakery', icon: '🧁', prompt: 'Word Bakery! Spell common CVC words.' },
    { id: 'sentences', label: 'Sentence', icon: '🦁', prompt: 'Sentence Safari! Build simple sentences.' },
    { id: 'blends', label: 'Blend', icon: '🧩', prompt: 'Blends Lab! Learn CH, SH, TH and blend sounds.' },
    { id: 'rhyme', label: 'Rhyme', icon: '🎵', prompt: 'Rhyme Time! Find matching rhyming words.' },
    { id: 'halloffame', label: 'Trophies', icon: '🏆', prompt: 'Trophy Hall of Fame! Look at your shiny medals and trophies!' }
  ];

  const handleModeClick = (mode) => {
    audioEngine.stopSpeech();
    audioEngine.playAudioEffect('click');
    audioEngine.speakText(mode.prompt, { rate: 0.85 });
    setMode(mode.id);
    setIsMobileMenuOpen(false);
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

      {/* Desktop Navigation Tabs */}
      <nav className="header-nav desktop-nav">
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
        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="icon-btn mobile-menu-toggle-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          title="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="icon-md" /> : <Menu className="icon-md" />}
        </button>

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

      {/* Mobile Collapsible Dropdown Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav-dropdown glass-panel pop-in-anim">
          {modes.map((m) => (
            <button
              key={m.id}
              className={`mobile-nav-tab ${currentMode === m.id ? 'active' : ''}`}
              onClick={() => handleModeClick(m)}
            >
              <span className="tab-icon">{m.icon}</span>
              <span className="tab-label">{m.label}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
