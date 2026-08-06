import React from 'react';
import { X, Award, Star, Sparkles } from 'lucide-react';
import { STICKERS } from '../utils/phonicsData';
import { audioEngine } from '../utils/audioEngine';

export function RewardStickerModal({ isOpen, onClose, starsCount }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card glass-panel pop-in-anim">
        <div className="modal-header">
          <div className="modal-title">
            <Award className="icon-lg text-gold" />
            <h2>Sticker Reward Album</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X className="icon-md" />
          </button>
        </div>

        <div className="star-progress-summary">
          <div className="star-banner">
            <Star className="icon-lg text-gold floating-anim" />
            <span>You have collected <strong>{starsCount}</strong> Stars!</span>
          </div>
          <p className="summary-sub">Complete exercises in Phonics Jungle, Word Bakery, and Sentence Safari to unlock all stickers!</p>
        </div>

        <div className="stickers-grid">
          {STICKERS.map((stk, idx) => {
            const isUnlocked = starsCount >= (idx + 1) * 2;

            return (
              <div 
                key={stk.id}
                className={`sticker-card ${isUnlocked ? 'unlocked' : 'locked'}`}
                onClick={() => {
                  if (isUnlocked) {
                    audioEngine.playAudioEffect('star');
                    audioEngine.speakText(`Sticker: ${stk.name}! ${stk.description}!`);
                  } else {
                    audioEngine.playAudioEffect('click');
                    audioEngine.speakText(`Earn ${(idx + 1) * 2} stars to unlock ${stk.name}!`);
                  }
                }}
              >
                <div className="sticker-emoji-container">
                  <span className="sticker-emoji">{isUnlocked ? stk.emoji : '🔒'}</span>
                </div>
                <span className="sticker-name">{stk.name}</span>
                <span className="sticker-desc">{isUnlocked ? stk.description : `Unlocks at ${(idx + 1) * 2} Stars`}</span>
              </div>
            );
          })}
        </div>

        <div className="modal-footer">
          <button className="btn-primary close-modal-btn" onClick={onClose}>
            <span>Back to Playing</span>
          </button>
        </div>
      </div>
    </div>
  );
}
