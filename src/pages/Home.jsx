import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mic, Trophy, Flame, Star, ChevronRight, Zap, Radio } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { courses } from '../data/courses';
import { dictionaryWords } from '../data/dictionary';
import { quizzes } from '../data/quizzes';

const features = [
  { to: '/cours', emoji: '📖', title: 'Cours', desc: '14 cours progressifs', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/30', badge: `${courses.length} cours` },
  { to: '/speaking', emoji: '🎤', title: 'Parler', desc: 'Entraînez votre prononciation', color: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/30', badge: '48 phrases' },
  { to: '/oral', emoji: '🎙️', title: 'Oral', desc: 'Écoutez & répétez', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-500/30', badge: '8 catégories' },
  { to: '/flashcards', emoji: '🃏', title: 'Flashcards', desc: 'Révision intelligente', color: 'from-purple-500/20 to-violet-500/20', border: 'border-purple-500/30', badge: 'Spaced rep.' },
  { to: '/dialogues', emoji: '💬', title: 'Dialogues', desc: 'Conversations réelles', color: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/30', badge: '5 scénarios' },
  { to: '/quiz', emoji: '🧠', title: 'Quiz', desc: '20 quiz gamifiés', color: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-500/30', badge: '20 quiz' },
  { to: '/dictionnaire', emoji: '📚', title: 'Dictionnaire', desc: `${dictionaryWords.length} mots`, color: 'from-teal-500/20 to-cyan-500/20', border: 'border-teal-500/30', badge: `${dictionaryWords.length} mots` },
  { to: '/grammaire', emoji: '📝', title: 'Grammaire', desc: 'Règles essentielles', color: 'from-indigo-500/20 to-violet-500/20', border: 'border-indigo-500/30', badge: '8 règles' },
];

const steps = [
  {
    number: '01',
    emoji: '📖',
    title: 'Apprenez les bases',
    desc: 'Commencez par les cours progressifs : salutations, chiffres, marché, famille… chaque leçon vous rapproche du Maroc.',
    color: 'from-emerald-500 to-teal-500',
    link: '/cours',
  },
  {
    number: '02',
    emoji: '🎤',
    title: 'Parlez & écoutez',
    desc: 'Pratiquez la prononciation avec le micro, écoutez des phrases authentiques et mémorisez avec les flashcards.',
    color: 'from-amber-500 to-orange-500',
    link: '/pratiquer',
  },
  {
    number: '03',
    emoji: '🧠',
    title: 'Testez-vous',
    desc: 'Consolidez vos acquis avec 20 quiz gamifiés, des associations de paires et des défis de remise en ordre.',
    color: 'from-purple-500 to-violet-500',
    link: '/quiz',
  },
];

const testimonials = [
  {
    name: 'Amira K.',
    flag: '🇫🇷',
    text: 'Grâce à cette app, j\'ai réussi à commander mon thé et à discuter avec les vendeurs au souk de Marrakech. Incroyable !',
    stars: 5,
    level: 'Intermédiaire',
  },
  {
    name: 'Lucas M.',
    flag: '🇧🇪',
    text: 'La section "Parler" avec le micro est géniale. Je peux enfin travailler ma prononciation seul chez moi avant mon voyage.',
    stars: 5,
    level: 'Débutant',
  },
  {
    name: 'Nadia R.',
    flag: '🇨🇦',
    text: 'Mes grands-parents marocains sont surpris que je comprenne leurs conversations. Les dialogues m\'ont vraiment aidée !',
    stars: 5,
    level: 'Avancé',
  },
];

const globalStats = [
  { value: '48', label: 'phrases pratiques', emoji: '🎙️' },
  { value: '20', label: 'quiz & défis', emoji: '🧠' },
  { value: '122', label: 'mots de vocabulaire', emoji: '📚' },
  { value: '100%', label: 'gratuit', emoji: '🎁' },
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
  const { xp, streak, completedLessons, getLevel, wordOfDay, setWordOfDay, userProfile } = useApp();
  const level = getLevel();
  const progressPercent = level.next
    ? Math.min(((xp - (level.prev || 0)) / (level.next - (level.prev || 0))) * 100, 100)
    : 100;

  const completedCourses = courses.filter(c =>
    c.lessons.every(l => completedLessons.includes(`${c.id}-${l.id}`))
  ).length;

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (!wordOfDay || wordOfDay.date !== today) {
      const idx = new Date().getDate() % dictionaryWords.length;
      setWordOfDay({ ...dictionaryWords[idx], date: today });
    }
  }, []);

  const isNewUser = xp === 0 && completedLessons.length === 0;

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-20 lg:pt-16">

      {/* ── HERO ── */}
      <div className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 moroccan-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/8 rounded-full blur-3xl translate-y-16" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative px-4 py-12 md:py-20 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-amber-400 text-sm font-semibold mb-6 shadow-lg shadow-amber-500/10">
            <span>🇲🇦</span>
            {userProfile?.name ? `Bon retour, ${userProfile.name} !` : 'La langue du cœur marocain'}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Parlez Darija avec{' '}
            <span className="gradient-text">Confiance</span>
          </h1>

          {/* Arabic subtitle */}
          <p className="font-arabic text-2xl text-amber-300/80 mb-3 tracking-wide">
            تكلّم الدارجة بثقة وحب 🤍
          </p>

          <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Cours progressifs, pratique orale avec le micro, dialogues authentiques, quiz gamifiés — tout pour parler la vraie langue du Maroc.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cours"
              className="btn-shine flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-base shadow-xl shadow-amber-500/40 hover:scale-105 transition-all"
            >
              <BookOpen size={20} />
              {isNewUser ? 'Commencer gratuitement' : 'Continuer les cours'}
            </Link>
            <Link
              to="/speaking"
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl glass border border-white/20 text-white font-semibold hover:border-amber-400/50 transition-all hover:scale-105"
            >
              <Radio size={20} className="text-amber-400" />
              Pratiquer la prononciation
            </Link>
          </div>
        </div>
      </div>

      {/* ── GLOBAL STATS BANNER ── */}
      <div className="px-4 mb-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {globalStats.map(s => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center border border-white/5 card-hover">
                <div className="text-2xl mb-1">{s.emoji}</div>
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 max-w-4xl mx-auto">

        {/* ── MY PROGRESS (shown when user has activity) ── */}
        {!isNewUser && (
          <div className="mb-10">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Trophy size={18} className="text-amber-400" /> Ma progression
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
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
            {level.next && (
              <div className="glass rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/50">{level.icon} {level.name}</span>
                  <span className="text-sm font-bold text-amber-400">{xp} / {level.next} XP</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="progress-bar h-full" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── MOT DU JOUR ── */}
        <WordOfDay wordOfDay={wordOfDay} />

        {/* ── MÉTHODE EN 3 ÉTAPES ── */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-amber-400/70 text-xs uppercase tracking-widest mb-3">
              <span>⚡</span> Notre méthode
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Apprenez le Darija en <span className="gradient-text">3 étapes</span>
            </h2>
            <p className="text-white/40 text-sm mt-2 max-w-md mx-auto">
              Une progression naturelle, de la compréhension à la conversation fluide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <Link
                key={i}
                to={step.link}
                className="group relative glass rounded-3xl p-6 card-hover border border-white/5 hover:border-white/15 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 bg-gradient-to-br" style={{background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent)'}} />
                <div className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3 tracking-widest`}>
                  ÉTAPE {step.number}
                </div>
                <div className="text-4xl mb-3">{step.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                <div className={`mt-4 text-xs font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  Commencer <ChevronRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── TÉMOIGNAGES ── */}
        <div className="mb-12">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-2 text-amber-400/70 text-xs uppercase tracking-widest mb-3">
              <span>💬</span> Ils apprennent le Darija
            </div>
            <h2 className="text-2xl font-bold text-white">Ce qu'ils en disent</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="glass rounded-3xl p-5 border border-white/5 card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/3 rounded-full -translate-y-8 translate-x-8" />
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{t.flag}</span>
                    <span className="text-white font-semibold text-sm">{t.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${
                    t.level === 'Débutant' ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' :
                    t.level === 'Intermédiaire' ? 'text-amber-400 border-amber-400/30 bg-amber-400/10' :
                    'text-rose-400 border-rose-400/30 bg-rose-400/10'
                  }`}>{t.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TOUTES LES FONCTIONNALITÉS ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-white">Tout l'arsenal pour apprendre</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {features.map(({ to, emoji, title, desc, color, border, badge }) => (
              <Link
                key={to}
                to={to}
                className={`group bg-gradient-to-br ${color} ${border} border rounded-2xl p-4 card-hover`}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{emoji}</div>
                <div className="font-bold text-white text-sm mb-0.5">{title}</div>
                <div className="text-white/50 text-xs mb-2">{desc}</div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/40">{badge}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CONTINUER LES COURS ── */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">
            {isNewUser ? 'Commencer par ici' : 'Continuer l\'apprentissage'}
          </h2>
          <Link to="/cours" className="text-amber-400 text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Tout voir <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {courses.slice(0, 6).map(course => {
            const done = course.lessons.filter(l => completedLessons.includes(`${course.id}-${l.id}`)).length;
            const pct = (done / course.lessons.length) * 100;
            return (
              <Link key={course.id} to={`/cours/${course.id}`} className="glass rounded-2xl p-4 card-hover border border-white/5 hover:border-white/10">
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

        {/* ── LE SAVIEZ-VOUS ── */}
        <div className="glass-gold rounded-3xl p-7 text-center mb-6 relative overflow-hidden">
          <div className="absolute inset-0 moroccan-pattern opacity-20" />
          <div className="relative">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-amber-400 font-bold text-lg mb-2">Le saviez-vous ?</h3>
            <p className="text-white/65 text-sm leading-relaxed max-w-lg mx-auto">
              Le Darija mélange l'arabe, le berbère (Tamazight), le français et l'espagnol. C'est la langue maternelle de <strong className="text-white/90">90% des Marocains</strong>, mais elle n'est pas enseignée à l'école !
            </p>
            <p className="font-arabic text-amber-300 text-xl mt-4">الدارجة لغة الحياة اليومية 🇲🇦</p>
          </div>
        </div>

        {/* ── CALL TO ACTION FINAL ── */}
        {isNewUser && (
          <div className="rounded-3xl p-8 text-center mb-6 relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(180,50,0,0.25), rgba(212,140,0,0.2), rgba(80,0,160,0.2))'}}>
            <div className="absolute inset-0 moroccan-pattern opacity-20" />
            <div className="relative">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-white font-bold text-2xl mb-2">Prêt à vous lancer ?</h3>
              <p className="text-white/55 text-sm mb-6 max-w-sm mx-auto">
                Rejoignez des milliers d'apprenants et découvrez la beauté du Darija marocain dès aujourd'hui.
              </p>
              <Link
                to="/cours"
                className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-base shadow-xl shadow-amber-500/30 hover:scale-105 transition-all"
              >
                <BookOpen size={20} /> Commencer gratuitement
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
