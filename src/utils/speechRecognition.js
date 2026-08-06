// Phase 2 Speech Recognition & Pronunciation Evaluator

export class VoiceRecognitionService {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.isSupported = false;

    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';
        this.isSupported = true;
      }
    }
  }

  startListening({ onResult, onError, onStart, onEnd, targetWord }) {
    if (!this.isSupported) {
      if (onError) onError('Speech recognition is not supported in this browser. You can use the simulator below!');
      return false;
    }

    if (this.isListening) {
      this.stopListening();
    }

    this.recognition.onstart = () => {
      this.isListening = true;
      if (onStart) onStart();
    };

    this.recognition.onresult = (event) => {
      const lastIndex = event.results.length - 1;
      const transcript = event.results[lastIndex][0].transcript.trim().toLowerCase();
      const isFinal = event.results[lastIndex].isFinal;

      const cleanedTranscript = transcript.replace(/[^a-z0-9 ]/g, '');
      const matchScore = this.calculateMatch(cleanedTranscript, targetWord);

      if (onResult) {
        onResult({
          transcript: cleanedTranscript,
          isFinal,
          isMatch: matchScore.isMatch,
          confidence: matchScore.score
        });
      }
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      console.warn('Speech recognition error:', event.error);
      let message = 'Could not hear clearly. Try again!';
      if (event.error === 'not-allowed') {
        message = 'Microphone permission denied. Please allow microphone access in browser settings.';
      } else if (event.error === 'no-speech') {
        message = 'No speech detected. Press the mic and speak clearly!';
      }
      if (onError) onError(message);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (onEnd) onEnd();
    };

    try {
      this.recognition.start();
      return true;
    } catch (err) {
      console.warn('Failed to start recognition:', err);
      if (onError) onError('Failed to access microphone.');
      return false;
    }
  }

  stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (err) {
        // Ignore stop errors
      }
    }
    this.isListening = false;
  }

  // Calculate string similarity for pre-K pronunciation matching
  calculateMatch(spoken, target) {
    if (!spoken || !target) return { isMatch: false, score: 0 };

    const cleanSpoken = spoken.toLowerCase().trim();
    const cleanTarget = target.toLowerCase().trim();

    // Exact match or includes word
    if (cleanSpoken === cleanTarget || cleanSpoken.includes(cleanTarget)) {
      return { isMatch: true, score: 1.0 };
    }

    // Common phonetic approximations (e.g., 'kat' for 'cat', 'son' for 'sun')
    const phoneticsMap = {
      'cat': ['kat', 'cut', 'cap', 'cad'],
      'dog': ['dock', 'dogg', 'dawg', 'dug'],
      'sun': ['son', 'sum', 'som', 'san'],
      'pig': ['peg', 'pik', 'big'],
      'bus': ['bass', 'bos', 'buzz'],
      'bug': ['bag', 'bok', 'pug'],
      'fox': ['box', 'foks'],
      'hat': ['had', 'hut', 'hot'],
      'bed': ['bet', 'bad', 'bad']
    };

    if (phoneticsMap[cleanTarget] && phoneticsMap[cleanTarget].includes(cleanSpoken)) {
      return { isMatch: true, score: 0.9 };
    }

    // Levenshtein distance check for slight kid slur
    const dist = this.levenshtein(cleanSpoken, cleanTarget);
    if (dist <= 1 && cleanTarget.length >= 3) {
      return { isMatch: true, score: 0.8 };
    }

    return { isMatch: false, score: Math.max(0, 1 - dist / Math.max(cleanTarget.length, 1)) };
  }

  levenshtein(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
    return matrix[a.length][b.length];
  }
}

export const voiceRecognition = new VoiceRecognitionService();
