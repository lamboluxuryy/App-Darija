import { useState } from 'react';
import { useApp } from '../context/AppContext';

const AVATARS = ['🧑', '👨', '👩', '🧔', '👦', '👧', '🧑‍💻', '👨‍🎓', '👩‍🎓', '🤓', '😎', '🥷', '🦸', '🎓', '🌟', '🦁', '🐯', '🦅', '🌙', '🔥'];
const GOALS = [
  { value: 10, label: '10 XP', desc: 'Décontracté' },
  { value: 20, label: '20 XP', desc: 'Régulier' },
  { value: 50, label: '50 XP', desc: 'Intensif' },
];

export default function OnboardingModal() {
  const { userProfile, setUserProfile } = useApp();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('🧑');
  const [goal, setGoal] = useState(20);

  if (userProfile) return null;

  const handleConfirm = () => {
    if (!name.trim()) return;
    setUserProfile({ name: name.trim(), avatar, dailyGoal: goal });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
      <div className="relative max-w-sm w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-3xl blur-xl" />
        <div className="relative glass border border-amber-400/20 rounded-3xl p-8 text-center">
          <div className="text-5xl mb-2">🇲🇦</div>
          <h1 className="text-2xl font-bold text-white mb-1">Bienvenue !</h1>
          <p className="text-white/50 text-sm mb-6">Créez votre profil pour commencer l'aventure Darija</p>

          {/* Name */}
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleConfirm()}
            placeholder="Votre prénom"
            maxLength={20}
            autoFocus
            className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-center text-lg mb-5 focus:outline-none focus:border-amber-400/60 transition-all"
          />

          {/* Avatar */}
          <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Choisissez votre avatar</p>
          <div className="grid grid-cols-5 gap-2 mb-5">
            {AVATARS.map(em => (
              <button
                key={em}
                onClick={() => setAvatar(em)}
                className={`text-2xl w-11 h-11 rounded-xl transition-all ${
                  avatar === em
                    ? 'bg-amber-400/30 ring-2 ring-amber-400 scale-110'
                    : 'hover:bg-white/10 hover:scale-105'
                }`}
              >
                {em}
              </button>
            ))}
          </div>

          {/* Goal */}
          <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Objectif quotidien</p>
          <div className="flex gap-2 mb-6">
            {GOALS.map(g => (
              <button
                key={g.value}
                onClick={() => setGoal(g.value)}
                className={`flex-1 py-2.5 rounded-xl transition-all ${
                  goal === g.value
                    ? 'bg-amber-400/20 text-amber-400 border border-amber-400/50'
                    : 'glass border border-white/10 text-white/40 hover:text-white'
                }`}
              >
                <div className="font-bold text-sm">{g.label}</div>
                <div className="text-xs opacity-70">{g.desc}</div>
              </button>
            ))}
          </div>

          <button
            onClick={handleConfirm}
            disabled={!name.trim()}
            className="w-full py-4 rounded-2xl font-bold btn-shine bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-500/30 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-[1.02] transition-all"
          >
            Commencer l'aventure 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
