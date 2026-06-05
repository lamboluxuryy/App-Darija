import { Link } from 'react-router-dom';
import { CheckCircle, Lock, ChevronRight, BookOpen, Mic, HelpCircle, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { courses } from '../data/courses';

const programme = [
  {
    week: 1,
    title: 'Les Bases & Salutations',
    subtitle: 'Dites bonjour, présentez-vous, comptez',
    emoji: '👋',
    color: 'from-amber-800/40 to-orange-900/30',
    border: 'border-amber-600/25',
    courseIds: [1, 2],
    quizIds: [1, 2],
    dialogueId: null,
    phrases: ['Salam 3alikum', 'Labas?', 'Smiyti...', 'Wahd, jouj, tlata'],
    goal: 'Pouvoir saluer et compter jusqu\'à 100',
    xp: 120,
  },
  {
    week: 2,
    title: 'Au Marché & Les Achats',
    subtitle: 'Négociez, demandez les prix, achetez',
    emoji: '🛒',
    color: 'from-orange-800/40 to-red-900/30',
    border: 'border-orange-600/25',
    courseIds: [3],
    quizIds: [3],
    dialogueId: 2,
    phrases: ['B-shhal?', 'Ghali bzzaf', 'Khfed shwiya', '3tini wahd kilo'],
    goal: 'Faire ses courses au souk sans difficulté',
    xp: 100,
  },
  {
    week: 3,
    title: 'Famille & Relations',
    subtitle: 'Parlez de votre famille, vos proches',
    emoji: '👨‍👩‍👧',
    color: 'from-red-800/40 to-rose-900/30',
    border: 'border-red-600/25',
    courseIds: [4, 6],
    quizIds: [4],
    dialogueId: 3,
    phrases: ['Khwak', 'Mmk', 'Weld 3ammi', 'Kifash dayr l-3a\'ila?'],
    goal: 'Présenter votre famille et parler de vos proches',
    xp: 120,
  },
  {
    week: 4,
    title: 'Nourriture & Quotidien',
    subtitle: 'Au café, au restaurant, à la maison',
    emoji: '🍵',
    color: 'from-yellow-800/40 to-amber-900/30',
    border: 'border-yellow-600/25',
    courseIds: [5, 12],
    quizIds: [5, 6],
    dialogueId: 1,
    phrases: ['3tini atay b-n3na3', 'Wash 3ndkom tajin?', 'Bla skkor', 'L-hsab mn fdlak'],
    goal: 'Commander, manger et vivre le quotidien en Darija',
    xp: 140,
  },
  {
    week: 5,
    title: 'Directions & Transports',
    subtitle: 'Naviguer dans la médina, prendre un taxi',
    emoji: '🧭',
    color: 'from-amber-900/40 to-orange-900/30',
    border: 'border-amber-700/25',
    courseIds: [7, 13],
    quizIds: [7, 9, 12],
    dialogueId: 4,
    phrases: ['Fin kayn?', 'Dir l-limin', 'Negda hta l-jame3', 'Shhal taxi l...?'],
    goal: 'Trouver son chemin dans une ville marocaine',
    xp: 160,
  },
  {
    week: 6,
    title: 'Corps, Santé & Émotions',
    subtitle: 'Exprimez vos sentiments, consultez un médecin',
    emoji: '❤️',
    color: 'from-rose-800/40 to-red-900/30',
    border: 'border-rose-600/25',
    courseIds: [8, 9, 10],
    quizIds: [5, 10],
    dialogueId: 5,
    phrases: ['Ferhan bzzaf', 'Khaydini rssi', 'Khasni tbib', '3yyan shwiya'],
    goal: 'Communiquer vos émotions et décrire un problème de santé',
    xp: 160,
  },
  {
    week: 7,
    title: 'Révision & Grand Quiz Final',
    subtitle: 'Consolidez tout ce que vous avez appris',
    emoji: '🏆',
    color: 'from-orange-700/40 to-amber-800/30',
    border: 'border-amber-500/35',
    courseIds: [11, 14],
    quizIds: [15, 16, 17, 20],
    dialogueId: null,
    phrases: ['Expert Darija', 'Wakha', 'Mashi mshkil', 'Yallah!'],
    goal: 'Atteindre le niveau Intermédiaire et parler avec confiance',
    xp: 200,
    isFinal: true,
  },
];

function WeekCard({ week, data, completedLessons, completedQuizzes }) {
  const weekCourses = courses.filter(c => data.courseIds.includes(c.id));
  const totalLessons = weekCourses.reduce((s, c) => s + c.lessons.length, 0);
  const doneLessons = weekCourses.reduce((s, c) =>
    s + c.lessons.filter(l => completedLessons.includes(`${c.id}-${l.id}`)).length, 0);
  const doneQuizzes = data.quizIds.filter(id => completedQuizzes.some(q => q.id === id)).length;
  const weekProgress = totalLessons > 0 ? (doneLessons / totalLessons) * 100 : 0;
  const isDone = weekProgress === 100 && doneQuizzes === data.quizIds.length;

  return (
    <div className={`relative rounded-3xl p-6 border ${data.border} overflow-hidden card-hover bg-gradient-to-br ${data.color}`}>
      {/* Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-15" />

      {/* Done badge */}
      {isDone && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
          <CheckCircle size={12} /> Terminé
        </div>
      )}

      <div className="relative">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-black text-lg shadow-lg"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #FF8C00)' }}>
            {week}
          </div>
          <div>
            <p className="text-amber-400/70 text-xs uppercase tracking-widest mb-0.5">Semaine {week}</p>
            <h3 className="font-bold text-white text-lg leading-tight">{data.title}</h3>
            <p className="text-white/50 text-sm">{data.subtitle}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-white/40 mb-1">
            <span>Progression des cours</span>
            <span>{doneLessons}/{totalLessons} leçons</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="progress-bar h-full" style={{ width: `${weekProgress}%` }} />
          </div>
        </div>

        {/* Sample phrases */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {data.phrases.map(p => (
            <span key={p} className="text-xs px-2.5 py-1 rounded-xl bg-black/20 text-amber-300/80 font-arabic">
              {p}
            </span>
          ))}
        </div>

        {/* Goal */}
        <div className="glass rounded-xl p-3 mb-4">
          <p className="text-white/60 text-xs">
            <span className="text-amber-400">🎯 Objectif :</span> {data.goal}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 flex-wrap">
          {data.courseIds.map(id => {
            const course = courses.find(c => c.id === id);
            if (!course) return null;
            return (
              <Link key={id} to={`/cours/${id}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass border border-amber-700/20 text-amber-300 text-xs font-medium hover:border-amber-500/40 transition-all">
                <BookOpen size={12} /> {course.title}
              </Link>
            );
          })}
          {data.dialogueId && (
            <Link to="/dialogues"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass border border-orange-700/20 text-orange-300 text-xs font-medium hover:border-orange-500/40 transition-all">
              <MessageSquare size={12} /> Dialogue
            </Link>
          )}
          <Link to="/quiz"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass border border-red-700/20 text-red-300 text-xs font-medium hover:border-red-500/40 transition-all">
            <HelpCircle size={12} /> Quiz ({data.quizIds.length})
          </Link>
        </div>

        {/* XP */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-white/30">Potentiel cette semaine</span>
          <span className="text-sm font-bold text-amber-400">+{data.xp} XP</span>
        </div>
      </div>
    </div>
  );
}

export default function ParcoursPage() {
  const { completedLessons, completedQuizzes, xp } = useApp();
  const totalXp = programme.reduce((s, w) => s + w.xp, 0);

  const totalLessonsAll = programme.flatMap(w => {
    const wCourses = courses.filter(c => w.courseIds.includes(c.id));
    return wCourses.flatMap(c => c.lessons.map(l => `${c.id}-${l.id}`));
  });
  const doneAll = totalLessonsAll.filter(key => completedLessons.includes(key)).length;
  const globalProgress = totalLessonsAll.length > 0 ? Math.round((doneAll / totalLessonsAll.length) * 100) : 0;

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amber-500/80 text-xs uppercase tracking-widest mb-3">Notre méthode</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
            Parcours <span className="gradient-text italic">7 Semaines</span>
          </h1>
          <p className="text-white/50 text-base max-w-lg mx-auto mb-5">
            Suivez notre programme structuré pour passer de débutant complet à un niveau de conversation intermédiaire en Darija.
          </p>
          <div className="moroccan-divider max-w-48 mx-auto" />
        </div>

        {/* Global progress */}
        <div className="glass-gold rounded-3xl p-6 mb-10 relative overflow-hidden border border-amber-700/20">
          <div className="absolute inset-0 moroccan-pattern opacity-20" />
          <div className="relative">
            <div className="grid grid-cols-3 gap-4 mb-5">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">{globalProgress}%</div>
                <div className="text-white/40 text-xs">Programme</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">{xp}</div>
                <div className="text-white/40 text-xs">XP gagnés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{totalXp}</div>
                <div className="text-white/40 text-xs">XP total disponible</div>
              </div>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div className="progress-bar h-full" style={{ width: `${globalProgress}%` }} />
            </div>
            <p className="text-center text-white/40 text-xs mt-2">
              {doneAll} leçons complétées sur {totalLessonsAll.length}
            </p>
          </div>
        </div>

        {/* Programme */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {programme.map(w => (
            <WeekCard
              key={w.week}
              week={w.week}
              data={w}
              completedLessons={completedLessons}
              completedQuizzes={completedQuizzes}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center glass rounded-3xl p-7 border border-amber-700/20">
          <div className="text-3xl mb-3">🏁</div>
          <h3 className="font-display text-white font-bold text-xl mb-2">Prêt à commencer ?</h3>
          <p className="text-white/50 text-sm mb-5">Commencez par la Semaine 1 et avancez à votre rythme.</p>
          <Link
            to="/cours/1"
            className="btn-shine inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-black font-bold shadow-xl hover:scale-105 transition-all"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #FF8C00)' }}
          >
            <BookOpen size={18} /> Commencer la Semaine 1
          </Link>
        </div>
      </div>
    </div>
  );
}
