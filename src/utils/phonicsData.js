// Expanded Phonics and Pre-K Learning Curriculum Data

// `sound` is the respelling shown on the card; `spokenSound` is what the speech
// engine is given. They differ because a spelling that reads well to the eye is
// often read back as letter names: "Fff" comes out "eff eff eff", "Zzz" as
// "zee zee zee", "Eh" as "ay" and "Ih" as "eye". The spoken forms below were
// each checked against a speech engine's phoneme output.

export const ALPHABET_DATA = [
  { letter: 'A', lower: 'a', sound: 'Aa', spokenSound: 'ap', phoneticText: '/æ/ sound', word: 'Apple', emoji: '🍎', color: '#FF5964', exampleWords: ['Ant', 'Ape', 'Alligator', 'Astronaut', 'Avocado', 'Anchor'] },
  { letter: 'B', lower: 'b', sound: 'Buh', spokenSound: 'buh', phoneticText: '/b/ sound', word: 'Bear', emoji: '🐻', color: '#35A7FF', exampleWords: ['Ball', 'Bus', 'Bee', 'Banana', 'Butterfly', 'Boat'] },
  { letter: 'C', lower: 'c', sound: 'Cuh', spokenSound: 'kuh', phoneticText: '/k/ sound', word: 'Cat', emoji: '🐱', color: '#FF9F1C', exampleWords: ['Cup', 'Car', 'Cow', 'Cookie', 'Camel', 'Cake'] },
  { letter: 'D', lower: 'd', sound: 'Duh', spokenSound: 'duh', phoneticText: '/d/ sound', word: 'Dog', emoji: '🐶', color: '#2EC4B6', exampleWords: ['Duck', 'Drum', 'Door', 'Dinosaur', 'Dolphin', 'Donut'] },
  { letter: 'E', lower: 'e', sound: 'Eh', spokenSound: 'el', phoneticText: '/ɛ/ sound', word: 'Elephant', emoji: '🐘', color: '#9B51E0', exampleWords: ['Egg', 'Elm', 'Elf', 'Eagle', 'Engine', 'Envelope'] },
  { letter: 'F', lower: 'f', sound: 'Fff', spokenSound: 'fuh', phoneticText: '/f/ sound', word: 'Fish', emoji: '🐟', color: '#FF6B6B', exampleWords: ['Frog', 'Fan', 'Fox', 'Flower', 'Fire', 'Feather'] },
  { letter: 'G', lower: 'g', sound: 'Guh', spokenSound: 'guh', phoneticText: '/ɡ/ sound', word: 'Giraffe', emoji: '🦒', color: '#4ECDC4', exampleWords: ['Goat', 'Gift', 'Gum', 'Gorilla', 'Guitar', 'Grapes'] },
  { letter: 'H', lower: 'h', sound: 'Huh', spokenSound: 'huh', phoneticText: '/h/ sound', word: 'Hippo', emoji: '🦛', color: '#FFE66D', exampleWords: ['Hat', 'House', 'Hen', 'Helicopter', 'Heart', 'Horse'] },
  { letter: 'I', lower: 'i', sound: 'Ih', spokenSound: 'ig', phoneticText: '/ɪ/ sound', word: 'Iguana', emoji: '🦎', color: '#1A535C', exampleWords: ['Ink', 'Igloo', 'Insect', 'Ice', 'Island', 'Instrument'] },
  { letter: 'J', lower: 'j', sound: 'Juh', spokenSound: 'juh', phoneticText: '/dʒ/ sound', word: 'Jellyfish', emoji: '🪼', color: '#F77F00', exampleWords: ['Jam', 'Jet', 'Jug', 'Juice', 'Jungle', 'Jackfruit'] },
  { letter: 'K', lower: 'k', sound: 'Kuh', spokenSound: 'kuh', phoneticText: '/k/ sound', word: 'Kangaroo', emoji: '🦘', color: '#FF6B6B', exampleWords: ['Kite', 'Key', 'King', 'Koala', 'Kitten', 'Kiwi'] },
  { letter: 'L', lower: 'l', sound: 'Lll', spokenSound: 'luh', phoneticText: '/l/ sound', word: 'Lion', emoji: '🦁', color: '#FFA62B', exampleWords: ['Leaf', 'Log', 'Lemon', 'Ladybug', 'Llama', 'Lollipop'] },
  { letter: 'M', lower: 'm', sound: 'Mmm', spokenSound: 'muh', phoneticText: '/m/ sound', word: 'Monkey', emoji: '🐒', color: '#70D6FF', exampleWords: ['Moon', 'Milk', 'Mat', 'Mango', 'Mouse', 'Mushroom'] },
  { letter: 'N', lower: 'n', sound: 'Nnn', spokenSound: 'nuh', phoneticText: '/n/ sound', word: 'Nest', emoji: '🪹', color: '#FF70A6', exampleWords: ['Nut', 'Net', 'Nine', 'Night', 'Needle', 'Noodle'] },
  { letter: 'O', lower: 'o', sound: 'Ah', spokenSound: 'og', phoneticText: '/ɒ/ sound', word: 'Owl', emoji: '🦉', color: '#FF9770', exampleWords: ['Octopus', 'Ox', 'Orange', 'Ostrich', 'Otter', 'Oatmeal'] },
  { letter: 'P', lower: 'p', sound: 'Puh', spokenSound: 'puh', phoneticText: '/p/ sound', word: 'Penguin', emoji: '🐧', color: '#FFD670', exampleWords: ['Pig', 'Pen', 'Pot', 'Panda', 'Pizza', 'Parrot'] },
  { letter: 'Q', lower: 'q', sound: 'Kwuh', spokenSound: 'kwuh', phoneticText: '/kw/ sound', word: 'Queen', emoji: '👑', color: '#E9FF70', exampleWords: ['Quill', 'Quick', 'Quack', 'Quartz', 'Question', 'Quilt'] },
  { letter: 'R', lower: 'r', sound: 'Rrr', spokenSound: 'ruh', phoneticText: '/r/ sound', word: 'Rabbit', emoji: '🐰', color: '#A06CD5', exampleWords: ['Red', 'Run', 'Ring', 'Rainbow', 'Robot', 'Rooster'] },
  { letter: 'S', lower: 's', sound: 'Sss', spokenSound: 'suh', phoneticText: '/s/ sound', word: 'Sun', emoji: '☀️', color: '#FFD166', exampleWords: ['Star', 'Snake', 'Sock', 'Spider', 'Ship', 'Strawberry'] },
  { letter: 'T', lower: 't', sound: 'Tuh', spokenSound: 'tuh', phoneticText: '/t/ sound', word: 'Tiger', emoji: '🐯', color: '#F4A261', exampleWords: ['Toy', 'Tub', 'Ten', 'Turtle', 'Train', 'Tomato'] },
  { letter: 'U', lower: 'u', sound: 'Uh', spokenSound: 'uh', phoneticText: '/ʌ/ sound', word: 'Umbrella', emoji: '☂️', color: '#06D6A0', exampleWords: ['Up', 'Us', 'Uncle', 'Unicorn', 'Umpire', 'Utensil'] },
  { letter: 'V', lower: 'v', sound: 'Vvv', spokenSound: 'vuh', phoneticText: '/v/ sound', word: 'Violin', emoji: '🎻', color: '#118AB2', exampleWords: ['Van', 'Vase', 'Vet', 'Volcano', 'Vegetable', 'Vulture'] },
  { letter: 'W', lower: 'w', sound: 'Wuh', spokenSound: 'wuh', phoneticText: '/w/ sound', word: 'Whale', emoji: '🐳', color: '#073B4C', exampleWords: ['Web', 'Wag', 'Win', 'Wolf', 'Watermelon', 'Wagon'] },
  { letter: 'X', lower: 'x', sound: 'Ks', spokenSound: 'uks', phoneticText: '/ks/ sound', word: 'Xylophone', emoji: '🎼', color: '#EF476F', exampleWords: ['Fox', 'Box', 'Six', 'X-ray', 'Ox', 'Axis'] },
  { letter: 'Y', lower: 'y', sound: 'Yuh', spokenSound: 'yuh', phoneticText: '/j/ sound', word: 'Yak', emoji: '🐂', color: '#FFC43D', exampleWords: ['Yo-yo', 'Yellow', 'Yam', 'Yacht', 'Yarn', 'Yeti'] },
  { letter: 'Z', lower: 'z', sound: 'Zzz', spokenSound: 'zuh', phoneticText: '/z/ sound', word: 'Zebra', emoji: '🦓', color: '#10002B', exampleWords: ['Zoo', 'Zip', 'Zero', 'Zigzag', 'Zucchini', 'Zombie'] }
];

export const BLENDS_DATA = [
  // H-Digraphs
  { 
    id: 'ch', 
    blend: 'CH', 
    category: 'H-Digraphs',
    letters: 'C and H', 
    spokenSound: 'chuh',
    sound: 'Ch',
    phoneticText: '/tʃ/ sound', 
    emoji: '🍫', 
    word: 'Chocolate', 
    spokenPrompt: 'The letters C and H make the chuh sound, as in Chocolate!',
    exampleWords: ['Chair', 'Chicken', 'Cheese', 'Cherry', 'Chimney', 'Cheetah'] 
  },
  { 
    id: 'sh', 
    blend: 'SH', 
    category: 'H-Digraphs',
    letters: 'S and H', 
    spokenSound: 'shuh',
    sound: 'Sh',
    phoneticText: '/ʃ/ sound', 
    emoji: '🦈', 
    word: 'Shark', 
    spokenPrompt: 'The letters S and H make the shuh sound, as in Shark!',
    exampleWords: ['Ship', 'Shoe', 'Sheep', 'Shell', 'Shadow', 'Shirt'] 
  },
  { 
    id: 'th', 
    blend: 'TH', 
    category: 'H-Digraphs',
    letters: 'T and H', 
    spokenSound: 'thuh',
    sound: 'Th',
    phoneticText: '/θ/ sound', 
    emoji: '👍', 
    word: 'Thumb', 
    spokenPrompt: 'The letters T and H make the thuh sound, as in Thumb!',
    exampleWords: ['Three', 'Think', 'Thorn', 'Thunder', 'Thermometer', 'Thimble'] 
  },
  { 
    id: 'wh', 
    blend: 'WH', 
    category: 'H-Digraphs',
    letters: 'W and H', 
    spokenSound: 'whuh',
    sound: 'Wh',
    phoneticText: '/w/ sound', 
    emoji: '🐋', 
    word: 'Whale', 
    spokenPrompt: 'The letters W and H make the whuh sound, as in Whale!',
    exampleWords: ['Wheel', 'Whistle', 'White', 'Whisper', 'Whiskers', 'Wheat'] 
  },
  { 
    id: 'ph', 
    blend: 'PH', 
    category: 'H-Digraphs',
    letters: 'P and H', 
    spokenSound: 'fuh',
    sound: 'Fff',
    phoneticText: '/f/ sound', 
    emoji: '📱', 
    word: 'Phone', 
    spokenPrompt: 'The letters P and H make the fuh sound, as in Phone!',
    exampleWords: ['Photo', 'Phantom', 'Dolphin', 'Elephant', 'Alphabet', 'Phoenix'] 
  },

  // L-Blends
  { 
    id: 'bl', 
    blend: 'BL', 
    category: 'L-Blends',
    letters: 'B and L', 
    spokenSound: 'bluh',
    sound: 'Bl',
    phoneticText: '/bl/ sound', 
    emoji: '🫐', 
    word: 'Blueberry', 
    spokenPrompt: 'The letters B and L blend to make the bluh sound, as in Blueberry!',
    exampleWords: ['Blue', 'Block', 'Blanket', 'Blossom', 'Blender', 'Blade'] 
  },
  { 
    id: 'cl', 
    blend: 'CL', 
    category: 'L-Blends',
    letters: 'C and L', 
    spokenSound: 'kluh',
    sound: 'Cl',
    phoneticText: '/kl/ sound', 
    emoji: '☁️', 
    word: 'Cloud', 
    spokenPrompt: 'The letters C and L blend to make the kluh sound, as in Cloud!',
    exampleWords: ['Clock', 'Clown', 'Clean', 'Club', 'Clip', 'Clover'] 
  },
  { 
    id: 'fl', 
    blend: 'FL', 
    category: 'L-Blends',
    letters: 'F and L', 
    spokenSound: 'fluh',
    sound: 'Fl',
    phoneticText: '/fl/ sound', 
    emoji: '🦩', 
    word: 'Flamingo', 
    spokenPrompt: 'The letters F and L blend to make the fluh sound, as in Flamingo!',
    exampleWords: ['Frog', 'Flower', 'Fly', 'Flame', 'Flute', 'Flash'] 
  },
  { 
    id: 'gl', 
    blend: 'GL', 
    category: 'L-Blends',
    letters: 'G and L', 
    spokenSound: 'gluh',
    sound: 'Gl',
    phoneticText: '/ɡl/ sound', 
    emoji: '🌍', 
    word: 'Globe', 
    spokenPrompt: 'The letters G and L blend to make the gluh sound, as in Globe!',
    exampleWords: ['Glass', 'Glove', 'Glue', 'Glow', 'Glasses', 'Glider'] 
  },
  { 
    id: 'pl', 
    blend: 'PL', 
    category: 'L-Blends',
    letters: 'P and L', 
    spokenSound: 'pluh',
    sound: 'Pl',
    phoneticText: '/pl/ sound', 
    emoji: '🪐', 
    word: 'Planet', 
    spokenPrompt: 'The letters P and L blend to make the pluh sound, as in Planet!',
    exampleWords: ['Plant', 'Plate', 'Plum', 'Plane', 'Play', 'Plastic'] 
  },
  { 
    id: 'sl', 
    blend: 'SL', 
    category: 'L-Blends',
    letters: 'S and L', 
    spokenSound: 'sluh',
    sound: 'Sl',
    phoneticText: '/sl/ sound', 
    emoji: '🛝', 
    word: 'Slide', 
    spokenPrompt: 'The letters S and L blend to make the sluh sound, as in Slide!',
    exampleWords: ['Sloth', 'Sled', 'Sleep', 'Slipper', 'Slice', 'Slime'] 
  },

  // R-Blends
  { 
    id: 'br', 
    blend: 'BR', 
    category: 'R-Blends',
    letters: 'B and R', 
    spokenSound: 'bruh',
    sound: 'Br',
    phoneticText: '/br/ sound', 
    emoji: '🍞', 
    word: 'Bread', 
    spokenPrompt: 'The letters B and R blend to make the bruh sound, as in Bread!',
    exampleWords: ['Brush', 'Brick', 'Bridge', 'Broom', 'Brown', 'Branch'] 
  },
  { 
    id: 'cr', 
    blend: 'CR', 
    category: 'R-Blends',
    letters: 'C and R', 
    spokenSound: 'kruh',
    sound: 'Cr',
    phoneticText: '/kr/ sound', 
    emoji: '👑', 
    word: 'Crown', 
    spokenPrompt: 'The letters C and R blend to make the kruh sound, as in Crown!',
    exampleWords: ['Crab', 'Crayons', 'Crib', 'Cross', 'Crystal', 'Crayon'] 
  },
  { 
    id: 'dr', 
    blend: 'DR', 
    category: 'R-Blends',
    letters: 'D and R', 
    spokenSound: 'druh',
    sound: 'Dr',
    phoneticText: '/dr/ sound', 
    emoji: '🐉', 
    word: 'Dragon', 
    spokenPrompt: 'The letters D and R blend to make the druh sound, as in Dragon!',
    exampleWords: ['Drum', 'Dress', 'Drink', 'Drop', 'Dragonfly', 'Drawer'] 
  },
  { 
    id: 'fr', 
    blend: 'FR', 
    category: 'R-Blends',
    letters: 'F and R', 
    spokenSound: 'fruh',
    sound: 'Fr',
    phoneticText: '/fr/ sound', 
    emoji: '🐸', 
    word: 'Frog', 
    spokenPrompt: 'The letters F and R blend to make the fruh sound, as in Frog!',
    exampleWords: ['Fruit', 'Friends', 'Freeze', 'Frame', 'Fries', 'Fridge'] 
  },
  { 
    id: 'gr', 
    blend: 'GR', 
    category: 'R-Blends',
    letters: 'G and R', 
    spokenSound: 'gruh',
    sound: 'Gr',
    phoneticText: '/ɡr/ sound', 
    emoji: '🍇', 
    word: 'Grapes', 
    spokenPrompt: 'The letters G and R blend to make the gruh sound, as in Grapes!',
    exampleWords: ['Grass', 'Green', 'Grill', 'Gorilla', 'Ground', 'Grasshopper'] 
  },
  { 
    id: 'pr', 
    blend: 'PR', 
    category: 'R-Blends',
    letters: 'P and R', 
    spokenSound: 'pruh',
    sound: 'Pr',
    phoneticText: '/pr/ sound', 
    emoji: '👸', 
    word: 'Princess', 
    spokenPrompt: 'The letters P and R blend to make the pruh sound, as in Princess!',
    exampleWords: ['Prince', 'Present', 'Pretzel', 'Print', 'Prism', 'Price'] 
  },
  { 
    id: 'tr', 
    blend: 'TR', 
    category: 'R-Blends',
    letters: 'T and R', 
    spokenSound: 'truh',
    sound: 'Tr',
    phoneticText: '/tr/ sound', 
    emoji: '🚂', 
    word: 'Train', 
    spokenPrompt: 'The letters T and R blend to make the truh sound, as in Train!',
    exampleWords: ['Tree', 'Truck', 'Trophy', 'Treasure', 'Tractor', 'Traffic'] 
  },

  // S-Blends
  { 
    id: 'sc', 
    blend: 'SC', 
    category: 'S-Blends',
    letters: 'S and C', 
    spokenSound: 'skuh',
    sound: 'Sc',
    phoneticText: '/sk/ sound', 
    emoji: '🛴', 
    word: 'Scooter', 
    spokenPrompt: 'The letters S and C blend to make the skuh sound, as in Scooter!',
    exampleWords: ['Scale', 'Scarf', 'School', 'Scoop', 'Scene', 'Scooter'] 
  },
  { 
    id: 'sk', 
    blend: 'SK', 
    category: 'S-Blends',
    letters: 'S and K', 
    spokenSound: 'skuh',
    sound: 'Sk',
    phoneticText: '/sk/ sound', 
    emoji: '🛼', 
    word: 'Skate', 
    spokenPrompt: 'The letters S and K blend to make the skuh sound, as in Skate!',
    exampleWords: ['Sky', 'Skunk', 'Skeleton', 'Skirt', 'Ski', 'Sketch'] 
  },
  { 
    id: 'sm', 
    blend: 'SM', 
    category: 'S-Blends',
    letters: 'S and M', 
    spokenSound: 'smuh',
    sound: 'Sm',
    phoneticText: '/sm/ sound', 
    emoji: '😊', 
    word: 'Smile', 
    spokenPrompt: 'The letters S and M blend to make the smuh sound, as in Smile!',
    exampleWords: ['Smoke', 'Small', 'Smart', 'Smell', 'Smash', 'Smoothie'] 
  },
  { 
    id: 'sn', 
    blend: 'SN', 
    category: 'S-Blends',
    letters: 'S and N', 
    spokenSound: 'snuh',
    sound: 'Sn',
    phoneticText: '/sn/ sound', 
    emoji: '🐍', 
    word: 'Snake', 
    spokenPrompt: 'The letters S and N blend to make the snuh sound, as in Snake!',
    exampleWords: ['Snail', 'Snow', 'Snack', 'Snap', 'Sneeze', 'Snowman'] 
  },
  { 
    id: 'sp', 
    blend: 'SP', 
    category: 'S-Blends',
    letters: 'S and P', 
    spokenSound: 'spuh',
    sound: 'Sp',
    phoneticText: '/sp/ sound', 
    emoji: '🕷️', 
    word: 'Spider', 
    spokenPrompt: 'The letters S and P blend to make the spuh sound, as in Spider!',
    exampleWords: ['Spoon', 'Space', 'Sparkle', 'Sponge', 'Sport', 'Spin'] 
  },
  { 
    id: 'st', 
    blend: 'ST', 
    category: 'S-Blends',
    letters: 'S and T', 
    spokenSound: 'stuh',
    sound: 'St',
    phoneticText: '/st/ sound', 
    emoji: '⭐', 
    word: 'Star', 
    spokenPrompt: 'The letters S and T blend to make the stuh sound, as in Star!',
    exampleWords: ['Stop', 'Stamp', 'Stick', 'Storm', 'Statue', 'Starfish'] 
  },
  { 
    id: 'sw', 
    blend: 'SW', 
    category: 'S-Blends',
    letters: 'S and W', 
    spokenSound: 'swuh',
    sound: 'Sw',
    phoneticText: '/sw/ sound', 
    emoji: '🦢', 
    word: 'Swan', 
    spokenPrompt: 'The letters S and W blend to make the swuh sound, as in Swan!',
    exampleWords: ['Swim', 'Swing', 'Sweet', 'Sword', 'Sweater', 'Switch'] 
  }
];

export const CVC_WORDS = [
  {
    "id": "cat",
    "word": "CAT",
    "letters": [
      "C",
      "A",
      "T"
    ],
    "emoji": "\ud83d\udc31",
    "category": "Animals",
    "prompt": "Can you spell CAT?"
  },
  {
    "id": "dog",
    "word": "DOG",
    "letters": [
      "D",
      "O",
      "G"
    ],
    "emoji": "\ud83d\udc36",
    "category": "Animals",
    "prompt": "Can you spell DOG?"
  },
  {
    "id": "pig",
    "word": "PIG",
    "letters": [
      "P",
      "I",
      "G"
    ],
    "emoji": "\ud83d\udc37",
    "category": "Animals",
    "prompt": "Can you spell PIG?"
  },
  {
    "id": "fox",
    "word": "FOX",
    "letters": [
      "F",
      "O",
      "X"
    ],
    "emoji": "\ud83e\udd8a",
    "category": "Animals",
    "prompt": "Can you spell FOX?"
  },
  {
    "id": "hen",
    "word": "HEN",
    "letters": [
      "H",
      "E",
      "N"
    ],
    "emoji": "\ud83d\udc14",
    "category": "Animals",
    "prompt": "Can you spell HEN?"
  },
  {
    "id": "cow",
    "word": "COW",
    "letters": [
      "C",
      "O",
      "W"
    ],
    "emoji": "\ud83d\udc2e",
    "category": "Animals",
    "prompt": "Can you spell COW?"
  },
  {
    "id": "bat",
    "word": "BAT",
    "letters": [
      "B",
      "A",
      "T"
    ],
    "emoji": "\ud83e\udd87",
    "category": "Animals",
    "prompt": "Can you spell BAT?"
  },
  {
    "id": "cub",
    "word": "CUB",
    "letters": [
      "C",
      "U",
      "B"
    ],
    "emoji": "\ud83d\udc3b",
    "category": "Animals",
    "prompt": "Can you spell CUB?"
  },
  {
    "id": "pup",
    "word": "PUP",
    "letters": [
      "P",
      "U",
      "P"
    ],
    "emoji": "\ud83d\udc36",
    "category": "Animals",
    "prompt": "Can you spell PUP?"
  },
  {
    "id": "bee",
    "word": "BEE",
    "letters": [
      "B",
      "E",
      "E"
    ],
    "emoji": "\ud83d\udc1d",
    "category": "Animals",
    "prompt": "Can you spell BEE?"
  },
  {
    "id": "owl",
    "word": "OWL",
    "letters": [
      "O",
      "W",
      "L"
    ],
    "emoji": "\ud83e\udd89",
    "category": "Animals",
    "prompt": "Can you spell OWL?"
  },
  {
    "id": "bug",
    "word": "BUG",
    "letters": [
      "B",
      "U",
      "G"
    ],
    "emoji": "\ud83d\udc1e",
    "category": "Animals",
    "prompt": "Can you spell BUG?"
  },
  {
    "id": "ram",
    "word": "RAM",
    "letters": [
      "R",
      "A",
      "M"
    ],
    "emoji": "\ud83d\udc0f",
    "category": "Animals",
    "prompt": "Can you spell RAM?"
  },
  {
    "id": "rat",
    "word": "RAT",
    "letters": [
      "R",
      "A",
      "T"
    ],
    "emoji": "\ud83d\udc00",
    "category": "Animals",
    "prompt": "Can you spell RAT?"
  },
  {
    "id": "yak",
    "word": "YAK",
    "letters": [
      "Y",
      "A",
      "K"
    ],
    "emoji": "\ud83d\udc02",
    "category": "Animals",
    "prompt": "Can you spell YAK?"
  },
  {
    "id": "bed",
    "word": "BED",
    "letters": [
      "B",
      "E",
      "D"
    ],
    "emoji": "\ud83d\udecf\ufe0f",
    "category": "Home",
    "prompt": "Can you spell BED?"
  },
  {
    "id": "cup",
    "word": "CUP",
    "letters": [
      "C",
      "U",
      "P"
    ],
    "emoji": "\ud83e\udd64",
    "category": "Home",
    "prompt": "Can you spell CUP?"
  },
  {
    "id": "box",
    "word": "BOX",
    "letters": [
      "B",
      "O",
      "X"
    ],
    "emoji": "\ud83d\udce6",
    "category": "Home",
    "prompt": "Can you spell BOX?"
  },
  {
    "id": "pen",
    "word": "PEN",
    "letters": [
      "P",
      "E",
      "N"
    ],
    "emoji": "\ud83d\udd8a\ufe0f",
    "category": "Home",
    "prompt": "Can you spell PEN?"
  },
  {
    "id": "hat",
    "word": "HAT",
    "letters": [
      "H",
      "A",
      "T"
    ],
    "emoji": "\ud83c\udfa9",
    "category": "Home",
    "prompt": "Can you spell HAT?"
  },
  {
    "id": "rug",
    "word": "RUG",
    "letters": [
      "R",
      "U",
      "G"
    ],
    "emoji": "\ud83e\udea1",
    "category": "Home",
    "prompt": "Can you spell RUG?"
  },
  {
    "id": "mat",
    "word": "MAT",
    "letters": [
      "M",
      "A",
      "T"
    ],
    "emoji": "\ud83e\uddd8",
    "category": "Home",
    "prompt": "Can you spell MAT?"
  },
  {
    "id": "fan",
    "word": "FAN",
    "letters": [
      "F",
      "A",
      "N"
    ],
    "emoji": "\ud83e\udead",
    "category": "Home",
    "prompt": "Can you spell FAN?"
  },
  {
    "id": "pot",
    "word": "POT",
    "letters": [
      "P",
      "O",
      "T"
    ],
    "emoji": "\ud83e\udeb4",
    "category": "Home",
    "prompt": "Can you spell POT?"
  },
  {
    "id": "pan",
    "word": "PAN",
    "letters": [
      "P",
      "A",
      "N"
    ],
    "emoji": "\ud83c\udf73",
    "category": "Home",
    "prompt": "Can you spell PAN?"
  },
  {
    "id": "tub",
    "word": "TUB",
    "letters": [
      "T",
      "U",
      "B"
    ],
    "emoji": "\ud83d\udec1",
    "category": "Home",
    "prompt": "Can you spell TUB?"
  },
  {
    "id": "map",
    "word": "MAP",
    "letters": [
      "M",
      "A",
      "P"
    ],
    "emoji": "\ud83d\uddfa\ufe0f",
    "category": "Home",
    "prompt": "Can you spell MAP?"
  },
  {
    "id": "key",
    "word": "KEY",
    "letters": [
      "K",
      "E",
      "Y"
    ],
    "emoji": "\ud83d\udd11",
    "category": "Home",
    "prompt": "Can you spell KEY?"
  },
  {
    "id": "cap",
    "word": "CAP",
    "letters": [
      "C",
      "A",
      "P"
    ],
    "emoji": "\ud83e\udde2",
    "category": "Home",
    "prompt": "Can you spell CAP?"
  },
  {
    "id": "mug",
    "word": "MUG",
    "letters": [
      "M",
      "U",
      "G"
    ],
    "emoji": "\u2615",
    "category": "Home",
    "prompt": "Can you spell MUG?"
  },
  {
    "id": "pin",
    "word": "PIN",
    "letters": [
      "P",
      "I",
      "N"
    ],
    "emoji": "\ud83d\udccc",
    "category": "Home",
    "prompt": "Can you spell PIN?"
  },
  {
    "id": "bag",
    "word": "BAG",
    "letters": [
      "B",
      "A",
      "G"
    ],
    "emoji": "\ud83c\udf92",
    "category": "Home",
    "prompt": "Can you spell BAG?"
  },
  {
    "id": "bin",
    "word": "BIN",
    "letters": [
      "B",
      "I",
      "N"
    ],
    "emoji": "\ud83d\uddd1\ufe0f",
    "category": "Home",
    "prompt": "Can you spell BIN?"
  },
  {
    "id": "rag",
    "word": "RAG",
    "letters": [
      "R",
      "A",
      "G"
    ],
    "emoji": "\ud83e\uddf9",
    "category": "Home",
    "prompt": "Can you spell RAG?"
  },
  {
    "id": "top",
    "word": "TOP",
    "letters": [
      "T",
      "O",
      "P"
    ],
    "emoji": "\ud83e\ude80",
    "category": "Home",
    "prompt": "Can you spell TOP?"
  },
  {
    "id": "sun",
    "word": "SUN",
    "letters": [
      "S",
      "U",
      "N"
    ],
    "emoji": "\u2600\ufe0f",
    "category": "Nature",
    "prompt": "Can you spell SUN?"
  },
  {
    "id": "mud",
    "word": "MUD",
    "letters": [
      "M",
      "U",
      "D"
    ],
    "emoji": "\ud83d\udfe4",
    "category": "Nature",
    "prompt": "Can you spell MUD?"
  },
  {
    "id": "sky",
    "word": "SKY",
    "letters": [
      "S",
      "K",
      "Y"
    ],
    "emoji": "\ud83c\udf0c",
    "category": "Nature",
    "prompt": "Can you spell SKY?"
  },
  {
    "id": "sea",
    "word": "SEA",
    "letters": [
      "S",
      "E",
      "A"
    ],
    "emoji": "\ud83c\udf0a",
    "category": "Nature",
    "prompt": "Can you spell SEA?"
  },
  {
    "id": "web",
    "word": "WEB",
    "letters": [
      "W",
      "E",
      "B"
    ],
    "emoji": "\ud83d\udd78\ufe0f",
    "category": "Nature",
    "prompt": "Can you spell WEB?"
  },
  {
    "id": "fog",
    "word": "FOG",
    "letters": [
      "F",
      "O",
      "G"
    ],
    "emoji": "\ud83c\udf2b\ufe0f",
    "category": "Nature",
    "prompt": "Can you spell FOG?"
  },
  {
    "id": "dew",
    "word": "DEW",
    "letters": [
      "D",
      "E",
      "W"
    ],
    "emoji": "\ud83d\udca7",
    "category": "Nature",
    "prompt": "Can you spell DEW?"
  },
  {
    "id": "log",
    "word": "LOG",
    "letters": [
      "L",
      "O",
      "G"
    ],
    "emoji": "\ud83e\udeb5",
    "category": "Nature",
    "prompt": "Can you spell LOG?"
  },
  {
    "id": "pod",
    "word": "POD",
    "letters": [
      "P",
      "O",
      "D"
    ],
    "emoji": "\ud83e\udedb",
    "category": "Nature",
    "prompt": "Can you spell POD?"
  },
  {
    "id": "gem",
    "word": "GEM",
    "letters": [
      "G",
      "E",
      "M"
    ],
    "emoji": "\ud83d\udc8e",
    "category": "Nature",
    "prompt": "Can you spell GEM?"
  },
  {
    "id": "oak",
    "word": "OAK",
    "letters": [
      "O",
      "A",
      "K"
    ],
    "emoji": "\ud83c\udf33",
    "category": "Nature",
    "prompt": "Can you spell OAK?"
  },
  {
    "id": "ice",
    "word": "ICE",
    "letters": [
      "I",
      "C",
      "E"
    ],
    "emoji": "\ud83e\uddca",
    "category": "Nature",
    "prompt": "Can you spell ICE?"
  },
  {
    "id": "air",
    "word": "AIR",
    "letters": [
      "A",
      "I",
      "R"
    ],
    "emoji": "\ud83d\udca8",
    "category": "Nature",
    "prompt": "Can you spell AIR?"
  },
  {
    "id": "ray",
    "word": "RAY",
    "letters": [
      "R",
      "A",
      "Y"
    ],
    "emoji": "\ud83c\udf24\ufe0f",
    "category": "Nature",
    "prompt": "Can you spell RAY?"
  },
  {
    "id": "nut",
    "word": "NUT",
    "letters": [
      "N",
      "U",
      "T"
    ],
    "emoji": "\ud83e\udd5c",
    "category": "Nature",
    "prompt": "Can you spell NUT?"
  },
  {
    "id": "bus",
    "word": "BUS",
    "letters": [
      "B",
      "U",
      "S"
    ],
    "emoji": "\ud83d\ude8c",
    "category": "Vehicles",
    "prompt": "Can you spell BUS?"
  },
  {
    "id": "car",
    "word": "CAR",
    "letters": [
      "C",
      "A",
      "R"
    ],
    "emoji": "\ud83d\ude97",
    "category": "Vehicles",
    "prompt": "Can you spell CAR?"
  },
  {
    "id": "jet",
    "word": "JET",
    "letters": [
      "J",
      "E",
      "T"
    ],
    "emoji": "\u2708\ufe0f",
    "category": "Vehicles",
    "prompt": "Can you spell JET?"
  },
  {
    "id": "van",
    "word": "VAN",
    "letters": [
      "V",
      "A",
      "N"
    ],
    "emoji": "\ud83d\ude90",
    "category": "Vehicles",
    "prompt": "Can you spell VAN?"
  },
  {
    "id": "cab",
    "word": "CAB",
    "letters": [
      "C",
      "A",
      "B"
    ],
    "emoji": "\ud83d\ude95",
    "category": "Vehicles",
    "prompt": "Can you spell CAB?"
  },
  {
    "id": "rig",
    "word": "RIG",
    "letters": [
      "R",
      "I",
      "G"
    ],
    "emoji": "\ud83d\ude9b",
    "category": "Vehicles",
    "prompt": "Can you spell RIG?"
  },
  {
    "id": "sub",
    "word": "SUB",
    "letters": [
      "S",
      "U",
      "B"
    ],
    "emoji": "\ud83d\udee5\ufe0f",
    "category": "Vehicles",
    "prompt": "Can you spell SUB?"
  },
  {
    "id": "tow",
    "word": "TOW",
    "letters": [
      "T",
      "O",
      "W"
    ],
    "emoji": "\ud83d\udede",
    "category": "Vehicles",
    "prompt": "Can you spell TOW?"
  },
  {
    "id": "zoo",
    "word": "ZOO",
    "letters": [
      "Z",
      "O",
      "O"
    ],
    "emoji": "\ud83e\udd81",
    "category": "Vehicles",
    "prompt": "Can you spell ZOO?"
  },
  {
    "id": "tip",
    "word": "TIP",
    "letters": [
      "T",
      "I",
      "P"
    ],
    "emoji": "\ud83d\udea9",
    "category": "Vehicles",
    "prompt": "Can you spell TIP?"
  },
  {
    "id": "jam",
    "word": "JAM",
    "letters": [
      "J",
      "A",
      "M"
    ],
    "emoji": "\ud83e\uded9",
    "category": "Food",
    "prompt": "Can you spell JAM?"
  },
  {
    "id": "bun",
    "word": "BUN",
    "letters": [
      "B",
      "U",
      "N"
    ],
    "emoji": "\ud83c\udf54",
    "category": "Food",
    "prompt": "Can you spell BUN?"
  },
  {
    "id": "egg",
    "word": "EGG",
    "letters": [
      "E",
      "G",
      "G"
    ],
    "emoji": "\ud83e\udd5a",
    "category": "Food",
    "prompt": "Can you spell EGG?"
  },
  {
    "id": "pie",
    "word": "PIE",
    "letters": [
      "P",
      "I",
      "E"
    ],
    "emoji": "\ud83e\udd67",
    "category": "Food",
    "prompt": "Can you spell PIE?"
  },
  {
    "id": "tea",
    "word": "TEA",
    "letters": [
      "T",
      "E",
      "A"
    ],
    "emoji": "\ud83c\udf75",
    "category": "Food",
    "prompt": "Can you spell TEA?"
  },
  {
    "id": "yam",
    "word": "YAM",
    "letters": [
      "Y",
      "A",
      "M"
    ],
    "emoji": "\ud83c\udf60",
    "category": "Food",
    "prompt": "Can you spell YAM?"
  },
  {
    "id": "fig",
    "word": "FIG",
    "letters": [
      "F",
      "I",
      "G"
    ],
    "emoji": "\ud83e\uded0",
    "category": "Food",
    "prompt": "Can you spell FIG?"
  },
  {
    "id": "ham",
    "word": "HAM",
    "letters": [
      "H",
      "A",
      "M"
    ],
    "emoji": "\ud83c\udf56",
    "category": "Food",
    "prompt": "Can you spell HAM?"
  },
  {
    "id": "cod",
    "word": "COD",
    "letters": [
      "C",
      "O",
      "D"
    ],
    "emoji": "\ud83d\udc1f",
    "category": "Food",
    "prompt": "Can you spell COD?"
  },
  {
    "id": "dip",
    "word": "DIP",
    "letters": [
      "D",
      "I",
      "P"
    ],
    "emoji": "\ud83e\udd63",
    "category": "Food",
    "prompt": "Can you spell DIP?"
  },
  {
    "id": "pop",
    "word": "POP",
    "letters": [
      "P",
      "O",
      "P"
    ],
    "emoji": "\ud83c\udf7f",
    "category": "Food",
    "prompt": "Can you spell POP?"
  },
  {
    "id": "gum",
    "word": "GUM",
    "letters": [
      "G",
      "U",
      "M"
    ],
    "emoji": "\ud83c\udf6c",
    "category": "Food",
    "prompt": "Can you spell GUM?"
  },
  {
    "id": "sip",
    "word": "SIP",
    "letters": [
      "S",
      "I",
      "P"
    ],
    "emoji": "\ud83e\uddc3",
    "category": "Food",
    "prompt": "Can you spell SIP?"
  },
  {
    "id": "pod_74",
    "word": "POD",
    "letters": [
      "P",
      "O",
      "D"
    ],
    "emoji": "\ud83c\udf31",
    "category": "Food",
    "prompt": "Can you spell POD?"
  },
  {
    "id": "ice_75",
    "word": "ICE",
    "letters": [
      "I",
      "C",
      "E"
    ],
    "emoji": "\ud83c\udf67",
    "category": "Food",
    "prompt": "Can you spell ICE?"
  },
  {
    "id": "run",
    "word": "RUN",
    "letters": [
      "R",
      "U",
      "N"
    ],
    "emoji": "\ud83c\udfc3",
    "category": "Action",
    "prompt": "Can you spell RUN?"
  },
  {
    "id": "hop",
    "word": "HOP",
    "letters": [
      "H",
      "O",
      "P"
    ],
    "emoji": "\ud83d\udc07",
    "category": "Action",
    "prompt": "Can you spell HOP?"
  },
  {
    "id": "jog",
    "word": "JOG",
    "letters": [
      "J",
      "O",
      "G"
    ],
    "emoji": "\ud83c\udfc3\u200d\u2640\ufe0f",
    "category": "Action",
    "prompt": "Can you spell JOG?"
  },
  {
    "id": "wag",
    "word": "WAG",
    "letters": [
      "W",
      "A",
      "G"
    ],
    "emoji": "\ud83d\udc15",
    "category": "Action",
    "prompt": "Can you spell WAG?"
  },
  {
    "id": "dig",
    "word": "DIG",
    "letters": [
      "D",
      "I",
      "G"
    ],
    "emoji": "\u26cf\ufe0f",
    "category": "Action",
    "prompt": "Can you spell DIG?"
  },
  {
    "id": "hug",
    "word": "HUG",
    "letters": [
      "H",
      "U",
      "G"
    ],
    "emoji": "\ud83e\udd17",
    "category": "Action",
    "prompt": "Can you spell HUG?"
  },
  {
    "id": "sit",
    "word": "SIT",
    "letters": [
      "S",
      "I",
      "T"
    ],
    "emoji": "\ud83e\ude91",
    "category": "Action",
    "prompt": "Can you spell SIT?"
  },
  {
    "id": "cut",
    "word": "CUT",
    "letters": [
      "C",
      "U",
      "T"
    ],
    "emoji": "\u2702\ufe0f",
    "category": "Action",
    "prompt": "Can you spell CUT?"
  },
  {
    "id": "tap",
    "word": "TAP",
    "letters": [
      "T",
      "A",
      "P"
    ],
    "emoji": "\ud83d\udc46",
    "category": "Action",
    "prompt": "Can you spell TAP?"
  },
  {
    "id": "nod",
    "word": "NOD",
    "letters": [
      "N",
      "O",
      "D"
    ],
    "emoji": "\ud83d\ude0a",
    "category": "Action",
    "prompt": "Can you spell NOD?"
  },
  {
    "id": "bow",
    "word": "BOW",
    "letters": [
      "B",
      "O",
      "W"
    ],
    "emoji": "\ud83c\udf80",
    "category": "Action",
    "prompt": "Can you spell BOW?"
  },
  {
    "id": "fit",
    "word": "FIT",
    "letters": [
      "F",
      "I",
      "T"
    ],
    "emoji": "\ud83d\udcaa",
    "category": "Action",
    "prompt": "Can you spell FIT?"
  },
  {
    "id": "win",
    "word": "WIN",
    "letters": [
      "W",
      "I",
      "N"
    ],
    "emoji": "\ud83c\udfc6",
    "category": "Action",
    "prompt": "Can you spell WIN?"
  },
  {
    "id": "wav",
    "word": "WAV",
    "letters": [
      "W",
      "A",
      "V"
    ],
    "emoji": "\ud83d\udc4b",
    "category": "Action",
    "prompt": "Can you spell WAV?"
  },
  {
    "id": "zip",
    "word": "ZIP",
    "letters": [
      "Z",
      "I",
      "P"
    ],
    "emoji": "\ud83e\udd10",
    "category": "Action",
    "prompt": "Can you spell ZIP?"
  },
  {
    "id": "red",
    "word": "RED",
    "letters": [
      "R",
      "E",
      "D"
    ],
    "emoji": "\ud83d\udd34",
    "category": "Toys",
    "prompt": "Can you spell RED?"
  },
  {
    "id": "tan",
    "word": "TAN",
    "letters": [
      "T",
      "A",
      "N"
    ],
    "emoji": "\ud83e\udd0e",
    "category": "Toys",
    "prompt": "Can you spell TAN?"
  },
  {
    "id": "dot",
    "word": "DOT",
    "letters": [
      "D",
      "O",
      "T"
    ],
    "emoji": "\ud83d\udfe0",
    "category": "Toys",
    "prompt": "Can you spell DOT?"
  },
  {
    "id": "tin",
    "word": "TIN",
    "letters": [
      "T",
      "I",
      "N"
    ],
    "emoji": "\ud83e\udd6b",
    "category": "Toys",
    "prompt": "Can you spell TIN?"
  },
  {
    "id": "rib",
    "word": "RIB",
    "letters": [
      "R",
      "I",
      "B"
    ],
    "emoji": "\ud83c\udf97\ufe0f",
    "category": "Toys",
    "prompt": "Can you spell RIB?"
  },
  {
    "id": "net",
    "word": "NET",
    "letters": [
      "N",
      "E",
      "T"
    ],
    "emoji": "\ud83e\udd45",
    "category": "Toys",
    "prompt": "Can you spell NET?"
  },
  {
    "id": "tag",
    "word": "TAG",
    "letters": [
      "T",
      "A",
      "G"
    ],
    "emoji": "\ud83c\udff7\ufe0f",
    "category": "Toys",
    "prompt": "Can you spell TAG?"
  },
  {
    "id": "pad",
    "word": "PAD",
    "letters": [
      "P",
      "A",
      "D"
    ],
    "emoji": "\ud83d\udcdd",
    "category": "Toys",
    "prompt": "Can you spell PAD?"
  },
  {
    "id": "peg",
    "word": "PEG",
    "letters": [
      "P",
      "E",
      "G"
    ],
    "emoji": "\ud83e\udeb5",
    "category": "Toys",
    "prompt": "Can you spell PEG?"
  },
  {
    "id": "kit",
    "word": "KIT",
    "letters": [
      "K",
      "I",
      "T"
    ],
    "emoji": "\ud83e\uddf0",
    "category": "Toys",
    "prompt": "Can you spell KIT?"
  }
];

export const SENTENCES_DATA = [
  {
    "id": "s1",
    "emoji": "\ud83d\udc31\ud83d\udd34",
    "targetSentence": "The cat is red",
    "words": [
      "The",
      "cat",
      "is",
      "red"
    ],
    "audioHint": "The cat is red.",
    "category": "Animals"
  },
  {
    "id": "s2",
    "emoji": "\ud83d\udc36\ud83d\udca8",
    "targetSentence": "A dog can run",
    "words": [
      "A",
      "dog",
      "can",
      "run"
    ],
    "audioHint": "A dog can run.",
    "category": "Animals"
  },
  {
    "id": "s3",
    "emoji": "\ud83d\udc37\u2764\ufe0f",
    "targetSentence": "I love my pig",
    "words": [
      "I",
      "love",
      "my",
      "pig"
    ],
    "audioHint": "I love my pig.",
    "category": "Animals"
  },
  {
    "id": "s4",
    "emoji": "\ud83e\udd86\ud83d\udde3\ufe0f",
    "targetSentence": "The duck says quack",
    "words": [
      "The",
      "duck",
      "says",
      "quack"
    ],
    "audioHint": "The duck says quack.",
    "category": "Animals"
  },
  {
    "id": "s5",
    "emoji": "\ud83d\udc38\ud83e\udd98",
    "targetSentence": "A frog can jump",
    "words": [
      "A",
      "frog",
      "can",
      "jump"
    ],
    "audioHint": "A frog can jump.",
    "category": "Animals"
  },
  {
    "id": "s6",
    "emoji": "\ud83e\udd81\ud83d\udc51",
    "targetSentence": "The lion is king",
    "words": [
      "The",
      "lion",
      "is",
      "king"
    ],
    "audioHint": "The lion is king.",
    "category": "Animals"
  },
  {
    "id": "s7",
    "emoji": "\ud83d\udc1d\u2728",
    "targetSentence": "A bee is small",
    "words": [
      "A",
      "bee",
      "is",
      "small"
    ],
    "audioHint": "A bee is small.",
    "category": "Animals"
  },
  {
    "id": "s8",
    "emoji": "\ud83d\udc2e\ud83e\udd5b",
    "targetSentence": "The cow gives milk",
    "words": [
      "The",
      "cow",
      "gives",
      "milk"
    ],
    "audioHint": "The cow gives milk.",
    "category": "Animals"
  },
  {
    "id": "s9",
    "emoji": "\ud83d\udc26\u2708\ufe0f",
    "targetSentence": "A bird can fly",
    "words": [
      "A",
      "bird",
      "can",
      "fly"
    ],
    "audioHint": "A bird can fly.",
    "category": "Animals"
  },
  {
    "id": "s10",
    "emoji": "\ud83d\udc3b\ud83c\udf6f",
    "targetSentence": "The bear likes honey",
    "words": [
      "The",
      "bear",
      "likes",
      "honey"
    ],
    "audioHint": "The bear likes honey.",
    "category": "Animals"
  },
  {
    "id": "s11",
    "emoji": "\ud83d\udc1f\ud83c\udf0a",
    "targetSentence": "A fish can swim",
    "words": [
      "A",
      "fish",
      "can",
      "swim"
    ],
    "audioHint": "A fish can swim.",
    "category": "Animals"
  },
  {
    "id": "s12",
    "emoji": "\ud83e\udd8a\ud83d\udca8",
    "targetSentence": "The fox is fast",
    "words": [
      "The",
      "fox",
      "is",
      "fast"
    ],
    "audioHint": "The fox is fast.",
    "category": "Animals"
  },
  {
    "id": "s13",
    "emoji": "\ud83d\udc14\ud83e\udd5a",
    "targetSentence": "A hen sits on an egg",
    "words": [
      "A",
      "hen",
      "sits",
      "on",
      "an",
      "egg"
    ],
    "audioHint": "A hen sits on an egg.",
    "category": "Animals"
  },
  {
    "id": "s14",
    "emoji": "\ud83d\udc30\ud83d\udc42",
    "targetSentence": "The rabbit has soft ears",
    "words": [
      "The",
      "rabbit",
      "has",
      "soft",
      "ears"
    ],
    "audioHint": "The rabbit has soft ears.",
    "category": "Animals"
  },
  {
    "id": "s15",
    "emoji": "\ud83d\udc12\ud83c\udf4c",
    "targetSentence": "A monkey loves bananas",
    "words": [
      "A",
      "monkey",
      "loves",
      "bananas"
    ],
    "audioHint": "A monkey loves bananas.",
    "category": "Animals"
  },
  {
    "id": "s16",
    "emoji": "\ud83e\udd89\ud83c\udf19",
    "targetSentence": "The owl sees at night",
    "words": [
      "The",
      "owl",
      "sees",
      "at",
      "night"
    ],
    "audioHint": "The owl sees at night.",
    "category": "Animals"
  },
  {
    "id": "s17",
    "emoji": "\ud83d\udc36\ud83d\udc15",
    "targetSentence": "A puppy wags its tail",
    "words": [
      "A",
      "puppy",
      "wags",
      "its",
      "tail"
    ],
    "audioHint": "A puppy wags its tail.",
    "category": "Animals"
  },
  {
    "id": "s18",
    "emoji": "\ud83d\udc2f\ud83d\udc05",
    "targetSentence": "The tiger has big stripes",
    "words": [
      "The",
      "tiger",
      "has",
      "big",
      "stripes"
    ],
    "audioHint": "The tiger has big stripes.",
    "category": "Animals"
  },
  {
    "id": "s19",
    "emoji": "\ud83e\udd93\ud83d\udda4",
    "targetSentence": "A zebra has black stripes",
    "words": [
      "A",
      "zebra",
      "has",
      "black",
      "stripes"
    ],
    "audioHint": "A zebra has black stripes.",
    "category": "Animals"
  },
  {
    "id": "s20",
    "emoji": "\ud83d\udc27\ud83e\uddca",
    "targetSentence": "The penguin walks on ice",
    "words": [
      "The",
      "penguin",
      "walks",
      "on",
      "ice"
    ],
    "audioHint": "The penguin walks on ice.",
    "category": "Animals"
  },
  {
    "id": "s21",
    "emoji": "\u2600\ufe0f\ud83d\udc40",
    "targetSentence": "I see the sun",
    "words": [
      "I",
      "see",
      "the",
      "sun"
    ],
    "audioHint": "I see the sun.",
    "category": "Nature"
  },
  {
    "id": "s22",
    "emoji": "\u2b50\ud83d\udc40",
    "targetSentence": "Look at the star",
    "words": [
      "Look",
      "at",
      "the",
      "star"
    ],
    "audioHint": "Look at the star.",
    "category": "Nature"
  },
  {
    "id": "s23",
    "emoji": "\ud83c\udf19\u2728",
    "targetSentence": "The moon shines bright",
    "words": [
      "The",
      "moon",
      "shines",
      "bright"
    ],
    "audioHint": "The moon shines bright.",
    "category": "Nature"
  },
  {
    "id": "s24",
    "emoji": "\ud83c\udf27\ufe0f\u2601\ufe0f",
    "targetSentence": "Rain falls from clouds",
    "words": [
      "Rain",
      "falls",
      "from",
      "clouds"
    ],
    "audioHint": "Rain falls from clouds.",
    "category": "Nature"
  },
  {
    "id": "s25",
    "emoji": "\ud83c\udf0c\ud83d\udc99",
    "targetSentence": "The sky is blue",
    "words": [
      "The",
      "sky",
      "is",
      "blue"
    ],
    "audioHint": "The sky is blue.",
    "category": "Nature"
  },
  {
    "id": "s26",
    "emoji": "\ud83c\udf43\ud83d\udfe2",
    "targetSentence": "A green leaf falls",
    "words": [
      "A",
      "green",
      "leaf",
      "falls"
    ],
    "audioHint": "A green leaf falls.",
    "category": "Nature"
  },
  {
    "id": "s27",
    "emoji": "\ud83c\udf0a\ud83d\udc99",
    "targetSentence": "The sea has waves",
    "words": [
      "The",
      "sea",
      "has",
      "waves"
    ],
    "audioHint": "The sea has waves.",
    "category": "Nature"
  },
  {
    "id": "s28",
    "emoji": "\ud83c\udf08\ud83d\udc40",
    "targetSentence": "I see a rainbow",
    "words": [
      "I",
      "see",
      "a",
      "rainbow"
    ],
    "audioHint": "I see a rainbow.",
    "category": "Nature"
  },
  {
    "id": "s29",
    "emoji": "\ud83c\udf33\ud83c\udf32",
    "targetSentence": "The tree is tall",
    "words": [
      "The",
      "tree",
      "is",
      "tall"
    ],
    "audioHint": "The tree is tall.",
    "category": "Nature"
  },
  {
    "id": "s30",
    "emoji": "\ud83c\udf38\ud83c\udf3a",
    "targetSentence": "A flower smells nice",
    "words": [
      "A",
      "flower",
      "smells",
      "nice"
    ],
    "audioHint": "A flower smells nice.",
    "category": "Nature"
  },
  {
    "id": "s31",
    "emoji": "\ud83c\udf2c\ufe0f\u2744\ufe0f",
    "targetSentence": "The wind blows cool",
    "words": [
      "The",
      "wind",
      "blows",
      "cool"
    ],
    "audioHint": "The wind blows cool.",
    "category": "Nature"
  },
  {
    "id": "s32",
    "emoji": "\u2744\ufe0f\u26aa",
    "targetSentence": "Snow is cold and white",
    "words": [
      "Snow",
      "is",
      "cold",
      "and",
      "white"
    ],
    "audioHint": "Snow is cold and white.",
    "category": "Nature"
  },
  {
    "id": "s33",
    "emoji": "\ud83c\udf31\ud83d\udfe2",
    "targetSentence": "The grass is green",
    "words": [
      "The",
      "grass",
      "is",
      "green"
    ],
    "audioHint": "The grass is green.",
    "category": "Nature"
  },
  {
    "id": "s34",
    "emoji": "\ud83d\udc1a\ud83c\udfd6\ufe0f",
    "targetSentence": "A shell is on sand",
    "words": [
      "A",
      "shell",
      "is",
      "on",
      "sand"
    ],
    "audioHint": "A shell is on sand.",
    "category": "Nature"
  },
  {
    "id": "s35",
    "emoji": "\ud83c\udfde\ufe0f\ud83c\udf0a",
    "targetSentence": "The river flows fast",
    "words": [
      "The",
      "river",
      "flows",
      "fast"
    ],
    "audioHint": "The river flows fast.",
    "category": "Nature"
  },
  {
    "id": "s36",
    "emoji": "\u2600\ufe0f\ud83d\ude0a",
    "targetSentence": "I like sunny days",
    "words": [
      "I",
      "like",
      "sunny",
      "days"
    ],
    "audioHint": "I like sunny days.",
    "category": "Nature"
  },
  {
    "id": "s37",
    "emoji": "\u26f0\ufe0f\ud83c\udfd4\ufe0f",
    "targetSentence": "The mountain is high",
    "words": [
      "The",
      "mountain",
      "is",
      "high"
    ],
    "audioHint": "The mountain is high.",
    "category": "Nature"
  },
  {
    "id": "s38",
    "emoji": "\ud83e\udea8\ud83d\udcaa",
    "targetSentence": "A rock is hard",
    "words": [
      "A",
      "rock",
      "is",
      "hard"
    ],
    "audioHint": "A rock is hard.",
    "category": "Nature"
  },
  {
    "id": "s39",
    "emoji": "\ud83c\udf39\ud83c\udfe1",
    "targetSentence": "The garden has red roses",
    "words": [
      "The",
      "garden",
      "has",
      "red",
      "roses"
    ],
    "audioHint": "The garden has red roses.",
    "category": "Nature"
  },
  {
    "id": "s40",
    "emoji": "\u2601\ufe0f\ud83c\udf2c\ufe0f",
    "targetSentence": "Clouds drift in air",
    "words": [
      "Clouds",
      "drift",
      "in",
      "air"
    ],
    "audioHint": "Clouds drift in air.",
    "category": "Nature"
  },
  {
    "id": "s41",
    "emoji": "\ud83c\udfeb\ud83d\ude8c",
    "targetSentence": "We go to school",
    "words": [
      "We",
      "go",
      "to",
      "school"
    ],
    "audioHint": "We go to school.",
    "category": "School"
  },
  {
    "id": "s42",
    "emoji": "\ud83d\udcd6\ud83d\ude0a",
    "targetSentence": "I read a good book",
    "words": [
      "I",
      "read",
      "a",
      "good",
      "book"
    ],
    "audioHint": "I read a good book.",
    "category": "School"
  },
  {
    "id": "s43",
    "emoji": "\ud83d\udc69\u200d\ud83c\udfeb\u2764\ufe0f",
    "targetSentence": "My teacher is kind",
    "words": [
      "My",
      "teacher",
      "is",
      "kind"
    ],
    "audioHint": "My teacher is kind.",
    "category": "School"
  },
  {
    "id": "s44",
    "emoji": "\ud83d\udd8a\ufe0f\ud83d\udcdd",
    "targetSentence": "I write with a pen",
    "words": [
      "I",
      "write",
      "with",
      "a",
      "pen"
    ],
    "audioHint": "I write with a pen.",
    "category": "School"
  },
  {
    "id": "s45",
    "emoji": "\ud83d\udd8d\ufe0f\ud83c\udfa8",
    "targetSentence": "We draw with crayons",
    "words": [
      "We",
      "draw",
      "with",
      "crayons"
    ],
    "audioHint": "We draw with crayons.",
    "category": "School"
  },
  {
    "id": "s46",
    "emoji": "\ud83d\udd24\ud83e\udde0",
    "targetSentence": "I know my letters",
    "words": [
      "I",
      "know",
      "my",
      "letters"
    ],
    "audioHint": "I know my letters.",
    "category": "School"
  },
  {
    "id": "s47",
    "emoji": "\ud83c\udfb5\ud83d\ude0a",
    "targetSentence": "We sing a happy song",
    "words": [
      "We",
      "sing",
      "a",
      "happy",
      "song"
    ],
    "audioHint": "We sing a happy song.",
    "category": "School"
  },
  {
    "id": "s48",
    "emoji": "\u270b\ud83d\ude0a",
    "targetSentence": "I raise my hand",
    "words": [
      "I",
      "raise",
      "my",
      "hand"
    ],
    "audioHint": "I raise my hand.",
    "category": "School"
  },
  {
    "id": "s49",
    "emoji": "\ud83e\uddf8\ud83e\udd1d",
    "targetSentence": "We share our toys",
    "words": [
      "We",
      "share",
      "our",
      "toys"
    ],
    "audioHint": "We share our toys.",
    "category": "School"
  },
  {
    "id": "s50",
    "emoji": "\ud83d\udd22\ud83d\udd1f",
    "targetSentence": "I can count to ten",
    "words": [
      "I",
      "can",
      "count",
      "to",
      "ten"
    ],
    "audioHint": "I can count to ten.",
    "category": "School"
  },
  {
    "id": "s51",
    "emoji": "\ud83d\udd14\ud83d\udd14",
    "targetSentence": "The bell rings loud",
    "words": [
      "The",
      "bell",
      "rings",
      "loud"
    ],
    "audioHint": "The bell rings loud.",
    "category": "School"
  },
  {
    "id": "s52",
    "emoji": "\ud83e\ude91\ud83c\udfeb",
    "targetSentence": "I sit at my desk",
    "words": [
      "I",
      "sit",
      "at",
      "my",
      "desk"
    ],
    "audioHint": "I sit at my desk.",
    "category": "School"
  },
  {
    "id": "s53",
    "emoji": "\ud83d\udedd\ud83c\udfc3",
    "targetSentence": "We play at recess",
    "words": [
      "We",
      "play",
      "at",
      "recess"
    ],
    "audioHint": "We play at recess.",
    "category": "School"
  },
  {
    "id": "s54",
    "emoji": "\ud83d\udcc4\u2702\ufe0f",
    "targetSentence": "I glue my paper",
    "words": [
      "I",
      "glue",
      "my",
      "paper"
    ],
    "audioHint": "I glue my paper.",
    "category": "School"
  },
  {
    "id": "s55",
    "emoji": "\ud83c\udfa8\ud83d\udd34",
    "targetSentence": "I color with red",
    "words": [
      "I",
      "color",
      "with",
      "red"
    ],
    "audioHint": "I color with red.",
    "category": "School"
  },
  {
    "id": "s56",
    "emoji": "\ud83e\uddf9\u2728",
    "targetSentence": "We clean our room",
    "words": [
      "We",
      "clean",
      "our",
      "room"
    ],
    "audioHint": "We clean our room.",
    "category": "School"
  },
  {
    "id": "s57",
    "emoji": "\ud83d\ude0a\ud83d\udc6b",
    "targetSentence": "I smile at my friend",
    "words": [
      "I",
      "smile",
      "at",
      "my",
      "friend"
    ],
    "audioHint": "I smile at my friend.",
    "category": "School"
  },
  {
    "id": "s58",
    "emoji": "\ud83d\udeb6\u200d\u2642\ufe0f\ud83d\udeb6\u200d\u2640\ufe0f",
    "targetSentence": "We line up straight",
    "words": [
      "We",
      "line",
      "up",
      "straight"
    ],
    "audioHint": "We line up straight.",
    "category": "School"
  },
  {
    "id": "s59",
    "emoji": "\ud83c\udf92\ud83c\udf92",
    "targetSentence": "I pack my backpack",
    "words": [
      "I",
      "pack",
      "my",
      "backpack"
    ],
    "audioHint": "I pack my backpack.",
    "category": "School"
  },
  {
    "id": "s60",
    "emoji": "\ud83c\udf1f\ud83c\udf89",
    "targetSentence": "Learning is so fun",
    "words": [
      "Learning",
      "is",
      "so",
      "fun"
    ],
    "audioHint": "Learning is so fun.",
    "category": "School"
  },
  {
    "id": "s61",
    "emoji": "\ud83d\ude8c\ud83d\udca8",
    "targetSentence": "The bus is big",
    "words": [
      "The",
      "bus",
      "is",
      "big"
    ],
    "audioHint": "The bus is big.",
    "category": "Toys"
  },
  {
    "id": "s62",
    "emoji": "\ud83e\ude80\ud83c\udf00",
    "targetSentence": "I spin my top",
    "words": [
      "I",
      "spin",
      "my",
      "top"
    ],
    "audioHint": "I spin my top.",
    "category": "Toys"
  },
  {
    "id": "s63",
    "emoji": "\u26bd\u2b06\ufe0f",
    "targetSentence": "The ball bounces high",
    "words": [
      "The",
      "ball",
      "bounces",
      "high"
    ],
    "audioHint": "The ball bounces high.",
    "category": "Toys"
  },
  {
    "id": "s64",
    "emoji": "\ud83e\uddf1\ud83c\udfd7\ufe0f",
    "targetSentence": "I build with blocks",
    "words": [
      "I",
      "build",
      "with",
      "blocks"
    ],
    "audioHint": "I build with blocks.",
    "category": "Toys"
  },
  {
    "id": "s65",
    "emoji": "\ud83e\ude81\u2601\ufe0f",
    "targetSentence": "My kite flies high",
    "words": [
      "My",
      "kite",
      "flies",
      "high"
    ],
    "audioHint": "My kite flies high.",
    "category": "Toys"
  },
  {
    "id": "s66",
    "emoji": "\ud83d\ude97\ud83d\udca8",
    "targetSentence": "The red car goes fast",
    "words": [
      "The",
      "red",
      "car",
      "goes",
      "fast"
    ],
    "audioHint": "The red car goes fast.",
    "category": "Toys"
  },
  {
    "id": "s67",
    "emoji": "\ud83d\ude82\ud83d\ude83",
    "targetSentence": "I play with a train",
    "words": [
      "I",
      "play",
      "with",
      "a",
      "train"
    ],
    "audioHint": "I play with a train.",
    "category": "Toys"
  },
  {
    "id": "s68",
    "emoji": "\ud83e\ude86\ud83c\udf80",
    "targetSentence": "My doll is pretty",
    "words": [
      "My",
      "doll",
      "is",
      "pretty"
    ],
    "audioHint": "My doll is pretty.",
    "category": "Toys"
  },
  {
    "id": "s69",
    "emoji": "\ud83e\udd41\ud83d\udd0a",
    "targetSentence": "The drum makes noise",
    "words": [
      "The",
      "drum",
      "makes",
      "noise"
    ],
    "audioHint": "The drum makes noise.",
    "category": "Toys"
  },
  {
    "id": "s70",
    "emoji": "\ud83d\udeb2\ud83d\udc9b",
    "targetSentence": "I ride my yellow bike",
    "words": [
      "I",
      "ride",
      "my",
      "yellow",
      "bike"
    ],
    "audioHint": "I ride my yellow bike.",
    "category": "Toys"
  },
  {
    "id": "s71",
    "emoji": "\ud83e\udd16\ud83e\udd16",
    "targetSentence": "The robot can move",
    "words": [
      "The",
      "robot",
      "can",
      "move"
    ],
    "audioHint": "The robot can move.",
    "category": "Toys"
  },
  {
    "id": "s72",
    "emoji": "\ud83e\udd38\u200d\u2640\ufe0f\u2728",
    "targetSentence": "I jump on a trampoline",
    "words": [
      "I",
      "jump",
      "on",
      "a",
      "trampoline"
    ],
    "audioHint": "I jump on a trampoline.",
    "category": "Toys"
  },
  {
    "id": "s73",
    "emoji": "\ud83d\udedd\ud83c\udf33",
    "targetSentence": "We push the swing",
    "words": [
      "We",
      "push",
      "the",
      "swing"
    ],
    "audioHint": "We push the swing.",
    "category": "Toys"
  },
  {
    "id": "s74",
    "emoji": "\ud83d\udedd\ud83d\udca8",
    "targetSentence": "The slide is slippery",
    "words": [
      "The",
      "slide",
      "is",
      "slippery"
    ],
    "audioHint": "The slide is slippery.",
    "category": "Toys"
  },
  {
    "id": "s75",
    "emoji": "\ud83c\udfc0\ud83e\udd32",
    "targetSentence": "I catch the big ball",
    "words": [
      "I",
      "catch",
      "the",
      "big",
      "ball"
    ],
    "audioHint": "I catch the big ball.",
    "category": "Toys"
  },
  {
    "id": "s76",
    "emoji": "\ud83e\uddf8\u2764\ufe0f",
    "targetSentence": "My teddy bear is soft",
    "words": [
      "My",
      "teddy",
      "bear",
      "is",
      "soft"
    ],
    "audioHint": "My teddy bear is soft.",
    "category": "Toys"
  },
  {
    "id": "s77",
    "emoji": "\ud83c\udfd6\ufe0f\ud83e\udea3",
    "targetSentence": "We play in the sandbox",
    "words": [
      "We",
      "play",
      "in",
      "the",
      "sandbox"
    ],
    "audioHint": "We play in the sandbox.",
    "category": "Toys"
  },
  {
    "id": "s78",
    "emoji": "\u2708\ufe0f\u2601\ufe0f",
    "targetSentence": "I fly a toy plane",
    "words": [
      "I",
      "fly",
      "a",
      "toy",
      "plane"
    ],
    "audioHint": "I fly a toy plane.",
    "category": "Toys"
  },
  {
    "id": "s79",
    "emoji": "\u26f5\ud83c\udf0a",
    "targetSentence": "The boat floats on water",
    "words": [
      "The",
      "boat",
      "floats",
      "on",
      "water"
    ],
    "audioHint": "The boat floats on water.",
    "category": "Toys"
  },
  {
    "id": "s80",
    "emoji": "\ud83e\udd73\ud83c\udf89",
    "targetSentence": "Playtime makes me happy",
    "words": [
      "Playtime",
      "makes",
      "me",
      "happy"
    ],
    "audioHint": "Playtime makes me happy.",
    "category": "Toys"
  },
  {
    "id": "s81",
    "emoji": "\ud83c\udf4e\ud83d\ude0b",
    "targetSentence": "I eat a red apple",
    "words": [
      "I",
      "eat",
      "a",
      "red",
      "apple"
    ],
    "audioHint": "I eat a red apple.",
    "category": "Food"
  },
  {
    "id": "s82",
    "emoji": "\ud83e\udd5b\u2744\ufe0f",
    "targetSentence": "Milk is cold and fresh",
    "words": [
      "Milk",
      "is",
      "cold",
      "and",
      "fresh"
    ],
    "audioHint": "Milk is cold and fresh.",
    "category": "Food"
  },
  {
    "id": "s83",
    "emoji": "\ud83d\udc69\u200d\ud83d\udc67\u2764\ufe0f",
    "targetSentence": "I love my mom",
    "words": [
      "I",
      "love",
      "my",
      "mom"
    ],
    "audioHint": "I love my mom.",
    "category": "Family"
  },
  {
    "id": "s84",
    "emoji": "\ud83d\udc68\u200d\ud83d\udc66\ud83d\udcaa",
    "targetSentence": "My dad is tall",
    "words": [
      "My",
      "dad",
      "is",
      "tall"
    ],
    "audioHint": "My dad is tall.",
    "category": "Family"
  },
  {
    "id": "s85",
    "emoji": "\ud83c\udf53\ud83d\ude0b",
    "targetSentence": "We eat sweet strawberries",
    "words": [
      "We",
      "eat",
      "sweet",
      "strawberries"
    ],
    "audioHint": "We eat sweet strawberries.",
    "category": "Food"
  },
  {
    "id": "s86",
    "emoji": "\ud83c\udf5e\ud83d\udd25",
    "targetSentence": "Bread is soft and warm",
    "words": [
      "Bread",
      "is",
      "soft",
      "and",
      "warm"
    ],
    "audioHint": "Bread is soft and warm.",
    "category": "Food"
  },
  {
    "id": "s87",
    "emoji": "\ud83c\udf4a\ud83e\udd64",
    "targetSentence": "I drink orange juice",
    "words": [
      "I",
      "drink",
      "orange",
      "juice"
    ],
    "audioHint": "I drink orange juice.",
    "category": "Food"
  },
  {
    "id": "s88",
    "emoji": "\ud83d\udc75\ud83c\udf6a",
    "targetSentence": "My grandma bakes cookies",
    "words": [
      "My",
      "grandma",
      "bakes",
      "cookies"
    ],
    "audioHint": "My grandma bakes cookies.",
    "category": "Family"
  },
  {
    "id": "s89",
    "emoji": "\ud83c\udf4c\ud83d\udc9b",
    "targetSentence": "A banana is yellow",
    "words": [
      "A",
      "banana",
      "is",
      "yellow"
    ],
    "audioHint": "A banana is yellow.",
    "category": "Food"
  },
  {
    "id": "s90",
    "emoji": "\ud83c\udf72\ud83e\udd44",
    "targetSentence": "We eat soup with spoons",
    "words": [
      "We",
      "eat",
      "soup",
      "with",
      "spoons"
    ],
    "audioHint": "We eat soup with spoons.",
    "category": "Food"
  },
  {
    "id": "s91",
    "emoji": "\ud83c\udf55\ud83d\udc66",
    "targetSentence": "My brother likes pizza",
    "words": [
      "My",
      "brother",
      "likes",
      "pizza"
    ],
    "audioHint": "My brother likes pizza.",
    "category": "Family"
  },
  {
    "id": "s92",
    "emoji": "\ud83c\udf66\ud83d\udc67",
    "targetSentence": "My sister loves ice cream",
    "words": [
      "My",
      "sister",
      "loves",
      "ice",
      "cream"
    ],
    "audioHint": "My sister loves ice cream.",
    "category": "Family"
  },
  {
    "id": "s93",
    "emoji": "\ud83d\udca7\ud83d\ude0a",
    "targetSentence": "Water is good for me",
    "words": [
      "Water",
      "is",
      "good",
      "for",
      "me"
    ],
    "audioHint": "Water is good for me.",
    "category": "Food"
  },
  {
    "id": "s94",
    "emoji": "\ud83c\udf7d\ufe0f\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
    "targetSentence": "We eat dinner together",
    "words": [
      "We",
      "eat",
      "dinner",
      "together"
    ],
    "audioHint": "We eat dinner together.",
    "category": "Family"
  },
  {
    "id": "s95",
    "emoji": "\ud83e\udd55\ud83e\udde1",
    "targetSentence": "A carrot is orange",
    "words": [
      "A",
      "carrot",
      "is",
      "orange"
    ],
    "audioHint": "A carrot is orange.",
    "category": "Food"
  },
  {
    "id": "s96",
    "emoji": "\ud83c\udf6f\ud83d\ude0b",
    "targetSentence": "Honey is sweet and yum",
    "words": [
      "Honey",
      "is",
      "sweet",
      "and",
      "yum"
    ],
    "audioHint": "Honey is sweet and yum.",
    "category": "Food"
  },
  {
    "id": "s97",
    "emoji": "\ud83e\uddfc\ud83e\udd32",
    "targetSentence": "I wash my hands clean",
    "words": [
      "I",
      "wash",
      "my",
      "hands",
      "clean"
    ],
    "audioHint": "I wash my hands clean.",
    "category": "Family"
  },
  {
    "id": "s98",
    "emoji": "\ud83e\udd17\u2764\ufe0f",
    "targetSentence": "We hug each other tight",
    "words": [
      "We",
      "hug",
      "each",
      "other",
      "tight"
    ],
    "audioHint": "We hug each other tight.",
    "category": "Family"
  },
  {
    "id": "s99",
    "emoji": "\ud83c\udf19\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",
    "targetSentence": "Good night to my family",
    "words": [
      "Good",
      "night",
      "to",
      "my",
      "family"
    ],
    "audioHint": "Good night to my family.",
    "category": "Family"
  },
  {
    "id": "s100",
    "emoji": "\ud83c\udf93\ud83c\udf92",
    "targetSentence": "Ready for kindergarten today",
    "words": [
      "Ready",
      "for",
      "kindergarten",
      "today"
    ],
    "audioHint": "Ready for kindergarten today.",
    "category": "School"
  }
];

export const STICKERS = [
  { id: 'stk_star', name: 'Super Star', emoji: '⭐', description: 'Awarded for Phonics Explorer' },
  { id: 'stk_cat', name: 'Happy Kitty', emoji: '🐱', description: 'Awarded for spelling CAT' },
  { id: 'stk_crown', name: 'Phonics King', emoji: '👑', description: 'Master of Letters' },
  { id: 'stk_rocket', name: 'Word Rocket', emoji: '🚀', description: 'Spelled 5 words!' },
  { id: 'stk_trophy', name: 'Sentence Hero', emoji: '🏆', description: 'Built a sentence!' },
  { id: 'stk_mic', name: 'Voice Champion', emoji: '🎙️', description: 'Spoke out loud!' },
  { id: 'stk_heart', name: 'Kindergarten Star', emoji: '💖', description: 'Ready for School!' },
  { id: 'stk_rainbow', name: 'Rainbow Reader', emoji: '🌈', description: 'Completed all levels!' },
  { id: 'stk_music', name: 'Sound Star', emoji: '🎵', description: 'Heard every letter sound!' },
  { id: 'stk_blend', name: 'Blend Wizard', emoji: '🧩', description: 'Explored CH, SH & TH!' },
  { id: 'stk_dino', name: 'Dino Reader', emoji: '🦖', description: 'Mastered 20 words!' },
  { id: 'stk_grad', name: 'Pre-K Graduate', emoji: '🎓', description: 'School Ready Expert!' }
];
