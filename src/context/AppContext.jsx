import { createContext, useContext, useState, useEffect } from 'react';
import { achievementsList } from '../data/achievements';

const AppContext = createContext();

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

export function AppProvider({ children }) {
  const [completedLessons, setCompletedLessons] = useState(() => {
    const s = localStorage.getItem('darija-completed-lessons');
    return s ? JSON.parse(s) : [];
  });
  const [completedQuizzes, setCompletedQuizzes] = useState(() => {
    const s = localStorage.getItem('darija-completed-quizzes');
    return s ? JSON.parse(s) : [];
  });
  const [completedDialogues, setCompletedDialogues] = useState(() => {
    const s = localStorage.getItem('darija-completed-dialogues');
    return s ? JSON.parse(s) : [];
  });
  const [flashcardHistory, setFlashcardHistory] = useState(() => {
    const s = localStorage.getItem('darija-flashcard-history');
    return s ? JSON.parse(s) : {};
  });
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem('darija-xp') || '0'));
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('darija-streak') || '0'));
  const [lastActiveDate, setLastActiveDate] = useState(() => localStorage.getItem('darija-last-active') || '');
  const [favorites, setFavorites] = useState(() => {
    const s = localStorage.getItem('darija-favorites');
    return s ? JSON.parse(s) : [];
  });
  const [unlockedAchievements, setUnlockedAchievements] = useState(() => {
    const s = localStorage.getItem('darija-achievements');
    return s ? JSON.parse(s) : [];
  });
  const [newAchievement, setNewAchievement] = useState(null);
  const [wordOfDay, setWordOfDay] = useState(() => {
    const s = localStorage.getItem('darija-word-of-day');
    return s ? JSON.parse(s) : null;
  });
  const [userProfile, setUserProfileState] = useState(() => {
    const s = localStorage.getItem('darija-user-profile');
    return s ? JSON.parse(s) : null;
  });

  // Persist
  useEffect(() => { localStorage.setItem('darija-completed-lessons', JSON.stringify(completedLessons)); }, [completedLessons]);
  useEffect(() => { localStorage.setItem('darija-completed-quizzes', JSON.stringify(completedQuizzes)); }, [completedQuizzes]);
  useEffect(() => { localStorage.setItem('darija-completed-dialogues', JSON.stringify(completedDialogues)); }, [completedDialogues]);
  useEffect(() => { localStorage.setItem('darija-flashcard-history', JSON.stringify(flashcardHistory)); }, [flashcardHistory]);
  useEffect(() => { localStorage.setItem('darija-xp', xp.toString()); }, [xp]);
  useEffect(() => { localStorage.setItem('darija-streak', streak.toString()); }, [streak]);
  useEffect(() => { localStorage.setItem('darija-last-active', lastActiveDate); }, [lastActiveDate]);
  useEffect(() => { localStorage.setItem('darija-favorites', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('darija-achievements', JSON.stringify(unlockedAchievements)); }, [unlockedAchievements]);
  useEffect(() => { if (wordOfDay) localStorage.setItem('darija-word-of-day', JSON.stringify(wordOfDay)); }, [wordOfDay]);
  useEffect(() => { if (userProfile) localStorage.setItem('darija-user-profile', JSON.stringify(userProfile)); }, [userProfile]);

  const setUserProfile = (profile) => {
    setUserProfileState(profile);
    localStorage.setItem('darija-user-profile', JSON.stringify(profile));
  };

  // Streak update on mount
  useEffect(() => {
    const today = getTodayStr();
    if (lastActiveDate === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    if (lastActiveDate === yesterdayStr) {
      setStreak(s => s + 1);
    } else if (lastActiveDate !== today) {
      setStreak(1);
    }
    setLastActiveDate(today);
  }, []);

  const checkAchievements = (state) => {
    achievementsList.forEach(ach => {
      if (unlockedAchievements.includes(ach.id)) return;
      let unlocked = false;
      const totalLessons = state.completedLessons?.length ?? completedLessons.length;
      const totalXp = state.xp ?? xp;
      const totalQuizzes = state.completedQuizzes?.length ?? completedQuizzes.length;
      const totalFavs = state.favorites?.length ?? favorites.length;

      switch (ach.id) {
        case 'first-lesson': unlocked = totalLessons >= 1; break;
        case 'five-lessons': unlocked = totalLessons >= 5; break;
        case 'ten-lessons': unlocked = totalLessons >= 10; break;
        case 'twenty-lessons': unlocked = totalLessons >= 20; break;
        case 'first-quiz': unlocked = totalQuizzes >= 1; break;
        case 'all-quizzes': unlocked = totalQuizzes >= 20; break;
        case 'perfect-quiz': unlocked = state.perfectQuiz ?? false; break;
        case 'first-fav': unlocked = totalFavs >= 1; break;
        case 'ten-favs': unlocked = totalFavs >= 10; break;
        case 'xp-50': unlocked = totalXp >= 50; break;
        case 'xp-200': unlocked = totalXp >= 200; break;
        case 'xp-500': unlocked = totalXp >= 500; break;
        case 'xp-1000': unlocked = totalXp >= 1000; break;
        case 'streak-7': unlocked = streak >= 7; break;
        case 'first-dialogue': unlocked = (state.completedDialogues?.length ?? completedDialogues.length) >= 1; break;
        case 'first-flashcard': unlocked = Object.keys(state.flashcardHistory ?? flashcardHistory).length >= 1; break;
      }

      if (unlocked) {
        setUnlockedAchievements(prev => [...prev, ach.id]);
        setNewAchievement(ach);
        setTimeout(() => setNewAchievement(null), 4000);
      }
    });
  };

  const completeLesson = (courseId, lessonId, earnedXp = 10) => {
    const key = `${courseId}-${lessonId}`;
    if (completedLessons.includes(key)) return;
    const newLessons = [...completedLessons, key];
    const newXp = xp + earnedXp;
    setCompletedLessons(newLessons);
    setXp(newXp);
    checkAchievements({ completedLessons: newLessons, xp: newXp });
  };

  const completeQuiz = (quizId, score, totalXp = 50) => {
    const existing = completedQuizzes.find(q => q.id === quizId);
    const earned = Math.round(totalXp * (score / 100));
    const isPerfect = score === 100;
    if (!existing) {
      const newQuizzes = [...completedQuizzes, { id: quizId, score }];
      const newXp = xp + earned;
      setCompletedQuizzes(newQuizzes);
      setXp(newXp);
      checkAchievements({ completedQuizzes: newQuizzes, xp: newXp, perfectQuiz: isPerfect });
    } else if (score > existing.score) {
      setCompletedQuizzes(prev => prev.map(q => q.id === quizId ? { ...q, score } : q));
    }
  };

  const completeDialogue = (dialogueId) => {
    if (!completedDialogues.includes(dialogueId)) {
      const newDialogues = [...completedDialogues, dialogueId];
      const newXp = xp + 30;
      setCompletedDialogues(newDialogues);
      setXp(newXp);
      checkAchievements({ completedDialogues: newDialogues, xp: newXp });
    }
  };

  const recordFlashcard = (key, correct) => {
    const newHistory = { ...flashcardHistory, [key]: { correct, date: getTodayStr() } };
    setFlashcardHistory(newHistory);
    if (correct) setXp(p => p + 5);
    checkAchievements({ flashcardHistory: newHistory });
  };

  const toggleFavorite = (phraseKey) => {
    const newFavs = favorites.includes(phraseKey)
      ? favorites.filter(f => f !== phraseKey)
      : [...favorites, phraseKey];
    setFavorites(newFavs);
    checkAchievements({ favorites: newFavs });
  };

  const getLevel = () => {
    if (xp < 100) return { name: 'Débutant', icon: '🌱', next: 100, prev: 0 };
    if (xp < 300) return { name: 'Curieux', icon: '📚', next: 300, prev: 100 };
    if (xp < 600) return { name: 'Apprenti', icon: '⚡', next: 600, prev: 300 };
    if (xp < 1000) return { name: 'Intermédiaire', icon: '🔥', next: 1000, prev: 600 };
    if (xp < 2000) return { name: 'Avancé', icon: '💎', next: 2000, prev: 1000 };
    return { name: 'Expert Darija', icon: '👑', next: null, prev: 2000 };
  };

  return (
    <AppContext.Provider value={{
      completedLessons, completedQuizzes, completedDialogues,
      flashcardHistory, xp, streak, favorites,
      unlockedAchievements, newAchievement, wordOfDay,
      userProfile, setUserProfile,
      setWordOfDay, completeLesson, completeQuiz,
      completeDialogue, recordFlashcard, toggleFavorite, getLevel,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
