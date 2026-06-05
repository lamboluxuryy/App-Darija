import { useState, useRef } from 'react';
import { Mic, MicOff, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { oralPhrases } from '../data/oralPhrases';
import { useApp } from '../context/AppContext';

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ar-MA';
  u.rate = 0.7;
  window.speechSynthesis.speak(u);
}

function scoreTranscript(transcript, expected) {
  const normalize = s => s.replace(/[،.!?؟\s]+/g, ' ').trim().toLowerCase();
  const tWords = normalize(transcript).split(' ').filter(Boolean);
  const eWords = normalize(expected).split(' ').filter(Boolean);
  if (eWords.length === 0) return 0;
  const matches = tWords.filter(w => eWords.some(e => e.includes(w) || w.includes(e))).length;
  return matches / eWords.length;
}

export default function SpeakingPage() {
  const { recordFlashcard } = useApp();
  const [catIdx, setCatIdx] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [result, setResult] = useState(null);
  const [playingTTS, setPlayingTTS] = useState(false);
  const recognitionRef = useRef(null);

  const hasSR = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  const cat = oralPhrases[catIdx];
  const phrase = cat.phrases[phraseIdx];
  const phraseKey = `speaking-${catIdx}-${phraseIdx}`;
  const isFirst = catIdx === 0 && phraseIdx === 0;
  const isLast = catIdx === oralPhrases.length - 1 && phraseIdx === cat.phrases.length - 1;

  const handleSpeak = () => {
    setPlayingTTS(true);
    speak(phrase.darija);
    setTimeout(() => setPlayingTTS(false), 3500);
  };

  const startListening = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const recognition = new SR();
    recognition.lang = 'ar-MA';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognitionRef.current = recognition;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setTranscript(text);
      const ratio = scoreTranscript(text, phrase.darija);
      if (ratio >= 0.65) setResult('excellent');
      else if (ratio >= 0.35) setResult('ok');
      else setResult('retry');
    };
    recognition.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const goNext = () => {
    if (phraseIdx < cat.phrases.length - 1) {
      setPhraseIdx(p => p + 1);
    } else if (catIdx < oralPhrases.length - 1) {
      setCatIdx(c => c + 1);
      setPhraseIdx(0);
    }
    setTranscript('');
    setResult(null);
  };

  const goPrev = () => {
    if (phraseIdx > 0) {
      setPhraseIdx(p => p - 1);
    } else if (catIdx > 0) {
      const prevCat = oralPhrases[catIdx - 1];
      setCatIdx(c => c - 1);
      setPhraseIdx(prevCat.phrases.length - 1);
    }
    setTranscript('');
    setResult(null);
  };

  const selfGrade = (good) => {
    recordFlashcard(phraseKey, good);
    setResult(good ? 'excellent' : 'retry');
    setTimeout(() => {
      if (!isLast) goNext();
    }, 1200);
  };

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-1">🎤 Parler Darija</h1>
          <p className="text-white/50 text-sm">Écoutez, répétez et entraînez votre prononciation</p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6" style={{ scrollbarWidth: 'none' }}>
          {oralPhrases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => { setCatIdx(i); setPhraseIdx(0); setTranscript(''); setResult(null); }}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                i === catIdx
                  ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                  : 'glass text-white/50 hover:text-white border border-transparent'
              }`}
            >
              {c.emoji} {c.category}
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="flex justify-between text-white/40 text-xs mb-1">
          <span>{cat.emoji} {cat.category}</span>
          <span>{phraseIdx + 1} / {cat.phrases.length}</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full mb-6 overflow-hidden">
          <div className="progress-bar h-full transition-all" style={{ width: `${((phraseIdx + 1) / cat.phrases.length) * 100}%` }} />
        </div>

        {/* Phrase card */}
        <div className="glass rounded-3xl p-8 mb-5 text-center relative overflow-hidden">
          <div className="absolute inset-0 moroccan-pattern opacity-10" />
          <div className="relative">
            <div className="font-arabic text-4xl md:text-5xl text-white mb-3 leading-relaxed dir-rtl">
              {phrase.darija}
            </div>
            <div className="text-amber-400 font-semibold text-lg mb-2">{phrase.romanization}</div>
            <div className="text-white/60 mb-3">{phrase.translation}</div>
            <span className={`text-xs px-3 py-1 rounded-full inline-block ${
              phrase.difficulty === 'easy' ? 'text-emerald-400 bg-emerald-400/10' :
              phrase.difficulty === 'medium' ? 'text-amber-400 bg-amber-400/10' :
              'text-rose-400 bg-rose-400/10'
            }`}>
              {phrase.difficulty === 'easy' ? '⭐ Facile' : phrase.difficulty === 'medium' ? '⭐⭐ Moyen' : '⭐⭐⭐ Difficile'}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mb-5">
          <button
            onClick={handleSpeak}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold border transition-all ${
              playingTTS
                ? 'bg-blue-400/20 border-blue-400/50 text-blue-400'
                : 'glass border-blue-400/30 text-blue-400 hover:bg-blue-400/10'
            }`}
          >
            <Volume2 size={20} />
            {playingTTS ? 'En cours...' : 'Écouter'}
          </button>

          {hasSR && (
            <button
              onClick={isListening ? stopListening : startListening}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold border transition-all ${
                isListening
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-400 animate-pulse'
                  : 'glass border-amber-400/30 text-amber-400 hover:bg-amber-400/10'
              }`}
            >
              {isListening ? <MicOff size={20} /> : <Mic size={20} />}
              {isListening ? 'Stop' : 'Parler'}
            </button>
          )}
        </div>

        {/* Transcript result */}
        {transcript && (
          <div className={`rounded-2xl p-4 mb-4 border transition-all ${
            result === 'excellent' ? 'bg-emerald-500/10 border-emerald-500/30' :
            result === 'ok' ? 'bg-amber-500/10 border-amber-500/30' :
            'bg-rose-500/10 border-rose-500/30'
          }`}>
            <p className="text-white/50 text-xs mb-1">Votre prononciation :</p>
            <p className="font-arabic text-white text-lg mb-2 dir-rtl">{transcript}</p>
            <p className={`font-bold text-sm ${
              result === 'excellent' ? 'text-emerald-400' :
              result === 'ok' ? 'text-amber-400' : 'text-rose-400'
            }`}>
              {result === 'excellent' ? '✅ Excellent !' : result === 'ok' ? '👍 Pas mal, continuez !' : '🔄 Réessayez'}
            </p>
          </div>
        )}

        {/* Self-grade (when no SpeechRecognition or after listening) */}
        {!hasSR && result === null && (
          <div className="mb-5">
            <p className="text-white/40 text-xs text-center mb-3">Notez votre prononciation après avoir écouté</p>
            <div className="flex gap-3">
              <button
                onClick={() => selfGrade(false)}
                className="flex-1 py-3 rounded-2xl glass border border-rose-400/30 text-rose-400 hover:bg-rose-400/10 transition-all font-semibold"
              >
                🔄 À revoir
              </button>
              <button
                onClick={() => selfGrade(true)}
                className="flex-1 py-3 rounded-2xl glass border border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10 transition-all font-semibold"
              >
                ✅ Je maîtrise
              </button>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={goPrev}
            disabled={isFirst}
            className="px-5 py-3 rounded-2xl glass border border-white/10 text-white/50 hover:text-white transition-all disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            disabled={isLast}
            className="flex-1 py-3 rounded-2xl font-bold btn-shine bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/30 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"
          >
            Phrase suivante →
          </button>
        </div>

        {/* Tip */}
        {!hasSR && (
          <div className="mt-6 glass rounded-2xl p-4 border border-blue-400/20">
            <p className="text-white/50 text-sm text-center">
              💡 Pour la reconnaissance vocale, utilisez Chrome sur Android ou un navigateur compatible
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
