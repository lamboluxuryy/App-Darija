import { useState } from 'react';
import { ChevronLeft, Volume2, CheckCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { dialogues } from '../data/dialogues';
import { useApp } from '../context/AppContext';
import { getLevelColor } from '../data/courses';

function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'ar-MA'; u.rate = 0.75;
    window.speechSynthesis.speak(u);
  }
}

function speakAll(lines, delay = 1200) {
  window.speechSynthesis.cancel();
  lines.forEach((line, i) => {
    setTimeout(() => {
      const u = new SpeechSynthesisUtterance(line.darija);
      u.lang = 'ar-MA'; u.rate = 0.75;
      window.speechSynthesis.speak(u);
    }, i * delay);
  });
}

const speakerColors = {
  A: { bg: 'bg-amber-400/10', border: 'border-amber-400/30', text: 'text-amber-400', bubble: 'bg-amber-400/15' },
  B: { bg: 'bg-blue-400/10', border: 'border-blue-400/30', text: 'text-blue-400', bubble: 'bg-blue-400/15' },
};

export default function DialoguePage() {
  const { completedDialogues, completeDialogue } = useApp();
  const [selected, setSelected] = useState(null);
  const [showTranslations, setShowTranslations] = useState(true);
  const [revealedLines, setRevealedLines] = useState([]);
  const [mode, setMode] = useState('read'); // read | step

  const handleSelect = (dialogue) => {
    setSelected(dialogue);
    setRevealedLines([]);
    setMode('read');
  };

  const revealNext = () => {
    if (!selected) return;
    const next = revealedLines.length;
    if (next < selected.lines.length) {
      setRevealedLines(prev => [...prev, next]);
      speak(selected.lines[next].darija);
    }
  };

  const isCompleted = (id) => completedDialogues.includes(id);

  if (!selected) {
    return (
      <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">💬 Dialogues</h1>
            <p className="text-white/50">Des conversations authentiques du quotidien marocain</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {dialogues.map(dialogue => {
              const done = isCompleted(dialogue.id);
              const levelStyle = getLevelColor(dialogue.level);
              const speakers = [...new Set(dialogue.lines.map(l => l.speakerName))];

              return (
                <button
                  key={dialogue.id}
                  onClick={() => handleSelect(dialogue)}
                  className="glass rounded-3xl overflow-hidden card-hover text-left"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{dialogue.emoji}</div>
                      {done && (
                        <div className="flex items-center gap-1 text-emerald-400 text-xs">
                          <CheckCircle size={14} /> Complété
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{dialogue.title}</h3>
                    <p className="text-white/40 text-sm mb-3">{dialogue.context}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${levelStyle}`}>
                          {dialogue.level}
                        </span>
                        <span className="text-white/30 text-xs">{dialogue.lines.length} répliques</span>
                      </div>
                      <div className="flex gap-1">
                        {speakers.map(s => (
                          <span key={s} className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 glass-gold rounded-2xl p-5">
            <p className="text-amber-400/80 text-sm text-center">
              💡 <strong>Conseil :</strong> Lisez le dialogue une fois, puis jouez le rôle d'un personnage et laissez l'autre jouer via l'audio !
            </p>
          </div>
        </div>
      </div>
    );
  }

  const lines = mode === 'step' ? selected.lines.slice(0, revealedLines.length) : selected.lines;
  const allRevealed = revealedLines.length >= selected.lines.length;

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => setSelected(null)} className="w-10 h-10 glass rounded-xl flex items-center justify-center">
            <ChevronLeft size={20} className="text-white" />
          </button>
          <div>
            <h2 className="font-bold text-white">{selected.emoji} {selected.title}</h2>
            <p className="text-white/40 text-xs">{selected.context}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 mb-5">
          <button
            onClick={() => setMode(m => m === 'read' ? 'step' : 'read')}
            className={`px-3 py-1.5 rounded-xl text-sm transition-all ${
              mode === 'step'
                ? 'bg-purple-400/20 text-purple-400 border border-purple-400/40'
                : 'glass text-white/50 hover:text-white'
            }`}
          >
            {mode === 'step' ? '⚡ Mode pas-à-pas' : '📖 Mode lecture'}
          </button>
          <button
            onClick={() => setShowTranslations(s => !s)}
            className={`px-3 py-1.5 rounded-xl text-sm transition-all ${
              showTranslations
                ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                : 'glass text-white/50 hover:text-white'
            }`}
          >
            {showTranslations ? '👁️ Traductions visibles' : '🙈 Traductions cachées'}
          </button>
          <button
            onClick={() => speakAll(selected.lines)}
            className="px-3 py-1.5 rounded-xl text-sm glass text-white/50 hover:text-white transition-all flex items-center gap-1"
          >
            <Volume2 size={12} /> Tout écouter
          </button>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mb-5">
          {[...new Set(selected.lines.map(l => l.speaker))].map(sp => {
            const name = selected.lines.find(l => l.speaker === sp)?.speakerName;
            const c = speakerColors[sp];
            return (
              <div key={sp} className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${c.bg} ${c.border} border`}>
                <div className={`w-2 h-2 rounded-full ${c.bubble} border ${c.border}`} />
                <span className={`text-sm font-medium ${c.text}`}>{name}</span>
              </div>
            );
          })}
        </div>

        {/* Dialogue lines */}
        <div className="space-y-3 mb-6">
          {lines.map((line, i) => {
            const c = speakerColors[line.speaker] || speakerColors.A;
            const isRight = line.speaker === 'B';

            return (
              <div key={i} className={`flex ${isRight ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-[85%] rounded-2xl p-4 border ${c.bg} ${c.border}`}>
                  <div className={`text-xs font-medium mb-2 ${c.text}`}>{line.speakerName}</div>
                  <div className="font-arabic text-xl text-white text-right mb-1 leading-relaxed">
                    {line.darija}
                  </div>
                  <div className={`text-sm font-medium ${c.text} mb-1`}>{line.romanization}</div>
                  {showTranslations && (
                    <div className="text-white/50 text-sm italic">{line.translation}</div>
                  )}
                  <button
                    onClick={() => speak(line.darija)}
                    className="mt-2 text-white/20 hover:text-amber-400 transition-colors"
                  >
                    <Volume2 size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Step mode controls */}
        {mode === 'step' && !allRevealed && (
          <button
            onClick={revealNext}
            className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 text-white btn-shine shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
          >
            Réplique suivante <ChevronRight size={18} />
          </button>
        )}

        {/* Completion */}
        {(mode === 'read' || allRevealed) && !isCompleted(selected.id) && (
          <button
            onClick={() => completeDialogue(selected.id)}
            className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white btn-shine shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
          >
            <CheckCircle size={18} /> Marquer comme complété (+30 XP)
          </button>
        )}
        {isCompleted(selected.id) && (
          <div className="flex items-center justify-center gap-2 py-4 text-emerald-400">
            <CheckCircle size={18} /> Dialogue complété !
          </div>
        )}

        {mode === 'step' && (
          <button
            onClick={() => { setRevealedLines([]); }}
            className="w-full mt-3 flex items-center justify-center gap-2 text-white/30 text-sm hover:text-white/50 transition-colors"
          >
            <RotateCcw size={12} /> Recommencer
          </button>
        )}
      </div>
    </div>
  );
}
