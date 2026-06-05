import { useState } from 'react';
import { Volume2, Star, Filter } from 'lucide-react';
import { oralPhrases, difficultyConfig } from '../data/oralPhrases';
import { useApp } from '../context/AppContext';

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ar-MA';
    utter.rate = 0.75;
    window.speechSynthesis.speak(utter);
  }
}

function WaveIcon({ playing }) {
  if (!playing) return <Volume2 size={18} />;
  return (
    <div className="flex items-center gap-0.5 h-5">
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.1}s` }} />
      ))}
    </div>
  );
}

export default function OralPage() {
  const { favorites, toggleFavorite } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDifficulty, setActiveCategory2] = useState('all');
  const [playingPhrase, setPlayingPhrase] = useState(null);
  const [showTranslation, setShowTranslation] = useState({});

  const categories = ['all', ...oralPhrases.map(c => c.category)];
  const difficulties = ['all', 'easy', 'medium', 'hard'];

  const filtered = oralPhrases
    .filter(cat => activeCategory === 'all' || cat.category === activeCategory)
    .map(cat => ({
      ...cat,
      phrases: cat.phrases.filter(p => activeDifficulty === 'all' || p.difficulty === activeDifficulty)
    }))
    .filter(cat => cat.phrases.length > 0);

  const handleSpeak = (phrase, key) => {
    setPlayingPhrase(key);
    speak(phrase);
    setTimeout(() => setPlayingPhrase(null), 3000);
  };

  const toggleTranslation = (key) => {
    setShowTranslation(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            🎙️ Pratique Orale
          </h1>
          <p className="text-white/50">
            Écoutez et pratiquez les phrases du quotidien en Darija
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1 text-white/40 text-sm mr-2">
            <Filter size={14} /> Catégorie:
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                  : 'glass text-white/50 hover:text-white border border-transparent'
              }`}
            >
              {cat === 'all' ? '🌍 Tout' : cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <div className="flex items-center gap-1 text-white/40 text-sm mr-2">
            <span>⭐</span> Niveau:
          </div>
          {difficulties.map(diff => (
            <button
              key={diff}
              onClick={() => setActiveCategory2(diff)}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                activeDifficulty === diff
                  ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                  : 'glass text-white/50 hover:text-white border border-transparent'
              }`}
            >
              {diff === 'all' ? 'Tous' : difficultyConfig[diff].label}
            </button>
          ))}
        </div>

        {/* Phrase Cards */}
        {filtered.map(category => (
          <div key={category.id} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">{category.emoji}</div>
              <h2 className="text-xl font-bold text-white">{category.category}</h2>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-white/30 text-sm">{category.phrases.length} phrases</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.phrases.map((phrase, idx) => {
                const key = `${category.id}-${idx}`;
                const isPlaying = playingPhrase === key;
                const isFav = favorites.includes(key);
                const showTr = showTranslation[key];
                const diff = difficultyConfig[phrase.difficulty];

                return (
                  <div
                    key={idx}
                    className="glass rounded-2xl overflow-hidden card-hover"
                  >
                    <div className="p-5">
                      {/* Top row */}
                      <div className="flex items-start justify-between mb-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${diff.color}`}>
                          {diff.icon} {diff.label}
                        </span>
                        <button
                          onClick={() => toggleFavorite(key)}
                          className={`p-1.5 rounded-lg transition-all ${
                            isFav ? 'text-amber-400' : 'text-white/30 hover:text-amber-400'
                          }`}
                        >
                          <Star size={16} fill={isFav ? 'currentColor' : 'none'} />
                        </button>
                      </div>

                      {/* Arabic */}
                      <div className="text-right mb-2">
                        <p className="font-arabic text-2xl text-white leading-relaxed">
                          {phrase.darija}
                        </p>
                      </div>

                      {/* Romanization */}
                      <p className="text-amber-400 font-medium mb-1">{phrase.romanization}</p>

                      {/* Translation toggle */}
                      <button
                        onClick={() => toggleTranslation(key)}
                        className="text-sm text-white/40 hover:text-white/70 transition-colors mb-4"
                      >
                        {showTr ? '▼ ' : '▶ '}{showTr ? phrase.translation : 'Voir la traduction'}
                      </button>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {phrase.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Listen button */}
                      <button
                        onClick={() => handleSpeak(phrase.darija, key)}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition-all ${
                          isPlaying
                            ? 'bg-amber-400/30 text-amber-400 border border-amber-400/50'
                            : 'bg-amber-400/10 text-amber-400/70 hover:bg-amber-400/20 hover:text-amber-400 border border-amber-400/20'
                        }`}
                      >
                        <WaveIcon playing={isPlaying} />
                        {isPlaying ? 'En cours...' : 'Écouter en Darija'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-white/50">Aucune phrase pour ces filtres</p>
          </div>
        )}

        {/* Info box */}
        <div className="glass rounded-2xl p-5 border border-blue-400/20">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="text-white font-semibold mb-1">Comment pratiquer ?</h3>
              <ul className="text-white/50 text-sm space-y-1">
                <li>• Écoutez la phrase plusieurs fois</li>
                <li>• Répétez à voix haute en suivant la romanisation</li>
                <li>• Cachez la traduction et testez-vous</li>
                <li>• Ajoutez les phrases difficiles en favoris</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
