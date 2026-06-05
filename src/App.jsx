import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import LessonPage from './pages/LessonPage';
import OralPage from './pages/OralPage';
import QuizPage from './pages/QuizPage';
import FavoritesPage from './pages/FavoritesPage';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/App-Darija">
        <div className="min-h-screen bg-[#0f0a1e]">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cours" element={<CoursesPage />} />
            <Route path="/cours/:courseId" element={<LessonPage />} />
            <Route path="/oral" element={<OralPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/favoris" element={<FavoritesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
