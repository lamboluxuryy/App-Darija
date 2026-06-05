import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Star, Flame, Trophy, Mic } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { courses } from '../data/courses';
import { dictionaryWords } from '../data/dictionary';

const features = [
  { to: '/cours', emoji: '📖', title: 'Cours', desc: '14 leçons progressives du quotidien', color: 'from-amber-800/40 to-orange-900/30', border: 'border-amber-600/20', badge: '14 cours' },
  { to: '/speaking', emoji: '🎤', title: 'Parler', desc: 'Micro + reconnaissance vocale', color: 'from-red-900/40 to-rose-900/30', border: 'border-red-600/20', badge: '48 phrases' },
  { to: '/oral', emoji: '🎙️', title: 'Écouter', desc: 'Phrases authentiques du Maroc', color: 'from-yellow-900/40 to-amber-900/30', border: 'border-yellow-600/20', badge: '8 catégories' },
  { to: '/flashcards', emoji: '🃏', title: 'Flashcards', desc: 'Mémorisez avec la répétition espacée', color: 'from-orange-900/40 to-amber-900/30', border: 'border-orange-600/20', badge: 'Spaced rep.' },
  { to: '/dialogues', emoji: '💬', title: 'Dialogues', desc: 'Scénarios réels : café, taxi, souk...', color: 'from-rose-900/40 to-red-900/30', border: 'border-rose-600/20', badge: '5 scénarios' },
  { to: '/quiz', emoji: '🧠', title: 'Quiz', desc: '20 défis gamifiés avec niveaux', color: 'from-amber-900/40 to-yellow-900/30', border: 'border-amber-600/20', badge: '20 quiz' },
  { to: '/dictionnaire', emoji: '📚', title: 'Dictionnaire', desc: `${dictionaryWords.length} mots et expressions`, color: 'from-orange-800/40 to-red-900/30', border: 'border-orange-600/20', badge: `${dictionaryWords.length} mots` },
  { to: '/grammaire', emoji: '📝', title: 'Grammaire', desc: 'Les règles essentielles expliquées', color: 'from-red-800/40 to-orange-900/30', border: 'border-red-600/20', badge: '8 règles' },
];

const steps = [
  {
    num: '1',
    emoji: '📖',
    title: 'Apprenez les règles',
    desc: 'Commencez par les bases : salutations, famille, marché, émotions. Chaque leçon vous rapproche du Maroc authentique.',
    to: '/cours',
    color: 'border-amber-500/40',
    glow: 'rgba(212,140,0,0.15)',
  },
  {
    num: '2',
    emoji: '🎤',
    title: 'Jouez le match',
    desc: 'Parlez avec le micro, répétez les phrases clés, entraînez-vous avec les flashcards et les dialogues réels.',
    to: '/pratiquer',
    color: 'border-orange-500/40',
    glow: 'rgba(200,80,0,0.15)',
  },
  {
    num: '3',
    emoji: '🚀',
    title: 'Commencez aujourd\'hui',
    desc: 'Testez-vous avec 20 quiz, débloquez des achievements et atteignez le niveau Expert Darija pas à pas.',
    to: '/quiz',
    color: 'border-red-500/40',
    glow: 'rgba(180,30,0,0.15)',
  },
];

const testimonials = [
  { name: 'Amira K.', flag: '🇫🇷', text: 'Au souk de Marrakech j\'ai pu négocier et discuter avec les vendeurs. Ils étaient impressionnés ! La méthode est vraiment efficace.', stars: 5 },
  { name: 'Lucas M.', flag: '🇧🇪', text: 'La section "Parler" avec le micro a tout changé. Je pratique ma prononciation tous les jours, même sans être au Maroc.', stars: 5 },
  { name: 'Nadia R.', flag: '🇨🇦', text: 'Mes grands-parents marocains n\'en reviennent pas que je comprenne leurs conversations. Les dialogues m\'ont transformée.', stars: 5 },
];

const proofBadges = [
  { icon: '⭐', value: '4.9/5', label: 'Satisfaction' },
  { icon: '🇲🇦', value: '100%', label: 'Authentique' },
  { icon: '🎓', value: '14', label: 'Cours' },
  { icon: '🆓', value: 'Gratuit', label: 'Pour toujours' },
];

function MoroccanArch({ side = 'left' }) {
  return (
    <svg
      viewBox="0 0 120 220"
      className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0 scale-x-[-1]'} h-full opacity-10 hidden lg:block`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 200 L10 200 L10 100 Q10 30 60 30 Q110 30 110 100 L110 200 L60 200"
        stroke="url(#archGold)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M60 185 L25 185 L25 105 Q25 50 60 50 Q95 50 95 105 L95 185"
        stroke="url(#archGold)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Zellige diamonds */}
      {[80,110,140,170].map(y => (
        <g key={y}>
          <rect x="54" y={y-6} width="12" height="12" transform={`rotate(45 60 ${y})`}
            fill="url(#archGold)" fillOpacity="0.3"/>
        </g>
      ))}
      <defs>
        <linearGradient id="archGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37"/>
          <stop offset="50%" stopColor="#FF8C00"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

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
    <div className="glass-gold rounded-3xl p-6 mb-8 relative overflow-hidden border border-amber-600/20">
      <div className="absolute inset-0 moroccan-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full -translate-y-16 translate-x-16" />
      <div className="relative">
        <div className="flex items-center gap-2 text-amber-400/70 text-xs uppercase tracking-widest mb-3">
          <span>✨</span> Mot du jour
        </div>
        <div className="flex items-start justify-between">
          <div>
            <div className="font-arabic text-3xl text-white mb-1">{wordOfDay.darija}</div>
            <div className="text-amber-400 font-semibold text-xl">{wordOfDay.romanization}</div>
            <div className="text-white/60 mt-1">{wordOfDay.translation}</div>
            {wordOfDay.example && (
              <div className="text-white/35 text-sm mt-2 italic">"{wordOfDay.example}"</div>
            )}
          </div>
          <button
            onClick={() => speak(wordOfDay.darija)}
            className="w-13 h-13 w-12 h-12 rounded-2xl bg-amber-400/15 flex items-center justify-center text-amber-400 hover:bg-amber-400/25 transition-all flex-shrink-0 ml-4 text-xl"
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
  const isNewUser = xp === 0 && completedLessons.length === 0;

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (!wordOfDay || wordOfDay.date !== today) {
      const idx = new Date().getDate() % dictionaryWords.length;
      setWordOfDay({ ...dictionaryWords[idx], date: today });
    }
  }, []);

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-20 lg:pt-16">

      {/* ════════════════════════════════════════
          HERO — Riad Interior Atmosphere
      ════════════════════════════════════════ */}
      <div className="relative overflow-hidden min-h-[88vh] flex items-center">
        {/* Warm atmospheric layers */}
        <div className="absolute inset-0">
          {/* Riad warm light — central golden glow */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 70% 80% at 50% 30%, rgba(180,90,0,0.35) 0%, rgba(120,40,0,0.2) 40%, transparent 70%)'
          }}/>
          {/* Zellige floor reflection */}
          <div className="absolute bottom-0 inset-x-0 h-1/3" style={{
            background: 'linear-gradient(0deg, rgba(180,60,0,0.15) 0%, transparent 100%)'
          }}/>
          <div className="absolute inset-0 moroccan-arch-bg opacity-40" />
          <div className="absolute inset-0 moroccan-pattern opacity-25" />
        </div>

        {/* Decorative arches */}
        <MoroccanArch side="left" />
        <MoroccanArch side="right" />

        <div className="relative w-full px-4 py-20 md:py-28 text-center max-w-4xl mx-auto">

          {/* Flag badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-gold text-amber-400 text-sm font-semibold mb-8 shadow-lg shadow-amber-900/30">
            <span className="text-lg">🇲🇦</span>
            {userProfile?.name
              ? `مرحبا ${userProfile.name} — Bon retour !`
              : 'La langue du cœur du Maroc'}
          </div>

          {/* Main headline — inspired by "avec Amour et Confiance" */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-5 leading-tight">
            Parlez le{' '}
            <span className="gradient-text italic">Darija</span>
            <br />
            <span className="text-4xl md:text-6xl">avec Amour et Confiance</span>
          </h1>

          {/* Arabic subtitle */}
          <p className="font-arabic text-2xl md:text-3xl text-amber-300/80 mb-3 tracking-wide">
            تكلّم الدارجة بالحب والثقة 🤍
          </p>

          {/* Moroccan divider */}
          <div className="moroccan-divider max-w-xs mx-auto my-6" />

          <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Cours progressifs, pratique vocale avec le micro, dialogues authentiques et 20 quiz gamifiés — tout ce qu'il faut pour parler la vraie langue du Maroc.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cours"
              className="btn-shine flex items-center gap-3 px-9 py-4 rounded-2xl text-black font-bold text-lg shadow-2xl hover:scale-105 transition-all"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #FF8C00, #C0392B)' }}
            >
              <BookOpen size={22} />
              {isNewUser ? 'Commencer gratuitement' : 'Continuer les cours'}
            </Link>
            <Link
              to="/speaking"
              className="flex items-center gap-3 px-9 py-4 rounded-2xl glass-warm border border-orange-600/30 text-orange-300 font-semibold text-lg hover:border-amber-400/50 hover:text-amber-300 transition-all hover:scale-105"
            >
              <Mic size={22} />
              Pratiquer la prononciation
            </Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          SOCIAL PROOF BAR
      ════════════════════════════════════════ */}
      <div className="px-4 -mt-6 mb-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl border border-amber-700/20 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-amber-700/15">
              {proofBadges.map(b => (
                <div key={b.label} className="py-4 px-5 text-center">
                  <div className="text-xl mb-0.5">{b.icon}</div>
                  <div className="font-bold text-xl gradient-text">{b.value}</div>
                  <div className="text-white/40 text-xs">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 max-w-4xl mx-auto">

        {/* ════════════════════════════════════════
            MON AVANCEMENT (utilisateurs actifs)
        ════════════════════════════════════════ */}
        {!isNewUser && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Trophy size={18} className="text-amber-400" /> Mon avancement
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { icon: Trophy, label: 'XP Total', value: xp, color: 'text-amber-400', bg: 'bg-amber-400/10' },
                { icon: Flame, label: 'Série', value: `${streak} j`, color: 'text-orange-400', bg: 'bg-orange-400/10' },
                { icon: BookOpen, label: 'Cours', value: `${completedCourses}/${courses.length}`, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
                { icon: Star, label: 'Niveau', value: level.icon, color: 'text-red-400', bg: 'bg-red-400/10' },
              ].map(({ icon: Icon, label, value, color, bg }) => (
                <div key={label} className="glass rounded-2xl p-4 text-center card-hover border border-amber-700/10">
                  <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div className={`font-bold text-lg ${color}`}>{value}</div>
                  <div className="text-white/40 text-xs">{label}</div>
                </div>
              ))}
            </div>
            {level.next && (
              <div className="glass rounded-2xl p-4 border border-amber-700/10">
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

        {/* ════════════════════════════════════════
            MOT DU JOUR
        ════════════════════════════════════════ */}
        <WordOfDay wordOfDay={wordOfDay} />

        {/* ════════════════════════════════════════
            MÉTHODE EN 3 ÉTAPES
            (inspiré de leur "Apprenez les règles → Jouez le match → Commencez")
        ════════════════════════════════════════ */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <p className="text-amber-500/80 text-xs uppercase tracking-widest mb-2">Notre méthode</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white">
              Passez de la théorie à la <span className="gradient-text italic">pratique</span>
            </h2>
            <div className="moroccan-divider max-w-48 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <Link
                key={i}
                to={s.to}
                className={`group relative rounded-3xl p-7 card-hover border ${s.color} overflow-hidden`}
                style={{ background: `radial-gradient(ellipse 120% 100% at 0% 0%, ${s.glow}, rgba(255,130,0,0.04))` }}
              >
                <div className="absolute inset-0 moroccan-pattern opacity-15" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-black text-sm"
                      style={{ background: 'linear-gradient(135deg, #D4AF37, #FF8C00)' }}>
                      {s.num}
                    </div>
                    <span className="text-2xl">{s.emoji}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-5 text-xs font-semibold text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Commencer <ChevronRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════
            TÉMOIGNAGES
        ════════════════════════════════════════ */}
        <div className="mb-14">
          <div className="text-center mb-7">
            <p className="text-amber-500/80 text-xs uppercase tracking-widest mb-2">Ils apprennent le Darija</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Ce qu'ils en disent</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="glass rounded-3xl p-6 card-hover border border-amber-700/15 relative overflow-hidden">
                <div className="absolute inset-0 moroccan-pattern opacity-10" />
                <div className="relative">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({length: t.stars}).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{t.flag}</span>
                    <span className="text-white font-semibold text-sm">{t.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════
            FONCTIONNALITÉS
        ════════════════════════════════════════ */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">Tout l'arsenal pour apprendre</h2>
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
                <span className="text-xs px-2 py-0.5 rounded-full bg-black/20 text-amber-400/70">{badge}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════════
            CONTINUER LES COURS
        ════════════════════════════════════════ */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl font-bold text-white">
            {isNewUser ? 'Par où commencer ?' : 'Continuer l\'apprentissage'}
          </h2>
          <Link to="/cours" className="text-amber-400 text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Tout voir <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {courses.slice(0, 6).map(course => {
            const done = course.lessons.filter(l => completedLessons.includes(`${course.id}-${l.id}`)).length;
            const pct = (done / course.lessons.length) * 100;
            return (
              <Link key={course.id} to={`/cours/${course.id}`}
                className="glass rounded-2xl p-4 card-hover border border-amber-700/10 hover:border-amber-600/30">
                <div className={`text-2xl w-10 h-10 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-3`}>
                  {course.emoji}
                </div>
                <div className="font-semibold text-white text-sm mb-0.5">{course.title}</div>
                <div className="text-amber-400/40 text-xs font-arabic mb-2">{course.titleAr}</div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-1">
                  <div className="progress-bar h-full" style={{ width: `${pct}%` }} />
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-white/30">{done}/{course.lessons.length}</span>
                  <span className="text-xs text-amber-400">{course.xp} XP</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ════════════════════════════════════════
            LE SAVIEZ-VOUS — Section culturelle
        ════════════════════════════════════════ */}
        <div className="rounded-3xl p-7 text-center mb-8 relative overflow-hidden border border-amber-700/20"
          style={{ background: 'linear-gradient(135deg, rgba(180,60,0,0.25), rgba(212,140,0,0.18), rgba(150,20,0,0.2))' }}>
          <div className="absolute inset-0 moroccan-pattern opacity-30" />
          <div className="relative">
            <div className="text-3xl mb-3">🏛️</div>
            <h3 className="font-display text-amber-400 font-bold text-xl mb-3">Le saviez-vous ?</h3>
            <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Le Darija est un mélange unique d'<strong className="text-white/90">arabe, de berbère (Tamazight), de français et d'espagnol</strong>.
              C'est la langue maternelle de <strong className="text-white/90">90 % des Marocains</strong>, mais elle n'est
              pas enseignée à l'école — ce qui la rend vivante, riche et fascinante.
            </p>
            <p className="font-arabic text-amber-400 text-2xl mt-5">الدارجة لغة الحياة اليومية 🇲🇦</p>
          </div>
        </div>

        {/* ════════════════════════════════════════
            CTA FINAL (nouveaux utilisateurs)
        ════════════════════════════════════════ */}
        {isNewUser && (
          <div className="text-center mb-6">
            <p className="text-white/40 text-sm mb-4">Prêt à vous lancer ? C'est 100% gratuit.</p>
            <Link
              to="/cours"
              className="btn-shine inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl text-black font-bold text-lg shadow-2xl hover:scale-105 transition-all"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #FF8C00)' }}
            >
              <BookOpen size={22} /> Commencer maintenant →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
