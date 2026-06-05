import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import AchievementToast from './components/AchievementToast';
import OnboardingModal from './components/OnboardingModal';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import LessonPage from './pages/LessonPage';
import OralPage from './pages/OralPage';
import QuizPage from './pages/QuizPage';
import FavoritesPage from './pages/FavoritesPage';
import FlashcardsPage from './pages/FlashcardsPage';
import DialoguePage from './pages/DialoguePage';
import DictionaryPage from './pages/DictionaryPage';
import GrammarPage from './pages/GrammarPage';
import ProfilePage from './pages/ProfilePage';
import PracticeHub from './pages/PracticeHub';
import SpeakingPage from './pages/SpeakingPage';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/App-Darija">
        <div className="min-h-screen app-bg">
          <Navbar />
          <AchievementToast />
          <OnboardingModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cours" element={<CoursesPage />} />
            <Route path="/cours/:courseId" element={<LessonPage />} />
            <Route path="/oral" element={<OralPage />} />
            <Route path="/pratiquer" element={<PracticeHub />} />
            <Route path="/flashcards" element={<FlashcardsPage />} />
            <Route path="/dialogues" element={<DialoguePage />} />
            <Route path="/speaking" element={<SpeakingPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/dictionnaire" element={<DictionaryPage />} />
            <Route path="/grammaire" element={<GrammarPage />} />
            <Route path="/favoris" element={<FavoritesPage />} />
            <Route path="/profil" element={<ProfilePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
