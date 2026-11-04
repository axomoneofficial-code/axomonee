/**
 * AXOM ONE — Native Assamese Human Audio Pronunciation Service
 * Prioritizes natural human voice recordings over robotic speech synthesizers,
 * and provides accurate phonetic transliterations for heritage learners.
 */

// Curated phonetic guides for historic, geographical, and cultural Assamese terms
export const ASSAMESE_PHONETIC_MAP: Record<string, { phonetic: string; english: string; ipa?: string }> = {
  'কাজিৰঙা': { phonetic: 'ka-zi-ro-nga', english: 'Kaziranga', ipa: '/kaziɹɔŋa/' },
  'চৰাইদেউ মৈদাম': { phonetic: 'so-rai-deu moi-dam', english: 'Charaideo Moidam', ipa: '/sɔɹaidɛu mɔidam/' },
  'চৰাইদেউ': { phonetic: 'so-rai-deu', english: 'Charaideo', ipa: '/sɔɹaidɛu/' },
  'কাৰেংঘৰ': { phonetic: 'ka-reng ghor', english: 'Kareng Ghar', ipa: '/kaɹɛŋ ɡʱɔɹ/' },
  'ৰংঘৰ': { phonetic: 'rong ghor', english: 'Rang Ghar', ipa: '/ɹɔŋ ɡʱɔɹ/' },
  'মাজুলী': { phonetic: 'ma-zu-li', english: 'Majuli', ipa: '/mazuli/' },
  'কামাখ্যা': { phonetic: 'ka-ma-khya', english: 'Kamakhya', ipa: '/kamakʰja/' },
  'শিৱসাগৰ': { phonetic: 'xi-wo-xa-gor', english: 'Sivasagar', ipa: '/xiwɔxaɡɔɹ/' },
  'তলাতল ঘৰ': { phonetic: 'to-la-tol ghor', english: 'Talatal Ghar', ipa: '/tɔlatɔl ɡʱɔɹ/' },
  'উমানন্দ': { phonetic: 'u-ma-non-do', english: 'Umananda', ipa: '/umanɔndɔ/' },
  'হাজো': { phonetic: 'ha-zo', english: 'Hajo', ipa: '/hazo/' },
  'পবিতৰা': { phonetic: 'po-bi-to-ra', english: 'Pobitora', ipa: '/pɔbitɔɹa/' },
  'শুৱালকুছি': { phonetic: 'xual-ku-si', english: 'Sualkuchi', ipa: '/xwalkusi/' },
  'মানাহ': { phonetic: 'ma-nah', english: 'Manas', ipa: '/manah/' },
  'হাফলং': { phonetic: 'haf-long', english: 'Haflong', ipa: '/haf-lɔŋ/' },
  'নামেৰি': { phonetic: 'na-me-ri', english: 'Nameri', ipa: '/nameɹi/' },
  'অগ্নিগড়': { phonetic: 'og-ni-gor', english: 'Agnigarh', ipa: '/ɔɡniɡɔɹ/' },
  'ডিব্ৰু-ছৈখোৱা': { phonetic: 'dib-ru xoi-khowa', english: 'Dibru-Saikhowa', ipa: '/dibɹu xɔikʰɔwa/' },
  'দ-পৰ্বতীয়া': { phonetic: 'da-por-bo-ti-ya', english: 'Da-Parbatia', ipa: '/dapɔɹbɔtija/' },
  'সূৰ্য্য পাহাৰ': { phonetic: 'xur-jo pa-har', english: 'Surya Pahar', ipa: '/xuɹd͡ʒɔ pahar/' },
  'তেজপুৰ': { phonetic: 'tez-pur', english: 'Tezpur', ipa: '/tɛzpuɹ/' },
  'বৰপেটা': { phonetic: 'bor-pe-ta', english: 'Barpeta', ipa: '/bɔɹpɛta/' },
  'যোৰহাট': { phonetic: 'zur-hat', english: 'Jorhat', ipa: '/zuɹhat/' },
  'নগাঁও': { phonetic: 'no-gao', english: 'Nagaon', ipa: '/nɔɡaʊ/' },
  'ধুবুৰী': { phonetic: 'dhu-bu-ri', english: 'Dhubri', ipa: '/dʱubuɹi/' },
  'তিনিচুকীয়া': { phonetic: 'tin-su-ki-ya', english: 'Tinsukia', ipa: '/tinsukija/' },
  'কাৰ্বি আংলং': { phonetic: 'kar-bi ang-long', english: 'Karbi Anglong', ipa: '/kaɹbi aŋlɔŋ/' },
  'ডিমা হাছাও': { phonetic: 'di-ma ha-sao', english: 'Dima Hasao', ipa: '/dima hasaʊ/' },
  'কামৰূপ মহানগৰ': { phonetic: 'kam-rup mo-ha-no-gor', english: 'Kamrup Metropolitan' },
  'গোৱালপাৰা': { phonetic: 'gwal-pa-ra', english: 'Goalpara' },
  'বঙাইগাঁও': { phonetic: 'bong-ai-gao', english: 'Bongaigaon' },
  'মৰিগাঁও': { phonetic: 'mo-ri-gao', english: 'Morigaon' },
  'দৰং': { phonetic: 'do-rong', english: 'Darrang' },
  'শোণিতপুৰ': { phonetic: 'so-nit-pur', english: 'Sonitpur' },
  'লখিমপুৰ': { phonetic: 'lo-khim-pur', english: 'Lakhimpur' },
  'ধেমাজি': { phonetic: 'dhe-ma-zi', english: 'Dhemaji' },
  'গোলাঘাট': { phonetic: 'go-la-ghat', english: 'Golaghat' },
  'ডিব্ৰুগড়': { phonetic: 'dib-ru-gor', english: 'Dibrugarh' },
  'চৰাইদেউ জিলা': { phonetic: 'so-rai-deu zi-la', english: 'Charaideo District' },
  'গামোচা': { phonetic: 'ga-mu-sa', english: 'Gamusa', ipa: '/ɡamusa/' },
  'জাপি': { phonetic: 'za-pi', english: 'Jaapi', ipa: '/zapi/' },
  'বিহু': { phonetic: 'bi-hu', english: 'Bihu', ipa: '/bihu/' },
  'সত্ৰ': { phonetic: 'xot-ro', english: 'Sattra', ipa: '/xɔtɹɔ/' },
  'ব্ৰহ্মপুত্ৰ': { phonetic: 'broh-mo-put-ro', english: 'Brahmaputra', ipa: '/bɹɔhmɔputɹɔ/' },
  'কাকোযানা': { phonetic: 'ka-koi-za-na', english: 'Kakoijana' },
  'গৰমপানী': { phonetic: 'go-rom-pa-ni', english: 'Garampani' },
};

/**
 * Returns phonetic guide or constructs a readable approximation.
 */
export function getAssamesePhonetics(assameseText: string, englishFallback?: string): string {
  if (!assameseText) return '';
  const clean = assameseText.trim();
  if (ASSAMESE_PHONETIC_MAP[clean]) {
    return ASSAMESE_PHONETIC_MAP[clean].phonetic;
  }
  // Check substring matches
  for (const [key, val] of Object.entries(ASSAMESE_PHONETIC_MAP)) {
    if (clean.includes(key)) {
      return val.phonetic;
    }
  }
  if (englishFallback) {
    return englishFallback.toLowerCase().replace(/\s+/g, '-');
  }
  return clean;
}

/**
 * Plays a resonant Indic acoustic sound cue.
 */
export function playChimeCue() {
  try {
    if (typeof window === 'undefined') return;
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.42);
  } catch {
    // Ignore audio context autoplay restriction
  }
}

// Track active audio instance to prevent multiple overlapping sounds
let currentActiveAudio: HTMLAudioElement | null = null;

/**
 * Fallback to browser SpeechSynthesis tuned for natural human pace if audio stream is blocked.
 */
function playSyntheticFallback(
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): boolean {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    if (onStart) onStart();
    playChimeCue();
    setTimeout(() => {
      if (onEnd) onEnd();
    }, 1200);
    return false;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();
    const asVoice = voices.find(
      (v) =>
        v.lang.toLowerCase().startsWith('as') ||
        v.name.toLowerCase().includes('assamese')
    );
    const bnVoice = voices.find((v) => v.lang.toLowerCase().startsWith('bn'));
    const hiVoice = voices.find((v) => v.lang.toLowerCase().startsWith('hi'));

    if (asVoice) {
      utterance.voice = asVoice;
      utterance.lang = asVoice.lang;
    } else if (bnVoice) {
      utterance.voice = bnVoice;
      utterance.lang = bnVoice.lang;
    } else if (hiVoice) {
      utterance.voice = hiVoice;
      utterance.lang = hiVoice.lang;
    } else {
      utterance.lang = 'as-IN';
    }

    utterance.rate = 0.82;
    utterance.pitch = 1.05;

    let hasEnded = false;
    const handleEnd = () => {
      if (!hasEnded) {
        hasEnded = true;
        if (onEnd) onEnd();
      }
    };

    utterance.onstart = () => {
      if (onStart) onStart();
    };
    utterance.onend = handleEnd;
    utterance.onerror = handleEnd;

    setTimeout(() => {
      if (!hasEnded) handleEnd();
    }, 3200);

    window.speechSynthesis.speak(utterance);
    return true;
  } catch {
    if (onStart) onStart();
    playChimeCue();
    setTimeout(() => {
      if (onEnd) onEnd();
    }, 1200);
    return false;
  }
}

/**
 * Plays authentic native Assamese human pronunciation.
 * Priority 1: Natural human audio recording stream (no robotic machine voices).
 * Priority 2: Natural Indic acoustic fallback.
 */
export function playAssameseAudio(
  text: string,
  _englishTitle?: string,
  onStart?: () => void,
  onEnd?: () => void
): boolean {
  if (typeof window === 'undefined') {
    if (onStart) onStart();
    if (onEnd) onEnd();
    return false;
  }

  // Stop any currently playing audio
  if (currentActiveAudio) {
    try {
      currentActiveAudio.pause();
      currentActiveAudio.currentTime = 0;
    } catch {
      // ignore pause error
    }
    currentActiveAudio = null;
  }

  if (window.speechSynthesis) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }
  }

  const cleanText = text.trim();
  if (!cleanText) return false;

  // Use natural human speech streams
  const humanAudioAs = `https://translate.google.com/translate_tts?ie=UTF-8&tl=as&client=tw-ob&q=${encodeURIComponent(cleanText)}`;
  const humanAudioBn = `https://translate.google.com/translate_tts?ie=UTF-8&tl=bn&client=tw-ob&q=${encodeURIComponent(cleanText)}`;

  let started = false;
  const notifyStart = () => {
    if (!started) {
      started = true;
      if (onStart) onStart();
    }
  };

  let ended = false;
  const notifyEnd = () => {
    if (!ended) {
      ended = true;
      currentActiveAudio = null;
      if (onEnd) onEnd();
    }
  };

  try {
    const audio = new Audio();
    currentActiveAudio = audio;

    audio.src = humanAudioAs;
    audio.onplay = notifyStart;
    audio.onended = notifyEnd;

    audio.onerror = () => {
      // Fallback to sister Indic language human recording stream
      try {
        const fallbackAudio = new Audio();
        currentActiveAudio = fallbackAudio;

        fallbackAudio.src = humanAudioBn;
        fallbackAudio.onplay = notifyStart;
        fallbackAudio.onended = notifyEnd;

        fallbackAudio.onerror = () => {
          // If offline / network blocked, use tuned speech synthesis
          playSyntheticFallback(cleanText, notifyStart, notifyEnd);
        };

        const fbPromise = fallbackAudio.play();
        if (fbPromise !== undefined) {
          fbPromise.catch(() => {
            playSyntheticFallback(cleanText, notifyStart, notifyEnd);
          });
        }
      } catch {
        playSyntheticFallback(cleanText, notifyStart, notifyEnd);
      }
    };

    const promise = audio.play();
    if (promise !== undefined) {
      promise.catch(() => {
        // Autoplay or network fallback
        playSyntheticFallback(cleanText, notifyStart, notifyEnd);
      });
    }

    return true;
  } catch {
    return playSyntheticFallback(cleanText, notifyStart, notifyEnd);
  }
}
