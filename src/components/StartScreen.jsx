import React from 'react';
import { Volume2, Play } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export function StartScreen({ onStart }) {
  const handleStart = () => {
    audioEngine.initAudioContext();
    audioEngine.playAudioEffect('star');
    audioEngine.speakText('Welcome to SoundSafari! Let us learn sounds and words together!', { rate: 0.8 });
    onStart();
  };

  return (
    <div className="start-screen-overlay">
      <div className="start-screen-card glass-panel">
        <div className="mascot-badge floating-anim">
          <span className="mascot-emoji">🦁</span>
        </div>
        
        <h1 className="title-gradient">SoundSafari</h1>
        <p className="start-subtitle">
          Interactive Pre-K Sound & Reading Academy
        </p>

        <div className="feature-highlights">
          <div className="feature-chip">
            <span className="chip-icon">🔤</span>
            <span>A-Z Alphabet Sounds</span>
          </div>
          <div className="feature-chip">
            <span className="chip-icon">🧁</span>
            <span>40+ CVC Word Builder</span>
          </div>
          <div className="feature-chip">
            <span className="chip-icon">🦁</span>
            <span>100 Sentence Safari</span>
          </div>
          <div className="feature-chip">
            <span className="chip-icon">🎙️</span>
            <span>Say & Play Studio</span>
          </div>
        </div>

        <button className="btn-primary start-play-btn pulse-anim" onClick={handleStart}>
          <Play className="icon-lg" />
          <span>TAP TO PLAY WITH SOUND</span>
          <Volume2 className="icon-md" />
        </button>

        <p className="sound-notice">
          🔊 Please turn your volume up so your child can hear the letter sounds!
        </p>
      </div>
    </div>
  );
}
