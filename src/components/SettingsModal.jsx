import React, { useState, useEffect } from 'react';
import { X, Settings, Volume2, VolumeX, RefreshCw, Check } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export function SettingsModal({ isOpen, onClose, onResetProgress }) {
  const [speed, setSpeed] = useState(0.75);
  const [pitch, setPitch] = useState(1.1);
  const [isMuted, setIsMuted] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState('');

  useEffect(() => {
    if (isOpen) {
      const availableVoices = audioEngine.getVoices();
      setVoices(availableVoices);
      if (audioEngine.selectedVoice) {
        setSelectedVoiceName(audioEngine.selectedVoice.name);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSpeedChange = (val) => {
    setSpeed(val);
    audioEngine.setSpeechRate(val);
  };

  const handlePitchChange = (val) => {
    setPitch(val);
    audioEngine.setSpeechPitch(val);
  };

  const handleVoiceChange = (e) => {
    const name = e.target.value;
    setSelectedVoiceName(name);
    audioEngine.setVoice(name);
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    audioEngine.setMuted(nextMute);
  };

  const testVoice = () => {
    audioEngine.playAudioEffect('click');
    audioEngine.speakText('Hello! I am your Phonics Pals reading buddy! Ready to learn?', {
      rate: speed,
      pitch: pitch
    });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-card glass-panel pop-in-anim">
        <div className="modal-header">
          <div className="modal-title">
            <Settings className="icon-lg text-primary" />
            <h2>Parental & Sound Controls</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X className="icon-md" />
          </button>
        </div>

        <div className="settings-body">
          {/* Mute Control */}
          <div className="setting-row">
            <div className="setting-label">
              <span>Sound & Speech Audio</span>
              <small>Toggle all voice guidance and sound effects</small>
            </div>
            <button 
              className={`btn-secondary mute-toggle-btn ${isMuted ? 'muted' : ''}`}
              onClick={toggleMute}
            >
              {isMuted ? <VolumeX className="icon-md" /> : <Volume2 className="icon-md" />}
              <span>{isMuted ? 'Audio Muted' : 'Audio On'}</span>
            </button>
          </div>

          {/* Speech Rate Control */}
          <div className="setting-row">
            <div className="setting-label">
              <span>Speaking Speed (Pre-K Clarity)</span>
              <small>Current speed: <strong>{speed}x</strong> (Slower is easier for toddlers)</small>
            </div>
            <div className="speed-pills">
              {[0.6, 0.75, 0.9, 1.0].map((rate) => (
                <button
                  key={rate}
                  className={`pill-btn ${speed === rate ? 'active' : ''}`}
                  onClick={() => handleSpeedChange(rate)}
                >
                  {rate === 0.6 ? 'Slow (0.6x)' : rate === 0.75 ? 'Pre-K (0.75x)' : rate === 0.9 ? 'Normal (0.9x)' : 'Fast (1.0x)'}
                </button>
              ))}
            </div>
          </div>

          {/* Voice Selector */}
          {voices.length > 0 && (
            <div className="setting-row">
              <div className="setting-label">
                <span>Narrator Voice</span>
                <small>Select system text-to-speech voice</small>
              </div>
              <select className="voice-select-input" value={selectedVoiceName} onChange={handleVoiceChange}>
                {voices.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Test Voice Button */}
          <div className="setting-row">
            <button className="btn-primary test-voice-btn" onClick={testVoice}>
              <Volume2 className="icon-md" />
              <span>Test Current Voice & Sound</span>
            </button>
          </div>

          <hr className="settings-divider" />

          {/* Reset Progress */}
          <div className="setting-row danger-zone">
            <div className="setting-label">
              <span>Reset Earned Stars</span>
              <small>Clear collected stars and sticker progress</small>
            </div>
            <button className="btn-tertiary danger-btn" onClick={onResetProgress}>
              <RefreshCw className="icon-xs" />
              <span>Reset Stars</span>
            </button>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-primary close-modal-btn" onClick={onClose}>
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>
  );
}
