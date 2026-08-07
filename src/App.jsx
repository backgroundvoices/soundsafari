import React, { useState, useEffect } from 'react';
import { NavigationHeader } from './components/NavigationHeader';
import { PhonicsJungle } from './components/PhonicsJungle';
import { WordBakery } from './components/WordBakery';
import { BlendsLab } from './components/BlendsLab';
import { SentenceSafari } from './components/SentenceSafari';
import { SayAndPlay } from './components/SayAndPlay';
import { HallOfFame } from './components/HallOfFame';
import { RewardStickerModal } from './components/RewardStickerModal';
import { SettingsModal } from './components/SettingsModal';
import { audioEngine } from './utils/audioEngine';

export default function App() {
  const [currentMode, setCurrentMode] = useState('phonics');
  const [starsCount, setStarsCount] = useState(() => {
    const saved = localStorage.getItem('pk_stars_count');
    return saved ? parseInt(saved, 10) : 3;
  });
  const [isStickersOpen, setIsStickersOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('pk_stars_count', starsCount.toString());
  }, [starsCount]);

  const handleAwardStar = () => {
    setStarsCount((prev) => prev + 1);
  };

  const handleResetProgress = () => {
    setStarsCount(0);
    localStorage.setItem('pk_stars_count', '0');
    audioEngine.playAudioEffect('click');
  };

  return (
    <div className="app-root">
      <NavigationHeader
        currentMode={currentMode}
        setMode={setCurrentMode}
        starsCount={starsCount}
        openStickers={() => setIsStickersOpen(true)}
        openSettings={() => setIsSettingsOpen(true)}
      />

      <main className="main-content">
        {currentMode === 'phonics' && (
          <PhonicsJungle onAwardStar={handleAwardStar} />
        )}
        {currentMode === 'words' && (
          <WordBakery onAwardStar={handleAwardStar} />
        )}
        {currentMode === 'blends' && (
          <BlendsLab onAwardStar={handleAwardStar} />
        )}
        {currentMode === 'sentences' && (
          <SentenceSafari onAwardStar={handleAwardStar} />
        )}
        {currentMode === 'voice' && (
          <SayAndPlay onAwardStar={handleAwardStar} />
        )}
        {currentMode === 'halloffame' && (
          <HallOfFame starsCount={starsCount} />
        )}
      </main>

      <RewardStickerModal
        isOpen={isStickersOpen}
        onClose={() => setIsStickersOpen(false)}
        starsCount={starsCount}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onResetProgress={handleResetProgress}
      />
    </div>
  );
}
