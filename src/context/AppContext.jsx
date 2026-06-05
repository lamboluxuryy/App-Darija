import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('darija-completed-lessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [completedQuizzes, setCompletedQuizzes] = useState(() => {
    const saved = localStorage.getItem('darija-completed-quizzes');
    return saved ? JSON.parse(saved) : [];
  });

  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('darija-xp');
    return saved ? parseInt(saved) : 0;
  });

  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('darija-streak');
    return saved ? parseInt(saved) : 0;
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('darija-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('darija-completed-lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('darija-completed-quizzes', JSON.stringify(completedQuizzes));
  }, [completedQuizzes]);

  useEffect(() => {
    localStorage.setItem('darija-xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('darija-streak', streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem('darija-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const completeLesson = (courseId, lessonId, earnedXp = 10) => {
    const key = `${courseId}-${lessonId}`;
    if (!completedLessons.includes(key)) {
      setCompletedLessons(prev => [...prev, key]);
      setXp(prev => prev + earnedXp);
    }
  };

  const completeQuiz = (quizId, score, totalXp) => {
    if (!completedQuizzes.find(q => q.id === quizId)) {
      setCompletedQuizzes(prev => [...prev, { id: quizId, score }]);
      setXp(prev => prev + Math.round(totalXp * (score / 100)));
    }
  };

  const toggleFavorite = (phraseKey) => {
    setFavorites(prev =>
      prev.includes(phraseKey)
        ? prev.filter(f => f !== phraseKey)
        : [...prev, phraseKey]
    );
  };

  const getLevel = () => {
    if (xp < 100) return { name: 'Débutant', icon: '🌱', next: 100 };
    if (xp < 300) return { name: 'Curieux', icon: '📚', next: 300 };
    if (xp < 600) return { name: 'Apprenti', icon: '⚡', next: 600 };
    if (xp < 1000) return { name: 'Intermédiaire', icon: '🔥', next: 1000 };
    if (xp < 2000) return { name: 'Avancé', icon: '💎', next: 2000 };
    return { name: 'Expert Darija', icon: '👑', next: null };
  };

  return (
    <AppContext.Provider value={{
      completedLessons,
      completedQuizzes,
      xp,
      streak,
      favorites,
      completeLesson,
      completeQuiz,
      toggleFavorite,
      getLevel,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
