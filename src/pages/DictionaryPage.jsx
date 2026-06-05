import { useState, useMemo } from 'react';
import { Search, Volume2, Star, X } from 'lucide-react';
import { dictionaryWords } from '../data/dictionary';
import { useApp } from '../context/AppContext';

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-MA'; u.rate = 0.75;
    window.speechSynthesis.speak(u);
  }
}

const categoryColors = {
  'Salutations': 'text-emerald-400 bg-emerald-400/10',
  'Chiffres': 'text-blue-400 bg-blue-400/10',
  'Nourriture': 'text-orange-400 bg-orange-400/10',
  'Famille': 'text-pink-400 bg-pink-400/10',
  'Transport': 'text-green-400 bg-green-400/10',
  'Temps': 'text-violet-400 bg-violet-400/10',
  'Émotions': 'text-rose-400 bg-rose-400/10',
  'Corps': 'text-red-400 bg-red-400/10',
  'Travail': 'text-slate-400 bg-slate-400/10',
  'Maison': 'text-amber-400 bg-amber-400/10',
  'Nature': 'text-teal-400 bg-teal-400/10',
  'Adjectifs': 'text-cyan-400 bg-cyan-400/10',
  'Verbes courants': 'text-purple-400 bg-purple-400/10',
  'Expressions': 'text-indigo-400 bg-indigo-400/10',
};

export default function DictionaryPage() {
  const { favorites, toggleFavorite } = useApp();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const categories = ['all', ...new Set(dictionaryWords.map(w => w.category))];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return dictionaryWords.filter(w => {
      const matchesSearch = !q ||
        w.darija.includes(q) ||
        w.romanization.toLowerCase().includes(q) ||
        w.translation.toLowerCase().includes(q) ||
        w.tags?.some(t => t.toLowerCase().includes(q));
      const matchesCategory = activeCategory === 'all' || w.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    if (activeCategory !== 'all') return { [activeCategory]: filtered };
    return filtered.reduce((acc, w) => {
      if (!acc[w.category]) acc[w.category] = [];
      acc[w.category].push(w);
      return acc;
    }, {});
  }, [filtered, activeCategory]);

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">📚 Dictionnaire</h1>
          <p className="text-white/50">{dictionaryWords.length} mots & expressions</p>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Chercher en Darija, romanisation ou français..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-10 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 focus:bg-white/8 transition-all"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                  : 'glass text-white/50 hover:text-white border border-transparent'
              }`}
            >
              {cat === 'all' ? `🌍 Tout (${dictionaryWords.length})` : cat}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-3">🔍</div>
            <p className="text-white/40">Aucun résultat pour "{search}"</p>
          </div>
        ) : (
          Object.entries(grouped).map(([category, words]) => (
            <div key={category} className="mb-8">
              {activeCategory === 'all' && (
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[category] || 'text-white/50 bg-white/10'}`}>
                    {category}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-white/30 text-xs">{words.length}</span>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-3">
                {words.map(word => {
                  const favKey = `dict-${word.id}`;
                  const isFav = favorites.includes(favKey);
                  const isExpanded = expandedId === word.id;

                  return (
                    <div
                      key={word.id}
                      className="glass rounded-2xl overflow-hidden cursor-pointer hover:bg-white/8 transition-all"
                      onClick={() => setExpandedId(isExpanded ? null : word.id)}
                    >
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-arabic text-xl text-white">{word.darija}</span>
                              <button
                                onClick={e => { e.stopPropagation(); speak(word.darija); }}
                                className="text-white/30 hover:text-amber-400 transition-colors p-1"
                              >
                                <Volume2 size={12} />
                              </button>
                            </div>
                            <div className="text-amber-400 text-sm font-medium">{word.romanization}</div>
                            <div className="text-white/60 text-sm">{word.translation}</div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[word.category] || 'text-white/40 bg-white/10'}`}>
                              {word.category}
                            </span>
                            <button
                              onClick={e => { e.stopPropagation(); toggleFavorite(favKey); }}
                              className={`transition-colors ${isFav ? 'text-amber-400' : 'text-white/20 hover:text-amber-400'}`}
                            >
                              <Star size={14} fill={isFav ? 'currentColor' : 'none'} />
                            </button>
                          </div>
                        </div>

                        {isExpanded && word.example && (
                          <div className="mt-3 pt-3 border-t border-white/10 animate-fade-in">
                            <p className="text-white/60 text-sm italic">"{word.example}"</p>
                            <p className="text-white/40 text-xs mt-1">{word.exampleTranslation}</p>
                            {word.tags?.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {word.tags.map(t => (
                                  <span key={t} className="text-xs px-1.5 py-0.5 rounded-full bg-white/5 text-white/30">#{t}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
