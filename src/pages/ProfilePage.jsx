import { useState } from 'react';
import { Trophy, Flame, BookOpen, Star, Zap, CheckCircle, Edit2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { courses } from '../data/courses';
import { quizzes } from '../data/quizzes';
import { achievementsList } from '../data/achievements';
import { dialogues } from '../data/dialogues';

const AVATARS = ['🧑', '👨', '👩', '🧔', '👦', '👧', '🧑‍💻', '👨‍🎓', '👩‍🎓', '🤓', '😎', '🥷', '🦸', '🎓', '🌟', '🦁', '🐯', '🦅', '🌙', '🔥'];

const rarityConfig = {
  common: { label: 'Commun', color: 'text-gray-400 border-gray-400/30 bg-gray-400/10' },
  rare: { label: 'Rare', color: 'text-blue-400 border-blue-400/30 bg-blue-400/10' },
  epic: { label: 'Épique', color: 'text-purple-400 border-purple-400/30 bg-purple-400/10' },
  legendary: { label: 'Légendaire', color: 'text-amber-400 border-amber-400/30 bg-amber-400/10' },
};

export default function ProfilePage() {
  const {
    xp, streak, completedLessons, completedQuizzes,
    completedDialogues, favorites, unlockedAchievements, getLevel,
    userProfile, setUserProfile,
  } = useApp();

  const level = getLevel();
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(userProfile?.name || '');
  const [editAvatar, setEditAvatar] = useState(userProfile?.avatar || '🧑');

  const saveEdit = () => {
    if (!editName.trim()) return;
    setUserProfile({ ...userProfile, name: editName.trim(), avatar: editAvatar });
    setEditing(false);
  };
  const progressPercent = level.next
    ? Math.min(((xp - (level.prev || 0)) / (level.next - (level.prev || 0))) * 100, 100)
    : 100;

  const totalLessons = courses.reduce((s, c) => s + c.lessons.length, 0);
  const completedCourses = courses.filter(c =>
    c.lessons.every(l => completedLessons.includes(`${c.id}-${l.id}`))
  ).length;

  const stats = [
    { icon: Zap, label: 'XP Total', value: xp, color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { icon: Flame, label: 'Série actuelle', value: `${streak} j`, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { icon: BookOpen, label: 'Leçons', value: `${completedLessons.length}/${totalLessons}`, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { icon: Trophy, label: 'Quiz', value: `${completedQuizzes.length}/${quizzes.length}`, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { icon: CheckCircle, label: 'Dialogues', value: `${completedDialogues.length}/${dialogues.length}`, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { icon: Star, label: 'Favoris', value: favorites.length, color: 'text-rose-400', bg: 'bg-rose-400/10' },
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="glass rounded-3xl p-8 mb-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 moroccan-pattern opacity-20" />
          <div className="relative">
            {/* Edit button */}
            <button
              onClick={() => { setEditing(true); setEditName(userProfile?.name || ''); setEditAvatar(userProfile?.avatar || '🧑'); }}
              className="absolute top-0 right-0 p-2 text-white/30 hover:text-amber-400 transition-colors"
            >
              <Edit2 size={16} />
            </button>

            <div className="text-7xl mb-2 animate-float">{userProfile?.avatar || level.icon}</div>
            {userProfile?.name ? (
              <h1 className="text-2xl font-bold text-white mb-0.5">{userProfile.name}</h1>
            ) : (
              <h1 className="text-2xl font-bold text-white mb-0.5">Mon Profil</h1>
            )}
            <div className="gradient-text text-xl font-bold mb-4">{level.icon} {level.name}</div>

            {level.next ? (
              <div className="max-w-xs mx-auto">
                <div className="flex justify-between text-xs text-white/40 mb-1">
                  <span>{xp} XP</span>
                  <span>{level.next} XP</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="progress-bar h-full" style={{ width: `${progressPercent}%` }} />
                </div>
                <div className="text-white/40 text-xs mt-1">
                  Plus que {level.next - xp} XP pour le niveau suivant !
                </div>
              </div>
            ) : (
              <div className="text-amber-400 font-bold">Niveau maximum atteint ! 🎉</div>
            )}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {stats.map(({ icon: Icon, label, value, color, bg }) => (
            <div key={label} className="glass rounded-2xl p-4 text-center">
              <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                <Icon size={20} className={color} />
              </div>
              <div className={`text-xl font-bold ${color}`}>{value}</div>
              <div className="text-white/40 text-xs">{label}</div>
            </div>
          ))}
        </div>

        {/* Course progress */}
        <div className="glass rounded-2xl p-5 mb-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <BookOpen size={18} className="text-emerald-400" />
            Progression des cours
            <span className="text-white/30 text-sm font-normal ml-auto">{completedCourses}/{courses.length} terminés</span>
          </h2>
          <div className="space-y-3">
            {courses.map(course => {
              const done = course.lessons.filter(l => completedLessons.includes(`${course.id}-${l.id}`)).length;
              const pct = (done / course.lessons.length) * 100;
              return (
                <div key={course.id} className="flex items-center gap-3">
                  <div className="text-xl w-8 text-center">{course.emoji}</div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/70">{course.title}</span>
                      <span className="text-white/40">{done}/{course.lessons.length}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="progress-bar h-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  {pct === 100 && <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="glass rounded-2xl p-5 mb-6">
          <h2 className="text-white font-bold mb-4 flex items-center gap-2">
            <Trophy size={18} className="text-amber-400" />
            Achievements
            <span className="text-white/30 text-sm font-normal ml-auto">
              {unlockedAchievements.length}/{achievementsList.length} débloqués
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {achievementsList.map(ach => {
              const unlocked = unlockedAchievements.includes(ach.id);
              const rarity = rarityConfig[ach.rarity] || rarityConfig.common;
              return (
                <div
                  key={ach.id}
                  className={`rounded-xl p-3 border transition-all ${
                    unlocked
                      ? rarity.color
                      : 'border-white/10 bg-white/5 opacity-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-2xl">{unlocked ? ach.emoji : '🔒'}</span>
                    {unlocked && (
                      <span className="text-xs opacity-70">{rarity.label}</span>
                    )}
                  </div>
                  <div className="text-sm font-bold text-white">{ach.title}</div>
                  <div className="text-xs opacity-60 mt-0.5">
                    {unlocked ? ach.description : ach.condition}
                  </div>
                  {unlocked && (
                    <div className="flex items-center gap-1 mt-1 text-xs opacity-70">
                      <Zap size={10} /> +{ach.xpReward} XP
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Reset */}
        <div className="text-center mb-8">
          <button
            onClick={() => {
              if (window.confirm('Réinitialiser toute la progression ? Cette action est irréversible.')) {
                localStorage.clear();
                window.location.reload();
              }
            }}
            className="text-white/20 text-sm hover:text-rose-400 transition-colors"
          >
            Réinitialiser la progression
          </button>
        </div>

        {/* Edit modal */}
        {editing && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div className="glass border border-amber-400/20 rounded-3xl p-7 max-w-sm w-full text-center">
              <h2 className="text-xl font-bold text-white mb-5">Modifier le profil</h2>
              <input
                type="text"
                value={editName}
                onChange={e => setEditName(e.target.value)}
                placeholder="Votre prénom"
                maxLength={20}
                autoFocus
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-center text-lg mb-4 focus:outline-none focus:border-amber-400/60 transition-all"
              />
              <div className="grid grid-cols-5 gap-2 mb-5">
                {AVATARS.map(em => (
                  <button
                    key={em}
                    onClick={() => setEditAvatar(em)}
                    className={`text-2xl w-11 h-11 rounded-xl transition-all ${
                      editAvatar === em ? 'bg-amber-400/30 ring-2 ring-amber-400 scale-110' : 'hover:bg-white/10'
                    }`}
                  >
                    {em}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setEditing(false)} className="flex-1 py-3 rounded-2xl glass border border-white/10 text-white/60">
                  Annuler
                </button>
                <button onClick={saveEdit} disabled={!editName.trim()} className="flex-1 py-3 rounded-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-black disabled:opacity-30">
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
