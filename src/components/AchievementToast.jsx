import { useApp } from '../context/AppContext';

export default function AchievementToast() {
  const { newAchievement } = useApp();
  if (!newAchievement) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] animate-slide-up">
      <div className="glass-gold border border-amber-400/50 rounded-2xl px-6 py-4 shadow-2xl shadow-amber-500/30 flex items-center gap-4 min-w-64">
        <div className="text-4xl">{newAchievement.emoji}</div>
        <div>
          <div className="text-xs text-amber-400/70 uppercase tracking-wider mb-0.5">Achievement débloqué !</div>
          <div className="font-bold text-white">{newAchievement.title}</div>
          <div className="text-amber-400/60 text-xs">+{newAchievement.xpReward} XP</div>
        </div>
      </div>
    </div>
  );
}
