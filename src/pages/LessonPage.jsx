import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Volume2, Star, CheckCircle, Lightbulb, RotateCcw } from 'lucide-react';
import { courses } from '../data/courses';
import { useApp } from '../context/AppContext';

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ar-MA';
    utter.rate = 0.8;
    window.speechSynthesis.speak(utter);
  }
}

export default function LessonPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { completedLessons, completeLesson, toggleFavorite, favorites } = useApp();

  const course = courses.find(c => c.id === parseInt(courseId));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showTip, setShowTip] = useState(false);
  const [showExample, setShowExample] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!course) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-white/60">Cours introuvable</p>
        <Link to="/cours" className="text-amber-400 mt-4 inline-block">← Retour aux cours</Link>
      </div>
    </div>
  );

  const lesson = course.lessons[currentIdx];
  const lessonKey = `${course.id}-${lesson.id}`;
  const isFav = favorites.includes(lessonKey);
  const isLessonDone = completedLessons.includes(lessonKey);
  const progress = ((currentIdx + 1) / course.lessons.length) * 100;

  const go = (dir) => {
    setIsAnimating(true);
    setShowTip(false);
    setShowExample(false);
    setTimeout(() => {
      if (dir === 'next') {
        completeLesson(course.id, lesson.id);
        if (currentIdx < course.lessons.length - 1) {
          setCurrentIdx(i => i + 1);
        } else {
          setCompleted(true);
        }
      } else {
        setCurrentIdx(i => Math.max(0, i - 1));
      }
      setIsAnimating(false);
    }, 200);
  };

  if (completed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 md:pt-20">
        <div className="text-center max-w-md">
          <div className="text-8xl mb-6 animate-float">🎉</div>
          <h2 className="text-3xl font-bold text-white mb-3">Cours terminé !</h2>
          <p className="text-white/60 mb-2">Tu as complété</p>
          <div className={`text-2xl font-bold bg-gradient-to-r ${course.color} bg-clip-text text-transparent mb-8`}>
            {course.title}
          </div>
          <div className="glass-gold rounded-2xl p-4 mb-8">
            <div className="text-3xl font-bold text-amber-400">+{course.xp} XP</div>
            <div className="text-amber-400/60 text-sm">gagnés !</div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to={`/quiz`}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-center"
            >
              🧠 Faire le quiz associé
            </Link>
            <Link
              to="/cours"
              className="px-6 py-3 rounded-2xl glass border border-white/20 text-white font-semibold text-center"
            >
              ← Retour aux cours
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/cours" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronLeft size={20} className="text-white" />
          </Link>
          <div className="flex-1">
            <div className="flex justify-between text-xs text-white/40 mb-1">
              <span>{course.title}</span>
              <span>{currentIdx + 1}/{course.lessons.length}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="progress-bar h-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* Card principale */}
        <div className={`glass rounded-3xl overflow-hidden mb-5 transition-all duration-200 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {/* Top color bar */}
          <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />

          <div className="p-8">
            {/* Arabic phrase */}
            <div className="text-center mb-8">
              <div className="text-sm text-white/40 mb-2 uppercase tracking-wider">Phrase Darija</div>
              <div className="font-arabic text-4xl md:text-5xl text-white leading-relaxed mb-3 text-right">
                {lesson.phrase}
              </div>
              <div className="text-amber-400 text-xl font-semibold">{lesson.romanization}</div>
              <div className="text-white/60 text-lg mt-1">{lesson.translation}</div>
            </div>

            {/* Pronunciation & actions */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <button
                onClick={() => speak(lesson.phrase)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 border border-amber-400/30 text-amber-400 hover:from-amber-400/30 hover:to-orange-500/30 transition-all"
              >
                <Volume2 size={18} />
                <span className="text-sm font-medium">Écouter</span>
              </button>
              <button
                onClick={() => toggleFavorite(lessonKey)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                  isFav
                    ? 'bg-amber-400/20 border-amber-400/40 text-amber-400'
                    : 'glass border-white/20 text-white/40 hover:text-amber-400'
                }`}
              >
                <Star size={16} fill={isFav ? 'currentColor' : 'none'} />
              </button>
              {isLessonDone && (
                <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center">
                  <CheckCircle size={16} className="text-emerald-400" />
                </div>
              )}
            </div>

            {/* Pronunciation guide */}
            <div className="glass rounded-xl p-3 text-center mb-4">
              <div className="text-xs text-white/40 mb-1">Prononciation</div>
              <div className="text-white/80 font-mono text-sm tracking-wide">[{lesson.pronunciation}]</div>
            </div>
          </div>
        </div>

        {/* Example toggle */}
        <button
          onClick={() => setShowExample(!showExample)}
          className="w-full glass rounded-2xl p-4 mb-3 text-left hover:bg-white/5 transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-white/70 text-sm font-medium">💬 Voir un exemple</span>
            <ChevronRight size={16} className={`text-white/40 transition-transform ${showExample ? 'rotate-90' : ''}`} />
          </div>
          {showExample && (
            <div className="mt-3 pt-3 border-t border-white/10 animate-fade-in">
              <p className="text-amber-300 font-medium mb-1">"{lesson.example}"</p>
              <p className="text-white/50 text-sm italic">{lesson.exampleTranslation}</p>
              <button
                onClick={(e) => { e.stopPropagation(); speak(lesson.example); }}
                className="mt-2 flex items-center gap-1 text-amber-400/60 text-xs hover:text-amber-400 transition-colors"
              >
                <Volume2 size={12} /> Écouter l'exemple
              </button>
            </div>
          )}
        </button>

        {/* Tip toggle */}
        <button
          onClick={() => setShowTip(!showTip)}
          className="w-full glass-gold rounded-2xl p-4 mb-6 text-left hover:bg-amber-400/10 transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-amber-400 text-sm font-medium flex items-center gap-2">
              <Lightbulb size={14} /> Astuce culturelle
            </span>
            <ChevronRight size={16} className={`text-amber-400/60 transition-transform ${showTip ? 'rotate-90' : ''}`} />
          </div>
          {showTip && (
            <p className="mt-3 pt-3 border-t border-amber-400/20 text-amber-200/70 text-sm leading-relaxed animate-fade-in">
              {lesson.tip}
            </p>
          )}
        </button>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={() => go('prev')}
            disabled={currentIdx === 0}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl glass border border-white/10 text-white/60 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={20} />
            Précédent
          </button>
          <button
            onClick={() => go('next')}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all btn-shine ${
              currentIdx === course.lessons.length - 1
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/30'
            }`}
          >
            {currentIdx === course.lessons.length - 1 ? (
              <><CheckCircle size={18} /> Terminer</>
            ) : (
              <>Suivant <ChevronRight size={20} /></>
            )}
          </button>
        </div>

        {/* Restart */}
        {currentIdx > 0 && (
          <button
            onClick={() => { setCurrentIdx(0); setCompleted(false); }}
            className="w-full mt-3 flex items-center justify-center gap-2 text-white/30 text-sm hover:text-white/50 transition-colors"
          >
            <RotateCcw size={12} /> Recommencer depuis le début
          </button>
        )}
      </div>
    </div>
  );
}
