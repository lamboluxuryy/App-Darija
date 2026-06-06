import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, Lock, BookOpen, HelpCircle, Clock, Star,
  ChevronDown, ChevronUp, Trophy, Calendar, Flame, Zap
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { courses } from '../data/courses';

// ---------------------------------------------------------------------------
// Programme data — 4 weeks × 7 days
// ---------------------------------------------------------------------------

const weeks = [
  {
    week: 1,
    title: 'Les Bases',
    subtitle: 'Salutations, chiffres, famille, couleurs',
    emoji: '🌱',
    color: 'from-emerald-800/40 to-green-900/30',
    border: 'border-emerald-600/25',
    headerGradient: 'from-emerald-500 to-teal-600',
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-500/20 border-emerald-500/40',
    totalXp: 460,
    days: [
      { day: 1,  title: 'Les Salutations',      emoji: '👋', courseId: 1,    quizId: 1,    duration: '20 min', xp: 60,  isReview: false },
      { day: 2,  title: 'Les Chiffres 1-10',     emoji: '🔢', courseId: 2,    quizId: 2,    duration: '20 min', xp: 60,  isReview: false },
      { day: 3,  title: 'La Famille',             emoji: '👨‍👩‍👧‍👦', courseId: 4,    quizId: 4,    duration: '20 min', xp: 60,  isReview: false },
      { day: 4,  title: 'Les Couleurs',           emoji: '🎨', courseId: 15,   quizId: null, duration: '25 min', xp: 65,  isReview: false },
      { day: 5,  title: 'Les Vêtements',          emoji: '👗', courseId: 16,   quizId: null, duration: '25 min', xp: 65,  isReview: false },
      { day: 6,  title: 'Les Chiffres Avancés',   emoji: '📊', courseId: 20,   quizId: null, duration: '25 min', xp: 70,  isReview: false },
      { day: 7,  title: 'Grand Quiz Semaine 1',   emoji: '🎯', courseId: null, quizId: null, duration: '30 min', xp: 80,  isReview: true  },
    ],
  },
  {
    week: 2,
    title: 'Vie Quotidienne',
    subtitle: 'Marché, nourriture, maison, religion',
    emoji: '🏡',
    color: 'from-amber-800/40 to-orange-900/30',
    border: 'border-amber-600/25',
    headerGradient: 'from-amber-500 to-orange-600',
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-500/20 border-amber-500/40',
    totalXp: 465,
    days: [
      { day: 8,  title: 'Au Marché',               emoji: '🛒', courseId: 3,    quizId: 3,    duration: '20 min', xp: 60,  isReview: false },
      { day: 9,  title: 'La Nourriture',            emoji: '🍽️', courseId: 5,    quizId: 5,    duration: '20 min', xp: 65,  isReview: false },
      { day: 10, title: 'Fruits & Légumes',         emoji: '🥦', courseId: 17,   quizId: null, duration: '25 min', xp: 65,  isReview: false },
      { day: 11, title: 'La Maison',                emoji: '🏠', courseId: 12,   quizId: 11,   duration: '20 min', xp: 60,  isReview: false },
      { day: 12, title: 'Expressions du Quotidien', emoji: '💬', courseId: 6,    quizId: 4,    duration: '20 min', xp: 60,  isReview: false },
      { day: 13, title: 'Religion & Expressions',   emoji: '🕌', courseId: null, quizId: null, duration: '25 min', xp: 70,  isReview: false },
      { day: 14, title: 'Grand Quiz Semaine 2',     emoji: '🎯', courseId: null, quizId: null, duration: '30 min', xp: 85,  isReview: true  },
    ],
  },
  {
    week: 3,
    title: 'En Ville & Interaction',
    subtitle: 'Directions, transports, ville, école, métiers',
    emoji: '🏙️',
    color: 'from-blue-800/40 to-cyan-900/30',
    border: 'border-blue-600/25',
    headerGradient: 'from-blue-500 to-cyan-600',
    accentColor: 'text-blue-400',
    accentBg: 'bg-blue-500/20 border-blue-500/40',
    totalXp: 450,
    days: [
      { day: 15, title: 'Les Directions',         emoji: '🗺️', courseId: 7,    quizId: 7,    duration: '20 min', xp: 65,  isReview: false },
      { day: 16, title: 'Les Transports',          emoji: '🚌', courseId: 13,   quizId: 12,   duration: '20 min', xp: 65,  isReview: false },
      { day: 17, title: 'La Ville & Les Lieux',   emoji: '🏛️', courseId: null, quizId: null, duration: '25 min', xp: 70,  isReview: false },
      { day: 18, title: 'Les Sports & Loisirs',   emoji: '⚽', courseId: null, quizId: null, duration: '25 min', xp: 65,  isReview: false },
      { day: 19, title: "L'École & Les Études",   emoji: '📚', courseId: null, quizId: null, duration: '25 min', xp: 65,  isReview: false },
      { day: 20, title: 'Les Métiers',             emoji: '💼', courseId: null, quizId: null, duration: '25 min', xp: 70,  isReview: false },
      { day: 21, title: 'Grand Quiz Semaine 3',   emoji: '🎯', courseId: null, quizId: null, duration: '30 min', xp: 90,  isReview: true  },
    ],
  },
  {
    week: 4,
    title: 'Maîtrise',
    subtitle: 'Verbes, conjugaison, corps, nature, slang',
    emoji: '🏆',
    color: 'from-purple-800/40 to-violet-900/30',
    border: 'border-purple-600/25',
    headerGradient: 'from-purple-500 to-violet-600',
    accentColor: 'text-purple-400',
    accentBg: 'bg-purple-500/20 border-purple-500/40',
    totalXp: 650,
    days: [
      { day: 22, title: 'Les Verbes Essentiels',    emoji: '⚡', courseId: 18,   quizId: null, duration: '30 min', xp: 80,   isReview: false },
      { day: 23, title: 'La Conjugaison',            emoji: '📝', courseId: null, quizId: null, duration: '35 min', xp: 100,  isReview: false },
      { day: 24, title: 'Corps & Santé',             emoji: '🩺', courseId: null, quizId: 10,   duration: '30 min', xp: 85,   isReview: false },
      { day: 25, title: 'La Nature & Paysages',      emoji: '🌿', courseId: null, quizId: null, duration: '25 min', xp: 70,   isReview: false },
      { day: 26, title: 'Slang & Darija des Jeunes', emoji: '🔥', courseId: 19,   quizId: null, duration: '25 min', xp: 90,   isReview: false },
      { day: 27, title: 'Culture Marocaine',         emoji: '🇲🇦', courseId: null, quizId: null, duration: '30 min', xp: 75,   isReview: false },
      { day: 28, title: 'Grand Quiz Final du Mois',  emoji: '👑', courseId: null, quizId: null, duration: '40 min', xp: 150,  isReview: true, isFinalDay: true },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * A day is "done" when:
 *   - If it has a courseId: ALL lessons of that course are completed
 *   - If it has a quizId:   that quiz is completed
 *   - If it has neither:    we cannot verify completion → treated as not done
 * When a day has a courseId but no quizId (or vice-versa), only the
 * available item needs to be completed.
 */
function isDayDone(day, completedLessons, completedQuizzes) {
  const course = day.courseId ? courses.find(c => c.id === day.courseId) : null;

  const courseOk = course
    ? course.lessons.every(l => completedLessons.includes(`${course.id}-${l.id}`))
    : true; // no course required — pass automatically

  const quizOk = day.quizId
    ? completedQuizzes.some(q => q.id === day.quizId)
    : true; // no quiz required — pass automatically

  // If BOTH are null, the day has nothing to track → not done
  if (!day.courseId && !day.quizId) return false;

  return courseOk && quizOk;
}

/**
 * Return the status of a day: 'done' | 'available' | 'locked'
 * Day 1 is always available.
 * Any subsequent day is available when the previous day is done.
 */
function getDayStatus(dayIndex, allDays, completedLessons, completedQuizzes) {
  if (dayIndex === 0) return 'available';
  const prev = allDays[dayIndex - 1];
  const prevDone = isDayDone(prev, completedLessons, completedQuizzes);
  if (prevDone) return 'available';
  return 'locked';
}

// ---------------------------------------------------------------------------
// DayCard
// ---------------------------------------------------------------------------

function DayCard({ day, status, weekAccent, weekAccentBg, globalDayIndex }) {
  const course = day.courseId ? courses.find(c => c.id === day.courseId) : null;
  const isDone = status === 'done';
  const isLocked = status === 'locked';
  const isFinalDay = !!day.isFinalDay;

  const cardBase = `relative rounded-2xl p-4 border transition-all duration-200 ${
    isLocked ? 'opacity-50 cursor-not-allowed' : 'card-hover'
  }`;

  const cardBg = isDone
    ? 'bg-emerald-900/20 border-emerald-600/30'
    : isLocked
    ? 'bg-white/3 border-white/8'
    : day.isReview
    ? isFinalDay
      ? 'bg-gradient-to-br from-yellow-900/30 to-amber-900/20 border-yellow-500/40'
      : 'bg-gradient-to-br from-amber-900/20 to-orange-900/15 border-amber-600/30'
    : 'glass border-white/10';

  return (
    <div className={`${cardBase} ${cardBg}`}>
      {/* Moroccan pattern overlay on review days */}
      {(day.isReview) && !isLocked && (
        <div className="absolute inset-0 moroccan-pattern opacity-10 rounded-2xl" />
      )}

      <div className="relative">
        {/* Top row: day number + status icon + title */}
        <div className="flex items-start gap-3 mb-3">
          {/* Day badge */}
          <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold shadow-md ${
            isDone
              ? 'bg-emerald-500/30 text-emerald-300'
              : isLocked
              ? 'bg-white/8 text-white/30'
              : isFinalDay
              ? 'text-black'
              : day.isReview
              ? 'bg-amber-500/20 text-amber-300'
              : `bg-white/10 ${weekAccent}`
          }`}
            style={(!isDone && !isLocked && isFinalDay) ? { background: 'linear-gradient(135deg, #D4AF37, #FF8C00)' } : {}}
          >
            {isDone ? (
              <CheckCircle size={16} className="text-emerald-400" />
            ) : isLocked ? (
              <Lock size={14} className="text-white/30" />
            ) : (
              <span>{globalDayIndex}</span>
            )}
          </div>

          {/* Title block */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-base">{day.emoji}</span>
              <h4 className={`font-semibold text-sm leading-tight ${
                isLocked ? 'text-white/30' : isDone ? 'text-emerald-300' : 'text-white'
              }`}>
                {day.title}
              </h4>
              {day.isReview && !isFinalDay && (
                <span className="text-xs px-1.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                  Révision
                </span>
              )}
              {isFinalDay && (
                <span className="text-xs px-1.5 py-0.5 rounded-lg font-bold text-black"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #FF8C00)' }}>
                  FINAL
                </span>
              )}
            </div>
            {/* Meta row */}
            <div className="flex items-center gap-2 mt-1">
              <span className={`flex items-center gap-1 text-xs ${isLocked ? 'text-white/20' : 'text-white/40'}`}>
                <Clock size={10} /> {day.duration}
              </span>
              <span className={`flex items-center gap-1 text-xs font-semibold ${
                isLocked ? 'text-white/20' : isFinalDay ? 'text-yellow-400' : day.isReview ? 'text-amber-400' : weekAccent
              }`}>
                <Star size={10} /> +{day.xp} XP
              </span>
            </div>
          </div>
        </div>

        {/* Action buttons — hidden when locked */}
        {!isLocked && (
          <div className="flex gap-1.5 flex-wrap">
            {/* Course button */}
            {course ? (
              <Link
                to={`/cours/${day.courseId}`}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all glass border ${
                  isDone
                    ? 'border-emerald-600/30 text-emerald-300/80 hover:border-emerald-500/50'
                    : 'border-white/15 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                <BookOpen size={11} />
                <span className="truncate max-w-[100px]">{course.title}</span>
              </Link>
            ) : day.courseId ? (
              /* courseId exists but not in data yet */
              <Link
                to="/cours"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium glass border border-white/10 text-white/40 hover:text-white/60 transition-all"
              >
                <BookOpen size={11} /> Cours à venir
              </Link>
            ) : day.isReview ? (
              /* Pure review day */
              <Link
                to="/cours"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium glass border border-amber-700/25 text-amber-300/70 hover:border-amber-600/40 transition-all"
              >
                <BookOpen size={11} /> Réviser les cours
              </Link>
            ) : null}

            {/* Quiz button */}
            {day.quizId ? (
              <Link
                to="/quiz"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all glass border ${
                  isDone
                    ? 'border-emerald-600/30 text-emerald-300/80 hover:border-emerald-500/50'
                    : isFinalDay
                    ? 'border-yellow-600/40 text-yellow-300 hover:border-yellow-500/60'
                    : day.isReview
                    ? 'border-amber-600/30 text-amber-300 hover:border-amber-500/50'
                    : 'border-white/15 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                <HelpCircle size={11} /> Quiz {day.quizId}
              </Link>
            ) : (
              /* No specific quiz ID — generic quiz link */
              <Link
                to="/quiz"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all glass border ${
                  isDone
                    ? 'border-emerald-600/30 text-emerald-300/80 hover:border-emerald-500/50'
                    : isFinalDay
                    ? 'border-yellow-600/40 text-yellow-300 hover:border-yellow-500/60'
                    : day.isReview
                    ? 'border-amber-600/30 text-amber-300 hover:border-amber-500/50'
                    : 'border-white/15 text-white/70 hover:border-white/30 hover:text-white'
                }`}
              >
                <HelpCircle size={11} /> Quiz
              </Link>
            )}
          </div>
        )}

        {/* Done overlay message */}
        {isDone && (
          <div className="mt-2 flex items-center gap-1 text-xs text-emerald-400/80">
            <CheckCircle size={11} />
            <span>Complété !</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// WeekSection
// ---------------------------------------------------------------------------

function WeekSection({ weekData, completedLessons, completedQuizzes, isOpen, onToggle }) {
  const allDays = weekData.days;

  // Compute statuses for all days in this week
  const statuses = allDays.map((day, i) => {
    const done = isDayDone(day, completedLessons, completedQuizzes);
    if (done) return 'done';
    return getDayStatus(i, allDays, completedLessons, completedQuizzes);
  });

  const doneDays = statuses.filter(s => s === 'done').length;
  const weekProgress = Math.round((doneDays / 7) * 100);
  const isWeekComplete = doneDays === 7;

  return (
    <div className={`rounded-3xl border overflow-hidden transition-all duration-300 ${weekData.border} bg-gradient-to-br ${weekData.color}`}>
      {/* Moroccan pattern background */}
      <div className="absolute inset-0 moroccan-pattern opacity-10 pointer-events-none" />

      {/* Week header — always visible, clickable */}
      <button
        onClick={onToggle}
        className="relative w-full text-left p-5 flex items-center gap-4 hover:bg-white/3 transition-colors"
      >
        {/* Week number badge */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-black text-lg shadow-lg"
          style={{ background: `linear-gradient(135deg, var(--tw-gradient-from, #D4AF37), var(--tw-gradient-to, #FF8C00))` }}
        >
          <span style={{ background: `linear-gradient(135deg, #D4AF37, #FF8C00)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '1rem', fontWeight: 'bold' }}>
            S{weekData.week}
          </span>
        </div>

        {/* Header text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xl">{weekData.emoji}</span>
            <p className={`text-xs uppercase tracking-widest font-semibold ${weekData.accentColor} opacity-80`}>
              Semaine {weekData.week}
            </p>
            {isWeekComplete && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${weekData.accentBg} ${weekData.accentColor}`}>
                ✓ Terminée
              </span>
            )}
          </div>
          <h3 className="font-bold text-white text-lg leading-tight">{weekData.title}</h3>
          <p className="text-white/45 text-xs mt-0.5">{weekData.subtitle}</p>
        </div>

        {/* Right side: stats + chevron */}
        <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
          <div className="flex items-center gap-1 text-xs text-white/50">
            <span className={`font-bold ${weekData.accentColor}`}>{doneDays}/7</span>
            <span>jours</span>
          </div>
          <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="progress-bar h-full rounded-full transition-all duration-500"
              style={{ width: `${weekProgress}%` }}
            />
          </div>
          <div className={`mt-0.5 ${weekData.accentColor} opacity-70`}>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>
      </button>

      {/* Expanded content: 7 day cards */}
      {isOpen && (
        <div className="relative px-4 pb-5 grid sm:grid-cols-2 gap-3">
          {allDays.map((day, i) => (
            <DayCard
              key={day.day}
              day={day}
              status={statuses[i]}
              weekAccent={weekData.accentColor}
              weekAccentBg={weekData.accentBg}
              globalDayIndex={day.day}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function ParcoursPage() {
  const { completedLessons, completedQuizzes, xp, streak } = useApp();

  // Which week tabs are open (default: open week 1)
  const [openWeeks, setOpenWeeks] = useState(new Set([1]));

  const toggleWeek = (weekNum) => {
    setOpenWeeks(prev => {
      const next = new Set(prev);
      if (next.has(weekNum)) {
        next.delete(weekNum);
      } else {
        next.add(weekNum);
      }
      return next;
    });
  };

  // ---------------------------------------------------------------------------
  // Global stats
  // ---------------------------------------------------------------------------
  const allDaysFlat = weeks.flatMap(w => w.days);

  const doneCount = allDaysFlat.filter(day =>
    isDayDone(day, completedLessons, completedQuizzes)
  ).length;

  const currentDayIndex = allDaysFlat.findIndex(
    day => !isDayDone(day, completedLessons, completedQuizzes)
  );
  const currentDay = currentDayIndex === -1 ? 28 : currentDayIndex + 1;

  const totalPossibleXp = weeks.reduce((s, w) => s + w.totalXp, 0);
  const progressPercent = Math.round((doneCount / 28) * 100);

  // Quick-access week tabs
  const weekLabels = ['S1', 'S2', 'S3', 'S4'];

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-3xl mx-auto">

        {/* ------------------------------------------------------------------ */}
        {/* Header                                                               */}
        {/* ------------------------------------------------------------------ */}
        <div className="text-center mb-10">
          <p className="text-amber-500/80 text-xs uppercase tracking-widest mb-3">Programme structuré</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
            Parcours <span className="gradient-text italic">28 Jours</span>
          </h1>
          <p className="text-white/50 text-base max-w-lg mx-auto mb-5">
            Un programme quotidien progressif pour passer de débutant à un niveau intermédiaire en Darija marocaine.
          </p>
          <div className="moroccan-divider max-w-48 mx-auto" />
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Stats bar                                                            */}
        {/* ------------------------------------------------------------------ */}
        <div className="glass-gold rounded-3xl p-5 mb-8 relative overflow-hidden border border-amber-700/20">
          <div className="absolute inset-0 moroccan-pattern opacity-20" />
          <div className="relative">
            {/* Motivational headline */}
            <div className="text-center mb-4">
              <p className="text-amber-400/70 text-xs uppercase tracking-widest mb-1">Progression</p>
              <p className="font-display text-white font-bold text-lg">
                {doneCount === 0
                  ? 'Prêt à commencer ? Yallah !'
                  : doneCount === 28
                  ? '🎉 Programme complété ! Félicitations !'
                  : `Jour ${currentDay} sur 28`}
              </p>
            </div>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-white/40 mb-1.5">
                <span>{doneCount} jours complétés</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="progress-bar h-full rounded-full transition-all duration-700"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center glass rounded-2xl p-2.5 border border-white/5">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <Calendar size={12} className="text-amber-400" />
                </div>
                <div className="text-lg font-bold gradient-text">{doneCount}<span className="text-xs text-white/30">/28</span></div>
                <div className="text-white/40 text-xs">Jours</div>
              </div>
              <div className="text-center glass rounded-2xl p-2.5 border border-white/5">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <Zap size={12} className="text-amber-400" />
                </div>
                <div className="text-lg font-bold text-amber-400">{xp}</div>
                <div className="text-white/40 text-xs">XP gagnés</div>
              </div>
              <div className="text-center glass rounded-2xl p-2.5 border border-white/5">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <Star size={12} className="text-orange-400" />
                </div>
                <div className="text-lg font-bold text-orange-400">{totalPossibleXp}</div>
                <div className="text-white/40 text-xs">XP total</div>
              </div>
              <div className="text-center glass rounded-2xl p-2.5 border border-white/5">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <Flame size={12} className="text-rose-400" />
                </div>
                <div className="text-lg font-bold text-rose-400">{streak}</div>
                <div className="text-white/40 text-xs">Série</div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Week navigation tabs                                                 */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {weeks.map(w => {
            const isOpen = openWeeks.has(w.week);
            return (
              <button
                key={w.week}
                onClick={() => toggleWeek(w.week)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-semibold transition-all border ${
                  isOpen
                    ? `${w.accentBg} ${w.accentColor}`
                    : 'glass border-white/10 text-white/50 hover:text-white/80 hover:border-white/20'
                }`}
              >
                <span>{w.emoji}</span>
                <span>Semaine {w.week}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Week accordions                                                      */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex flex-col gap-4 mb-10">
          {weeks.map(w => (
            <WeekSection
              key={w.week}
              weekData={w}
              completedLessons={completedLessons}
              completedQuizzes={completedQuizzes}
              isOpen={openWeeks.has(w.week)}
              onToggle={() => toggleWeek(w.week)}
            />
          ))}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* CTA footer                                                           */}
        {/* ------------------------------------------------------------------ */}
        <div className="text-center glass rounded-3xl p-7 border border-amber-700/20">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="font-display text-white font-bold text-xl mb-2">Commencez dès aujourd'hui</h3>
          <p className="text-white/50 text-sm mb-5">
            Chaque jour compte. Même 20 minutes par jour suffisent pour progresser en Darija.
          </p>
          <Link
            to="/cours/1"
            className="btn-shine inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-black font-bold shadow-xl hover:scale-105 transition-all"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #FF8C00)' }}
          >
            <BookOpen size={18} /> Jour 1 — Les Salutations
          </Link>
        </div>

      </div>
    </div>
  );
}
