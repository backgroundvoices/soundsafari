// Audio Engine combining Web Speech API (Text-to-Speech) and Web Audio API (Sound FX)

class AudioEngine {
  constructor() {
    this.synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
    this.audioCtx = null;
    this.speechRate = 0.75; // Slower rate for pre-K kids
    this.speechPitch = 1.1; // Slightly higher/friendly pitch for kids
    this.selectedVoice = null;
    this.isMuted = false;

    if (typeof window !== 'undefined') {
      this.initVoices();
    }
  }

  initAudioContext() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  initVoices() {
    if (!this.synth) return;
    const loadVoices = () => {
      const voices = this.synth.getVoices();
      const englishVoices = voices.filter(v => v.lang.startsWith('en'));
      
      // Prioritize UK Female Voices (en-GB + Female / Google UK English Female / Hazel / Libby / Fiona / Sonia / Victoria)
      const ukVoices = englishVoices.filter(v => v.lang.includes('GB') || v.lang.includes('uk') || v.name.includes('UK') || v.name.includes('British'));
      
      const ukFemaleVoice = ukVoices.find(v => 
        v.name.includes('Female') || 
        v.name.includes('Google UK English Female') || 
        v.name.includes('Hazel') || 
        v.name.includes('Libby') || 
        v.name.includes('Fiona') || 
        v.name.includes('Sonia') ||
        v.name.includes('Victoria') ||
        v.name.includes('Kate') ||
        v.name.includes('Serena')
      ) || ukVoices[0] || englishVoices.find(v => v.name.includes('Female')) || englishVoices[0] || voices[0];
      
      this.selectedVoice = ukFemaleVoice || null;
    };

    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  setSpeechRate(rate) {
    this.speechRate = Math.max(0.4, Math.min(1.2, rate));
  }

  setSpeechPitch(pitch) {
    this.speechPitch = Math.max(0.6, Math.min(1.5, pitch));
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted && this.synth) {
      this.synth.cancel();
    }
  }

  getVoices() {
    if (!this.synth) return [];
    return this.synth.getVoices().filter(v => v.lang.startsWith('en'));
  }

  setVoice(voiceName) {
    const voices = this.getVoices();
    const found = voices.find(v => v.name === voiceName);
    if (found) {
      this.selectedVoice = found;
    }
  }

  stopSpeech() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  speakText(text, options = {}) {
    if (this.isMuted || !this.synth) return Promise.resolve();

    this.initAudioContext();
    this.synth.cancel(); // Stop any ongoing speech

    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = options.rate || this.speechRate;
      utterance.pitch = options.pitch || this.speechPitch;
      utterance.volume = options.volume || 1.0;

      if (options.voice) {
        utterance.voice = options.voice;
      } else if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }

      utterance.onend = () => {
        if (options.onEnd) options.onEnd();
        resolve();
      };

      utterance.onerror = (err) => {
        console.warn('Speech synthesis warning:', err);
        if (options.onEnd) options.onEnd();
        resolve();
      };

      this.synth.speak(utterance);
    });
  }

  speakPhonics(letter, phonicSound, exampleWord) {
    const text = `Letter ${letter}! ${letter} says ${phonicSound}. Like ${exampleWord}!`;
    return this.speakText(text, { rate: this.speechRate * 0.9 });
  }

  speakBlend(blendObj) {
    const prompt = blendObj.spokenPrompt || `The blend ${blendObj.blend} sound, as in ${blendObj.word}!`;
    return this.speakText(prompt, { rate: this.speechRate * 0.85 });
  }

  speakWordSlowly(word) {
    const lettersSpelled = word.split('').join(' . ');
    const text = `${lettersSpelled} . ${word}!`;
    return this.speakText(text, { rate: this.speechRate * 0.85 });
  }

  // Synthesizes Web Audio sound effects
  playAudioEffect(type) {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    switch (type) {
      case 'pop': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
        break;
      }
      case 'click': {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
        break;
      }
      case 'correct': {
        // High dual-tone chime
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const startTime = now + idx * 0.08;
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0.25, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.25);
        });
        break;
      }
      case 'star': {
        // Magical arpeggio
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const startTime = now + idx * 0.06;
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0.2, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.3);
        });
        break;
      }
      case 'tryAgain': {
        // Gentle low wobble
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(180, now + 0.25);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
        break;
      }
      default:
        break;
    }
  }
}

export const audioEngine = new AudioEngine();
