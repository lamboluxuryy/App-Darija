import { Link } from 'react-router-dom';
import { ChevronRight, Clock, Zap, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { courses, getLevelColor } from '../data/courses';

export default function CoursesPage() {
  const { completedLessons } = useApp();

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            📖 Cours de Darija
          </h1>
          <p className="text-white/50">
            {courses.length} cours • Progressez à votre rythme
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {courses.map((course, index) => {
            const lessonsCompleted = course.lessons.filter(l =>
              completedLessons.includes(`${course.id}-${l.id}`)
            ).length;
            const isCompleted = lessonsCompleted === course.lessons.length;
            const progress = (lessonsCompleted / course.lessons.length) * 100;
            const levelStyle = getLevelColor(course.level);

            return (
              <Link
                key={course.id}
                to={`/cours/${course.id}`}
                className="group glass rounded-3xl overflow-hidden card-hover"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${course.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="flex items-start justify-between relative">
                    <div>
                      <div className="text-5xl mb-3">{course.emoji}</div>
                      <h2 className="text-xl font-bold text-white">{course.title}</h2>
                      <p className="font-arabic text-white/70 text-sm">{course.titleAr}</p>
                    </div>
                    {isCompleted && (
                      <div className="bg-white/20 rounded-full p-2">
                        <CheckCircle size={24} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelStyle}`}>
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white/40">
                      <Clock size={12} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-amber-400">
                      <Zap size={12} />
                      {course.xp} XP
                    </span>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-white/50 mb-1">
                      <span>{lessonsCompleted}/{course.lessons.length} leçons</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/60">
                      {isCompleted ? '✅ Complété !' : lessonsCompleted > 0 ? 'Continuer...' : 'Commencer →'}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${course.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <ChevronRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Tip */}
        <div className="mt-8 glass-gold rounded-2xl p-5 text-center">
          <p className="text-amber-400/80 text-sm">
            💡 <strong>Conseil :</strong> Faites au moins un cours par jour pour maintenir votre série et progresser rapidement !
          </p>
        </div>
      </div>
    </div>
  );
}
