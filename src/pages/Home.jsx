import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mic, HelpCircle, Trophy, Flame, Star, ChevronRight, Zap, MessageSquare, CreditCard, BookMarked, NotebookPen } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { courses } from '../data/courses';
import { dictionaryWords } from '../data/dictionary';

const features = [
  { to: '/cours', emoji: '📖', title: 'Cours', desc: '14 cours progressifs', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30', badge: `${courses.length} cours` },
  { to: '/oral', emoji: '🎙️', title: 'Oral', desc: '48 phrases à écouter', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/30', badge: '8 catégories' },
  { to: '/flashcards', emoji: '🃏', title: 'Flashcards', desc: 'Révision intelligente', color: 'from-purple-500/20 to-violet-500/20', border: 'border-purple-500/30', badge: 'Spaced rep.' },
  { to: '/dialogues', emoji: '💬', title: 'Dialogues', desc: 'Conversations réelles', color: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/30', badge: '5 scénarios' },
  { to: '/quiz', emoji: '🧠', title: 'Quiz', desc: '8 quiz gamifiés', color: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/30', badge: '8 quiz' },
  { to: '/dictionnaire', emoji: '📚', title: 'Dictionnaire', desc: `${dictionaryWords.length} mots & expressions`, color: 'from-teal-500/20 to-cyan-500/20', border: 'border-teal-500/30', badge: `${dictionaryWords.length} mots` },
  { to: '/grammaire', emoji: '📝', title: 'Grammaire', desc: 'Règles essentielles', color: 'from-indigo-500/20 to-violet-500/20', border: 'border-indigo-500/30', badge: '8 règles' },
];

function WordOfDay({ wordOfDay }) {
  if (!wordOfDay) return null;
  function speak(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ar-MA'; u.rate = 0.75;
      window.speechSynthesis.speak(u);
    }
  }
  return (
    <div className="glass-gold rounded-3xl p-6 mb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full -translate-y-16 translate-x-16" />
      <div className="relative">
        <div className="flex items-center gap-2 text-amber-400/70 text-xs uppercase tracking-wider mb-3">
          <span>✨</span> Mot du jour
        </div>
        <div className="flex items-start justify-between">
          <div>
            <div className="font-arabic text-3xl text-white mb-1">{wordOfDay.darija}</div>
            <div className="text-amber-400 font-semibold text-lg">{wordOfDay.romanization}</div>
            <div className="text-white/60">{wordOfDay.translation}</div>
            {wordOfDay.example && (
              <div className="text-white/40 text-sm mt-2 italic">"{wordOfDay.example}"</div>
            )}
          </div>
          <button
            onClick={() => speak(wordOfDay.darija)}
            className="w-12 h-12 rounded-2xl bg-amber-400/20 flex items-center justify-center text-amber-400 hover:bg-amber-400/30 transition-all flex-shrink-0 ml-4"
          >
            🔊
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { xp, streak, completedLessons, getLevel, wordOfDay, setWordOfDay } = useApp();
  const level = getLevel();
  const progressPercent = level.next
    ? Math.min(((xp - (level.prev || 0)) / (level.next - (level.prev || 0))) * 100, 100)
    : 100;

  const completedCourses = courses.filter(c =>
    c.lessons.every(l => completedLessons.includes(`${c.id}-${l.id}`))
  ).length;

  // Pick word of day
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (!wordOfDay || wordOfDay.date !== today) {
      const idx = new Date().getDate() % dictionaryWords.length;
      setWordOfDay({ ...dictionaryWords[idx], date: today });
    }
  }, []);

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-20 lg:pt-16">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 moroccan-pattern opacity-20" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/8 rounded-full blur-3xl" />

        <div className="relative px-4 py-10 md:py-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-amber-400 text-sm font-medium mb-5">
            <Zap size={13} /> Parlez Darija en 30 jours
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            Apprenez le <span className="gradient-text">Darija</span>
          </h1>
          <p className="font-arabic text-amber-300 text-xl mb-2">تعلم الدارجة المغربية</p>
          <p className="text-white/50 text-base max-w-xl mx-auto mb-8">
            La langue vivante du Maroc — cours, oral, flashcards, dialogues, quiz et dictionnaire.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/cours" className="btn-shine flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-base shadow-lg shadow-amber-500/30 hover:scale-105 transition-all">
              <BookOpen size={18} /> Commencer
            </Link>
            <Link to="/pratiquer" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl glass border border-white/20 text-white font-semibold hover:border-amber-400/50 transition-all hover:scale-105">
              <Mic size={18} /> Pratiquer
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-4xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { icon: Trophy, label: 'XP', value: xp, color: 'text-amber-400', bg: 'bg-amber-400/10' },
            { icon: Flame, label: 'Série', value: `${streak}j`, color: 'text-orange-400', bg: 'bg-orange-400/10' },
            { icon: BookOpen, label: 'Cours', value: `${completedCourses}/${courses.length}`, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
            { icon: Star, label: 'Niveau', value: level.icon, color: 'text-purple-400', bg: 'bg-purple-400/10' },
          ].map(({ icon: Icon, label, value, color, bg }) => (
            <div key={label} className="glass rounded-2xl p-4 text-center card-hover">
              <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                <Icon size={18} className={color} />
              </div>
              <div className={`font-bold text-lg ${color}`}>{value}</div>
              <div className="text-white/40 text-xs">{label}</div>
            </div>
          ))}
        </div>

        {/* XP bar */}
        {level.next && (
          <div className="glass rounded-2xl p-4 mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-white/50">{level.icon} {level.name}</span>
              <span className="text-sm font-bold text-amber-400">{xp} / {level.next} XP</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="progress-bar h-full" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        )}

        {/* Word of day */}
        <WordOfDay wordOfDay={wordOfDay} />

        {/* Features grid */}
        <h2 className="text-xl font-bold text-white mb-4">Tout ce qu'il faut pour apprendre</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {features.map(({ to, emoji, title, desc, color, border, badge }) => (
            <Link
              key={to}
              to={to}
              className={`group bg-gradient-to-br ${color} ${border} border rounded-2xl p-4 card-hover`}
            >
              <div className="text-3xl mb-2">{emoji}</div>
              <div className="font-bold text-white text-sm mb-0.5">{title}</div>
              <div className="text-white/50 text-xs mb-2">{desc}</div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/40">{badge}</span>
            </Link>
          ))}
        </div>

        {/* Recent courses */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Continuer l'apprentissage</h2>
          <Link to="/cours" className="text-amber-400 text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Tout voir <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {courses.slice(0, 6).map(course => {
            const done = course.lessons.filter(l => completedLessons.includes(`${course.id}-${l.id}`)).length;
            const pct = (done / course.lessons.length) * 100;
            return (
              <Link key={course.id} to={`/cours/${course.id}`} className="glass rounded-2xl p-4 card-hover">
                <div className={`text-2xl w-10 h-10 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-3`}>
                  {course.emoji}
                </div>
                <div className="font-semibold text-white text-sm mb-0.5">{course.title}</div>
                <div className="text-amber-300/50 text-xs font-arabic mb-2">{course.titleAr}</div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="progress-bar h-full" style={{ width: `${pct}%` }} />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-white/30">{done}/{course.lessons.length}</span>
                  <span className="text-xs text-amber-400">{course.xp} XP</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Fun fact */}
        <div className="glass-gold rounded-3xl p-6 text-center mb-6">
          <div className="text-2xl mb-2">💡</div>
          <h3 className="text-amber-400 font-bold mb-2">Le saviez-vous ?</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Le Darija mélange l'arabe, le berbère (Tamazight), le français et l'espagnol. C'est la langue maternelle de 90% des Marocains, mais elle n'est pas enseignée à l'école !
          </p>
          <p className="font-arabic text-amber-300 mt-3">الدارجة لغة الحياة اليومية 🇲🇦</p>
        </div>
      </div>
    </div>
  );
}
