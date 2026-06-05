import { Link } from 'react-router-dom';
import { BookOpen, Mic, HelpCircle, Trophy, Flame, Star, ChevronRight, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { courses } from '../data/courses';

const features = [
  {
    to: '/cours',
    icon: BookOpen,
    emoji: '📖',
    title: 'Cours Interactifs',
    desc: 'Apprenez phrase par phrase avec des exemples culturels',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    to: '/oral',
    icon: Mic,
    emoji: '🎙️',
    title: 'Pratique Orale',
    desc: 'Maîtrisez la prononciation avec des phrases du quotidien',
    color: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    to: '/quiz',
    icon: HelpCircle,
    emoji: '🧠',
    title: 'Quiz & Défis',
    desc: 'Testez vos connaissances avec des quiz gamifiés',
    color: 'from-purple-500/20 to-violet-500/20',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
];

export default function Home() {
  const { xp, streak, completedLessons, getLevel } = useApp();
  const level = getLevel();
  const progressPercent = level.next ? Math.min((xp / level.next) * 100, 100) : 100;
  const completedCourses = courses.filter(c =>
    c.lessons.every(l => completedLessons.includes(`${c.id}-${l.id}`))
  ).length;

  return (
    <div className="min-h-screen pb-24 md:pb-0 md:pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 moroccan-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative px-4 py-12 md:py-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-amber-400 text-sm font-medium mb-6 animate-fade-in">
            <Zap size={14} />
            Parlez Darija en 30 jours
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
            Apprenez le{' '}
            <span className="gradient-text">Darija</span>
          </h1>

          <p className="text-xl md:text-2xl font-arabic text-amber-300 mb-2">
            تعلم الدارجة المغربية
          </p>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            La langue de la rue, des marchés et du cœur du Maroc. Apprenez le Darija avec des méthodes modernes et engageantes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cours"
              className="btn-shine flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold text-lg shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              <BookOpen size={20} />
              Commencer à apprendre
            </Link>
            <Link
              to="/oral"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-white/20 text-white font-semibold hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
            >
              <Mic size={20} />
              Écouter les phrases
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="px-4 max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Trophy, label: 'XP Total', value: xp, color: 'text-amber-400', bg: 'bg-amber-400/10' },
            { icon: Flame, label: 'Série', value: `${streak} jours`, color: 'text-orange-400', bg: 'bg-orange-400/10' },
            { icon: BookOpen, label: 'Cours finis', value: `${completedCourses}/${courses.length}`, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
            { icon: Star, label: 'Niveau', value: level.name, color: 'text-purple-400', bg: 'bg-purple-400/10' },
          ].map(({ icon: Icon, label, value, color, bg }) => (
            <div key={label} className="glass rounded-2xl p-4 text-center card-hover">
              <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                <Icon size={20} className={color} />
              </div>
              <div className={`font-bold text-lg ${color}`}>{value}</div>
              <div className="text-white/50 text-xs">{label}</div>
            </div>
          ))}
        </div>

        {/* XP Progress */}
        {level.next && (
          <div className="mt-4 glass rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-white/60">Progression vers {level.next} XP</span>
              <span className="text-sm font-bold text-amber-400">{level.icon} {level.name}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="progress-bar h-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-right text-xs text-white/40 mt-1">{xp} / {level.next} XP</div>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="px-4 max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Comment voulez-vous apprendre ?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ to, icon: Icon, emoji, title, desc, color, border, iconColor }) => (
            <Link
              key={to}
              to={to}
              className={`group relative bg-gradient-to-br ${color} ${border} border rounded-3xl p-6 card-hover cursor-pointer`}
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <div className="flex items-center gap-2 mb-2">
                <Icon size={18} className={iconColor} />
                <h3 className="font-bold text-white text-lg">{title}</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              <div className={`mt-4 flex items-center gap-1 text-sm font-medium ${iconColor} group-hover:gap-2 transition-all`}>
                Commencer <ChevronRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Courses */}
      <div className="px-4 max-w-4xl mx-auto mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Cours disponibles</h2>
          <Link to="/cours" className="text-amber-400 text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Voir tout <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {courses.slice(0, 6).map(course => {
            const lessonsCompleted = course.lessons.filter(l =>
              completedLessons.includes(`${course.id}-${l.id}`)
            ).length;
            const progress = (lessonsCompleted / course.lessons.length) * 100;

            return (
              <Link
                key={course.id}
                to={`/cours/${course.id}`}
                className="glass rounded-2xl p-4 card-hover"
              >
                <div className={`text-3xl mb-3 w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  {course.emoji}
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{course.title}</h3>
                <p className="text-amber-300/60 text-xs font-arabic mb-3">{course.titleAr}</p>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="progress-bar h-full" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-white/40">{lessonsCompleted}/{course.lessons.length}</span>
                  <span className="text-xs text-amber-400">{course.xp} XP</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Fun fact */}
      <div className="px-4 max-w-4xl mx-auto mb-12">
        <div className="glass-gold rounded-3xl p-6 text-center">
          <div className="text-3xl mb-3">💡</div>
          <h3 className="text-amber-400 font-bold text-lg mb-2">Le saviez-vous ?</h3>
          <p className="text-white/70 leading-relaxed">
            Le Darija mélange l'arabe, le berbère, le français et l'espagnol. C'est une langue vivante qui évolue constamment et reflète toute la richesse culturelle du Maroc !
          </p>
          <p className="font-arabic text-amber-300 mt-3 text-lg">الدارجة لغة الحياة اليومية</p>
        </div>
      </div>
    </div>
  );
}
