import React, { useLayoutEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';
import roomPhoto from '../assets/kids_room.webp';
import {
  MEDALS,
  MEDAL_HOOKS,
  MEDAL_RAIL_TOP,
  STAR_BOARD,
  STAR_BOARD_CAPACITY,
  TROPHIES,
  TROPHY_SHELF,
  awardsEarned,
  nextAward,
  shelfSurfaceAt,
} from '../utils/trophyRoom';

/** Breathing room under the room picture, in pixels. */
const BOTTOM_GUTTER = 16;

export function HallOfFame({ starsCount }) {
  const pageRef = useRef(null);
  const fitRef = useRef(null);

  // The room has to fit the screen without scrolling, and what sits above it —
  // the app header, whose nav wraps to more rows on narrow screens, plus this
  // page's bar — is not a height this stylesheet can know. Measure where the
  // room area starts and hand that to the CSS as the height it may not exceed.
  useLayoutEffect(() => {
    const page = pageRef.current;
    const fit = fitRef.current;
    if (page === null || fit === null) return undefined;

    const applyRoomChrome = () => {
      const chrome = fit.getBoundingClientRect().top + window.scrollY + BOTTOM_GUTTER;
      page.style.setProperty('--room-chrome', `${Math.ceil(chrome)}px`);
    };

    applyRoomChrome();
    const observer = new ResizeObserver(applyRoomChrome);
    const header = document.querySelector('.app-header');
    if (header !== null) observer.observe(header);
    observer.observe(page);
    window.addEventListener('resize', applyRoomChrome);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', applyRoomChrome);
    };
  }, []);

  const earnedMedals = awardsEarned(MEDALS, starsCount);
  const earnedTrophies = awardsEarned(TROPHIES, starsCount);
  const upcoming = nextAward(starsCount);
  const starsOnBoard = Math.min(starsCount, STAR_BOARD_CAPACITY);
  const starsOverflow = starsCount - starsOnBoard;

  const celebrate = (speech) => {
    audioEngine.playAudioEffect('star');
    confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
    audioEngine.speakText(speech, { rate: 0.85 });
  };

  const handleStarBoardClick = () => {
    celebrate(
      starsCount > 0
        ? `Your star tracker has ${starsCount} stars! Keep answering correctly to fill the board!`
        : 'Your star tracker is empty. Play a game and win your first star!',
    );
  };

  return (
    <div className="trophy-room-page" ref={pageRef}>
      <div className="trophy-room-bar glass-panel">
        <h2>🏆 Trophy Room</h2>

        <div className="fame-counters-strip">
          <button type="button" className="counter-pill star-pill" onClick={handleStarBoardClick}>
            <span className="pill-icon">⭐</span>
            <span className="pill-val">{starsCount}</span>
            <span className="pill-lbl">Stars</span>
          </button>

          <div className="counter-pill medal-pill">
            <span className="pill-icon">🏅</span>
            <span className="pill-val">{earnedMedals.length}</span>
            <span className="pill-lbl">Medals</span>
          </div>

          <div className="counter-pill trophy-pill">
            <span className="pill-icon">🏆</span>
            <span className="pill-val">{earnedTrophies.length}</span>
            <span className="pill-lbl">Trophies</span>
          </div>
        </div>

        <p className="fame-next-up">
          {upcoming !== null
            ? <>Next up: <strong>{upcoming.icon} {upcoming.name}</strong> at {upcoming.reqStars} ⭐</>
            : 'Every award is won. Champion!'}
        </p>
      </div>

      <div className="trophy-room-fit" ref={fitRef}>
        <div className="trophy-room-stage">
          <img
            className="trophy-room-photo"
            src={roomPhoto}
            alt="A kid's study room with a star tracker board, a medal rack and a trophy shelf"
          />

          {/* Stars fill the STAR TRACKER whiteboard on the right-hand wall. */}
          <button
            type="button"
            className="room-star-board"
            style={{
              left: `${STAR_BOARD.left}%`,
              top: `${STAR_BOARD.top}%`,
              width: `${STAR_BOARD.width}%`,
              height: `${STAR_BOARD.height}%`,
            }}
            onClick={handleStarBoardClick}
            aria-label={`Star tracker board with ${starsCount} stars`}
          >
            {Array.from({ length: starsOnBoard }).map((_, index) => (
              <span
                key={index}
                className="room-board-star"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                ⭐
              </span>
            ))}
            {starsOverflow > 0 && <span className="room-board-more">+{starsOverflow}</span>}
          </button>

          {/* Medals hang from the hooks on the MEDAL RACK, one hook each. */}
          {earnedMedals.map((medal, index) => (
            <button
              key={medal.id}
              type="button"
              className="room-medal"
              style={{
                left: `${MEDAL_HOOKS[index]}%`,
                top: `${MEDAL_RAIL_TOP}%`,
                animationDelay: `${index * 0.12}s`,
                '--ribbon-color': medal.ribbon,
              }}
              onClick={() => celebrate(`Achieved! ${medal.speech}`)}
              aria-label={`${medal.name}, earned at ${medal.reqStars} stars`}
            >
              <span className="room-medal-ribbon" />
              <span className="room-medal-disc">{medal.icon}</span>
              <span className="award-sparkle">✨</span>
              <span className="room-award-name">{medal.name}</span>
            </button>
          ))}

          {/* Trophies stand on the shelf; the plank drops away to the right. */}
          {earnedTrophies.map((trophy, index) => (
            <button
              key={trophy.id}
              type="button"
              className="room-trophy"
              style={{
                left: `${TROPHY_SHELF.slots[index]}%`,
                top: `${shelfSurfaceAt(TROPHY_SHELF.slots[index])}%`,
                animationDelay: `${index * 0.12}s`,
              }}
              onClick={() => celebrate(`Achieved! ${trophy.speech}`)}
              aria-label={`${trophy.name}, earned at ${trophy.reqStars} stars`}
            >
              <span className="room-trophy-figure">{trophy.icon}</span>
              <span className="award-sparkle">✨</span>
              <span className="room-award-name">{trophy.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
