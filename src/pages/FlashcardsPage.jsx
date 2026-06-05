import { useState, useMemo } from 'react';
import { RotateCcw, CheckCircle, XCircle, Shuffle, ChevronLeft, ChevronRight, Zap, BookOpen } from 'lucide-react';
import { courses } from '../data/courses';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

function FlipCard({ lesson, onResult, index, total }) {
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleFlip = () => !answered && setFlipped(f => !f);

  const handleAnswer = (correct) => {
    setAnswered(true);
    onResult(correct);
  };

  function speak(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ar-MA'; u.rate = 0.75;
      window.speechSynthesis.speak(u);
    }
  }

  return (
    <div className="flex flex-col items-center">
      {/* Progress */}
      <div className="text-white/40 text-sm mb-4">{index + 1} / {total}</div>

      {/* Card */}
      <div
        className="relative w-full max-w-sm h-64 cursor-pointer"
        style={{ perspective: '1000px' }}
        onClick={handleFlip}
      >
        <div
          className="relative w-full h-full transition-all duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 glass rounded-3xl p-8 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-xs text-white/30 uppercase tracking-widest mb-4">Darija</div>
            <div className="font-arabic text-4xl text-white text-center leading-relaxed mb-3">{lesson.phrase}</div>
            <div className="text-amber-400 text-lg font-medium">{lesson.romanization}</div>
            <div className="text-white/30 text-sm mt-6">Appuie pour retourner</div>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 glass-gold rounded-3xl p-8 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="text-xs text-amber-400/60 uppercase tracking-widest mb-4">Traduction</div>
            <div className="text-2xl font-bold text-white text-center mb-3">{lesson.translation}</div>
            <div className="text-white/50 text-sm text-center italic mb-2">"{lesson.example}"</div>
            <button
              onClick={(e) => { e.stopPropagation(); speak(lesson.phrase); }}
              className="mt-3 text-amber-400/60 text-xs flex items-center gap-1 hover:text-amber-400"
            >
              🔊 Écouter
            </button>
          </div>
        </div>
      </div>

      {/* Answer buttons (shown after flip) */}
      {flipped && !answered && (
        <div className="flex gap-4 mt-6 w-full max-w-sm animate-slide-up">
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 py-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold flex items-center justify-center gap-2 hover:bg-rose-500/30 transition-all"
          >
            <XCircle size={18} /> À revoir
          </button>
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 py-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold flex items-center justify-center gap-2 hover:bg-emerald-500/30 transition-all"
          >
            <CheckCircle size={18} /> Je sais !
          </button>
        </div>
      )}

      {answered && (
        <div className="mt-6 text-white/30 text-sm animate-fade-in">Carte suivante →</div>
      )}
    </div>
  );
}

export default function FlashcardsPage() {
  const { recordFlashcard, completedLessons } = useApp();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState([]);
  const [done, setDone] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [filterMode, setFilterMode] = useState('all'); // all | todo

  const allLessons = useMemo(() => {
    if (!selectedCourse) return [];
    let lessons = selectedCourse.lessons.map(l => ({ ...l, courseId: selectedCourse.id }));
    if (filterMode === 'todo') {
      lessons = lessons.filter(l => !completedLessons.includes(`${selectedCourse.id}-${l.id}`));
    }
    if (shuffled) {
      lessons = [...lessons].sort(() => Math.random() - 0.5);
    }
    return lessons;
  }, [selectedCourse, shuffled, filterMode, completedLessons]);

  const handleResult = (correct) => {
    const lesson = allLessons[currentIdx];
    recordFlashcard(`${lesson.courseId}-${lesson.id}`, correct);
    setResults(prev => [...prev, correct]);

    setTimeout(() => {
      if (currentIdx < allLessons.length - 1) {
        setCurrentIdx(i => i + 1);
      } else {
        setDone(true);
      }
    }, 400);
  };

  const restart = () => {
    setCurrentIdx(0);
    setResults([]);
    setDone(false);
  };

  const correctCount = results.filter(Boolean).length;
  const score = results.length > 0 ? Math.round((correctCount / results.length) * 100) : 0;

  if (!selectedCourse) {
    return (
      <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">🃏 Flashcards</h1>
            <p className="text-white/50">Révisez les phrases en retournant des cartes</p>
          </div>

          <div className="flex gap-3 mb-6">
            {['all', 'todo'].map(mode => (
              <button
                key={mode}
                onClick={() => setFilterMode(mode)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterMode === mode
                    ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                    : 'glass text-white/50 hover:text-white'
                }`}
              >
                {mode === 'all' ? '📚 Toutes les cartes' : '🎯 À revoir uniquement'}
              </button>
            ))}
            <button
              onClick={() => setShuffled(s => !s)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                shuffled
                  ? 'bg-purple-400/20 text-purple-400 border border-purple-400/40'
                  : 'glass text-white/50 hover:text-white'
              }`}
            >
              <Shuffle size={14} /> Mélanger
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map(course => (
              <button
                key={course.id}
                onClick={() => { setSelectedCourse(course); setCurrentIdx(0); setResults([]); setDone(false); }}
                className="glass rounded-2xl p-5 text-left card-hover"
              >
                <div className={`text-3xl w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-3`}>
                  {course.emoji}
                </div>
                <div className="font-bold text-white text-sm mb-1">{course.title}</div>
                <div className="text-white/40 text-xs">{course.lessons.length} cartes</div>
              </button>
            ))}
          </div>

          <div className="mt-8 glass-gold rounded-2xl p-5 text-center">
            <p className="text-amber-400/80 text-sm">
              💡 <strong>Comment ça marche :</strong> Retournez la carte, puis indiquez si vous connaissiez la réponse. Les cartes que vous ne connaissez pas reviennent plus souvent !
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (allLessons.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 md:pt-20">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-white mb-2">Toutes les cartes maîtrisées !</h2>
          <p className="text-white/50 mb-6">Vous avez complété toutes les leçons de ce cours.</p>
          <button onClick={() => setSelectedCourse(null)} className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold">
            Choisir un autre cours
          </button>
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 md:pt-20">
        <div className="text-center max-w-sm">
          <div className="text-8xl mb-4 animate-float">
            {score >= 80 ? '🏆' : score >= 50 ? '👍' : '💪'}
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Session terminée !</h2>
          <p className="text-white/50 mb-6">{selectedCourse.title}</p>

          <div className="glass rounded-2xl p-6 mb-6">
            <div className="flex justify-around">
              <div>
                <div className="text-3xl font-bold text-emerald-400">{correctCount}</div>
                <div className="text-white/40 text-xs">Connues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-400">{results.length - correctCount}</div>
                <div className="text-white/40 text-xs">À revoir</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">{score}%</div>
                <div className="text-white/40 text-xs">Score</div>
              </div>
            </div>
          </div>

          <div className="glass-gold rounded-xl p-3 mb-6 flex items-center justify-center gap-2">
            <Zap size={16} className="text-amber-400" />
            <span className="text-amber-400 font-bold">+{correctCount * 5} XP gagnés</span>
          </div>

          <div className="flex flex-col gap-3">
            <button onClick={restart} className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold">
              <RotateCcw size={16} /> Rejouer
            </button>
            <button onClick={() => setSelectedCourse(null)} className="py-3 rounded-2xl glass border border-white/10 text-white/70">
              ← Choisir un autre cours
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setSelectedCourse(null)} className="w-10 h-10 glass rounded-xl flex items-center justify-center">
            <ChevronLeft size={20} className="text-white" />
          </button>
          <div className="flex-1">
            <div className="flex justify-between text-xs text-white/40 mb-1">
              <span>{selectedCourse.title}</span>
              <span className="text-emerald-400">{results.filter(Boolean).length} ✓</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="progress-bar h-full" style={{ width: `${(currentIdx / allLessons.length) * 100}%` }} />
            </div>
          </div>
        </div>

        <FlipCard
          lesson={allLessons[currentIdx]}
          onResult={handleResult}
          index={currentIdx}
          total={allLessons.length}
        />
      </div>
    </div>
  );
}
