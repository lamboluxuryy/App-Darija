import { Link } from 'react-router-dom';
import { Mic, CreditCard, MessageSquare, ChevronRight, Radio } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { dialogues } from '../data/dialogues';
import { courses } from '../data/courses';

const sections = [
  {
    to: '/speaking',
    icon: Radio,
    emoji: '🎤',
    title: 'Parler Darija',
    desc: 'Entraînez votre prononciation avec le micro — écoute et répétition',
    color: 'from-rose-500/20 to-pink-500/20',
    border: 'border-rose-500/30',
    iconColor: 'text-rose-400',
    stat: '48 phrases',
  },
  {
    to: '/oral',
    icon: Mic,
    emoji: '🎙️',
    title: 'Pratique Orale',
    desc: 'Écoutez et répétez 48 phrases authentiques du quotidien',
    color: 'from-blue-500/20 to-indigo-500/20',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    stat: '8 catégories',
  },
  {
    to: '/flashcards',
    icon: CreditCard,
    emoji: '🃏',
    title: 'Flashcards',
    desc: 'Révisez avec des cartes retournables et suivez votre progression',
    color: 'from-purple-500/20 to-violet-500/20',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
    stat: 'Spaced repetition',
  },
  {
    to: '/dialogues',
    icon: MessageSquare,
    emoji: '💬',
    title: 'Dialogues',
    desc: 'Conversations scénarisées : café, marché, taxi, médecin...',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
    stat: '5 scénarios',
  },
];

export default function PracticeHub() {
  const { completedDialogues, completedLessons } = useApp();
  const totalLessons = courses.reduce((s, c) => s + c.lessons.length, 0);

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">⚡ Pratiquer</h1>
          <p className="text-white/50">Choisissez votre mode d'entraînement</p>
        </div>

        <div className="flex flex-col gap-5">
          {sections.map(({ to, icon: Icon, emoji, title, desc, color, border, iconColor, stat }) => (
            <Link
              key={to}
              to={to}
              className={`group bg-gradient-to-br ${color} ${border} border rounded-3xl p-6 card-hover`}
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">{emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={18} className={iconColor} />
                    <h3 className="font-bold text-white text-xl">{title}</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-2">{desc}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${iconColor} bg-white/5 border border-white/10`}>
                    {stat}
                  </span>
                </div>
                <ChevronRight size={24} className={`${iconColor} group-hover:translate-x-1 transition-transform`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          <div className="glass rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{completedLessons.length}</div>
            <div className="text-white/40 text-xs">Leçons faites</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{totalLessons}</div>
            <div className="text-white/40 text-xs">Flashcards dispo</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400">{completedDialogues.length}/{dialogues.length}</div>
            <div className="text-white/40 text-xs">Dialogues faits</div>
          </div>
        </div>
      </div>
    </div>
  );
}
