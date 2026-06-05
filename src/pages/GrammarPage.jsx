import { useState } from 'react';
import { ChevronRight, Volume2 } from 'lucide-react';
import { grammarRules } from '../data/grammar';
import { getLevelColor } from '../data/courses';

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-MA'; u.rate = 0.75;
    window.speechSynthesis.speak(u);
  }
}

export default function GrammarPage() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">📝 Grammaire</h1>
          <p className="text-white/50">Les règles essentielles du Darija expliquées simplement</p>
        </div>

        {/* Intro banner */}
        <div className="glass-gold rounded-2xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-amber-400 font-bold mb-1">Le Darija, c'est différent !</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Le Darija n'est pas écrit de manière standardisée — il se transmet oralement. Ces règles sont des tendances générales. La prononciation et les formes varient selon les régions du Maroc.
              </p>
            </div>
          </div>
        </div>

        {/* Rules list */}
        <div className="space-y-3">
          {grammarRules.map((rule, i) => {
            const isOpen = expandedId === rule.id;
            const levelStyle = getLevelColor(rule.level);

            return (
              <div key={rule.id} className="glass rounded-2xl overflow-hidden">
                <button
                  className="w-full p-5 text-left flex items-center gap-4 hover:bg-white/5 transition-all"
                  onClick={() => setExpandedId(isOpen ? null : rule.id)}
                >
                  <div className="text-3xl w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    {rule.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-white">{rule.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelStyle}`}>
                        {rule.level}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm line-clamp-1">{rule.explanation}</p>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`text-white/30 transition-transform flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 border-t border-white/10 animate-fade-in">
                    {/* Explanation */}
                    <p className="text-white/70 leading-relaxed mt-4 mb-5">{rule.explanation}</p>

                    {/* Examples */}
                    <div className="space-y-3 mb-4">
                      <div className="text-xs text-white/30 uppercase tracking-wider">Exemples</div>
                      {rule.examples.map((ex, j) => (
                        <div key={j} className="glass rounded-xl p-4 flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-arabic text-lg text-white">{ex.darija}</span>
                              <button onClick={() => speak(ex.darija)} className="text-white/20 hover:text-amber-400 transition-colors">
                                <Volume2 size={12} />
                              </button>
                            </div>
                            <div className="text-amber-400 text-sm">{ex.romanization}</div>
                            <div className="text-white/50 text-sm">{ex.translation}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tip */}
                    {rule.tip && (
                      <div className="glass-gold rounded-xl p-3">
                        <p className="text-amber-400/80 text-sm">
                          <strong>💡 Astuce :</strong> {rule.tip}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 glass rounded-2xl p-5 border border-blue-400/20 text-center">
          <p className="text-white/50 text-sm">
            🎯 La meilleure façon d'apprendre la grammaire Darija, c'est de pratiquer avec des phrases réelles. Utilisez les cours et les dialogues pour appliquer ces règles !
          </p>
        </div>
      </div>
    </div>
  );
}
