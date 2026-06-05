import { Volume2, Star, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { oralPhrases } from '../data/oralPhrases';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ar-MA';
    utter.rate = 0.75;
    window.speechSynthesis.speak(utter);
  }
}

export default function FavoritesPage() {
  const { favorites, toggleFavorite, completedLessons } = useApp();

  // Resolve oral phrase favorites
  const oralFavs = favorites
    .filter(key => {
      const [catId, idx] = key.split('-').map(Number);
      const cat = oralPhrases.find(c => c.id === catId);
      return cat && cat.phrases[idx];
    })
    .map(key => {
      const [catId, idx] = key.split('-').map(Number);
      const cat = oralPhrases.find(c => c.id === catId);
      return { key, phrase: cat.phrases[idx], category: cat.category, emoji: cat.emoji };
    });

  // Resolve lesson favorites
  const lessonFavs = favorites
    .filter(key => {
      const parts = key.split('-');
      if (parts.length !== 2) return false;
      const [cId, lId] = parts.map(Number);
      const course = courses.find(c => c.id === cId);
      return course && course.lessons.find(l => l.id === lId);
    })
    .map(key => {
      const [cId, lId] = key.split('-').map(Number);
      const course = courses.find(c => c.id === cId);
      const lesson = course.lessons.find(l => l.id === lId);
      return { key, lesson, course };
    })
    .filter(f => f.lesson && !oralFavs.find(o => o.key === f.key));

  const totalFavs = oralFavs.length + lessonFavs.length;

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            ⭐ Mes Favoris
          </h1>
          <p className="text-white/50">
            {totalFavs} phrase{totalFavs !== 1 ? 's' : ''} sauvegardée{totalFavs !== 1 ? 's' : ''}
          </p>
        </div>

        {totalFavs === 0 ? (
          <div className="text-center py-20">
            <div className="text-7xl mb-6 animate-float">⭐</div>
            <h2 className="text-2xl font-bold text-white mb-3">Aucun favori pour l'instant</h2>
            <p className="text-white/50 mb-8">
              Ajoutez des phrases en cliquant sur l'étoile dans les cours et la pratique orale
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/cours" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold">
                📖 Aller aux cours
              </Link>
              <Link to="/oral" className="px-6 py-3 rounded-2xl glass border border-white/20 text-white font-semibold">
                🎙️ Pratique orale
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Lesson favorites */}
            {lessonFavs.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  📖 Depuis les cours
                  <span className="text-white/30 text-sm font-normal">({lessonFavs.length})</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {lessonFavs.map(({ key, lesson, course }) => (
                    <div key={key} className="glass rounded-2xl overflow-hidden card-hover">
                      <div className={`h-1 bg-gradient-to-r ${course.color}`} />
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full">
                            {course.emoji} {course.title}
                          </span>
                          <button
                            onClick={() => toggleFavorite(key)}
                            className="text-amber-400 hover:text-rose-400 transition-colors p-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="text-right mb-2">
                          <p className="font-arabic text-2xl text-white">{lesson.phrase}</p>
                        </div>
                        <p className="text-amber-400 font-medium">{lesson.romanization}</p>
                        <p className="text-white/50 text-sm mb-4">{lesson.translation}</p>
                        <button
                          onClick={() => speak(lesson.phrase)}
                          className="flex items-center gap-2 text-sm text-amber-400/70 hover:text-amber-400 transition-colors"
                        >
                          <Volume2 size={14} /> Écouter
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Oral phrase favorites */}
            {oralFavs.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🎙️ Depuis la pratique orale
                  <span className="text-white/30 text-sm font-normal">({oralFavs.length})</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {oralFavs.map(({ key, phrase, category, emoji }) => (
                    <div key={key} className="glass rounded-2xl p-5 card-hover">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full">
                          {emoji} {category}
                        </span>
                        <button
                          onClick={() => toggleFavorite(key)}
                          className="text-amber-400 hover:text-rose-400 transition-colors p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="text-right mb-2">
                        <p className="font-arabic text-2xl text-white">{phrase.darija}</p>
                      </div>
                      <p className="text-amber-400 font-medium mb-1">{phrase.romanization}</p>
                      <p className="text-white/50 text-sm mb-4">{phrase.translation}</p>
                      <button
                        onClick={() => speak(phrase.darija)}
                        className="flex items-center gap-2 text-sm text-amber-400/70 hover:text-amber-400 transition-colors"
                      >
                        <Volume2 size={14} /> Écouter
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Study tip */}
            <div className="glass-gold rounded-2xl p-5 text-center">
              <p className="text-amber-400/80 text-sm">
                🎯 <strong>Conseil :</strong> Révisez vos favoris chaque jour pour mémoriser les phrases plus rapidement !
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
