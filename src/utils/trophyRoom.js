/**
 * The awards on display in the trophy room, and the spot each one occupies in
 * the room artwork (src/assets/kids_room.webp, 1920x1047).
 *
 * The room is painted with its fixtures empty — a blank STAR TRACKER
 * whiteboard, a bare MEDAL RACK and an empty shelf — and everything on them is
 * put there by this page as it is earned. Every coordinate is a percentage of
 * the artwork, measured off the painting, so an award stays on its fixture at
 * any rendered size.
 */

/** Interior of the star tracker whiteboard, below its printed heading. */
export const STAR_BOARD = { left: 71.6, top: 34.6, width: 8.4, height: 18.2 };

/** The board is a fixed size; stars past this are summarised as a "+N" chip. */
export const STAR_BOARD_CAPACITY = 24;

/** Horizontal centre of each hook on the medal rack, left to right. */
export const MEDAL_HOOKS = [83.0, 84.86, 86.71, 88.57, 90.43, 92.29, 94.14, 96.0];

/** The line the ribbons hang from, level with the hooks. */
export const MEDAL_RAIL_TOP = 30.2;

/**
 * The trophy shelf. Its plank is drawn in perspective, so the surface the
 * trophies stand on drops steadily from the left end to the right one and each
 * slot needs its own height (see `shelfSurfaceAt`).
 */
export const TROPHY_SHELF = {
  leftEnd: { x: 71.0, y: 18.15 },
  rightEnd: { x: 95.5, y: 15.95 },
  slots: [75.0, 81.0, 87.0, 93.0],
};

/** Height of the shelf surface under a given point along the plank. */
export const shelfSurfaceAt = (x) => {
  const { leftEnd, rightEnd } = TROPHY_SHELF;
  const travelled = (x - leftEnd.x) / (rightEnd.x - leftEnd.x);
  return leftEnd.y + travelled * (rightEnd.y - leftEnd.y);
};

export const MEDALS = [
  {
    id: 'bronze',
    name: 'Bronze Medal',
    icon: '🥉',
    ribbon: '#b45309',
    reqStars: 3,
    speech: 'Bronze Medal! Great start on your reading adventure!',
  },
  {
    id: 'silver',
    name: 'Silver Medal',
    icon: '🥈',
    ribbon: '#0ea5e9',
    reqStars: 8,
    speech: 'Silver Medal! You are learning so fast!',
  },
  {
    id: 'gold',
    name: 'Gold Medal',
    icon: '🥇',
    ribbon: '#dc2626',
    reqStars: 15,
    speech: 'Gold Medal! You are a superstar reader!',
  },
  {
    id: 'platinum',
    name: 'Platinum Medal',
    icon: '💎',
    ribbon: '#7c3aed',
    reqStars: 25,
    speech: 'Platinum Medal! Outstanding reading performance!',
  },
  {
    id: 'diamond',
    name: 'Diamond Crown Medal',
    icon: '👑',
    ribbon: '#059669',
    reqStars: 50,
    speech: 'Diamond Crown Medal! Ultimate SoundSafari Champion!',
  },
];

export const TROPHIES = [
  {
    id: 'phonics_cup',
    name: 'Phonics Jungle Cup',
    icon: '🏆',
    reqStars: 5,
    speech: 'Phonics Jungle Cup! You master letter sounds!',
  },
  {
    id: 'bakery_cup',
    name: 'Word Bakery Cup',
    icon: '🧁',
    reqStars: 10,
    speech: 'Word Bakery Cup! Excellent CVC word spelling!',
  },
  {
    id: 'voice_trophy',
    name: 'Say & Play Voice Trophy',
    icon: '🎙️',
    reqStars: 15,
    speech: 'Say and Play Voice Trophy! Amazing pronunciation!',
  },
  {
    id: 'safari_champion',
    name: 'Grand Safari Champion Trophy',
    icon: '🦁',
    reqStars: 30,
    speech: 'Grand Safari Champion Trophy! Master reader!',
  },
];

// The rack and the shelf are painted with a fixed number of places, so an award
// defined without a spot to put it would quietly never appear in the room.
if (MEDALS.length > MEDAL_HOOKS.length) {
  throw new Error(
    `The medal rack has ${MEDAL_HOOKS.length} hooks but ${MEDALS.length} medals are defined`,
  );
}
if (TROPHIES.length > TROPHY_SHELF.slots.length) {
  throw new Error(
    `The trophy shelf has ${TROPHY_SHELF.slots.length} slots but ${TROPHIES.length} trophies are defined`,
  );
}

/** The awards from `awards` that `starsCount` has already unlocked. */
export const awardsEarned = (awards, starsCount) =>
  awards.filter((award) => starsCount >= award.reqStars);

/** The cheapest award still out of reach, or null once everything is won. */
export const nextAward = (starsCount) =>
  [...MEDALS, ...TROPHIES]
    .filter((award) => starsCount < award.reqStars)
    .reduce(
      (closest, award) =>
        closest === null || award.reqStars < closest.reqStars ? award : closest,
      null,
    );
