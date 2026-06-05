import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Mic, HelpCircle, Home, User, MessageSquare, CreditCard, BookMarked, NotebookPen } from 'lucide-react';
import { useApp } from '../context/AppContext';

const navItems = [
  { path: '/', icon: Home, label: 'Accueil' },
  { path: '/cours', icon: BookOpen, label: 'Cours' },
  { path: '/pratiquer', icon: Mic, label: 'Pratiquer' },
  { path: '/quiz', icon: HelpCircle, label: 'Quiz' },
  { path: '/profil', icon: User, label: 'Profil' },
];

const allLinks = [
  { path: '/', icon: Home, label: 'Accueil' },
  { path: '/cours', icon: BookOpen, label: 'Cours' },
  { path: '/oral', icon: Mic, label: 'Oral' },
  { path: '/flashcards', icon: CreditCard, label: 'Flashcards' },
  { path: '/dialogues', icon: MessageSquare, label: 'Dialogues' },
  { path: '/quiz', icon: HelpCircle, label: 'Quiz' },
  { path: '/dictionnaire', icon: BookMarked, label: 'Dictionnaire' },
  { path: '/grammaire', icon: NotebookPen, label: 'Grammaire' },
  { path: '/profil', icon: User, label: 'Profil' },
];

export default function Navbar() {
  const location = useLocation();
  const { xp, getLevel, userProfile } = useApp();
  const level = getLevel();

  const isActive = (path) => {
    if (path === '/pratiquer') {
      return ['/oral', '/flashcards', '/dialogues', '/speaking'].includes(location.pathname);
    }
    return location.pathname === path;
  };

  return (
    <>
      {/* Desktop top bar */}
      <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-6 py-3 glass border-b border-white/10">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-lg shadow-lg">
            🇲🇦
          </div>
          <div className="text-left">
            <div className="font-bold text-white text-base leading-tight">Darija Now</div>
            <div className="text-xs text-amber-400/70">Apprenez le Marocain</div>
          </div>
        </Link>

        <nav className="flex items-center gap-0.5">
          {allLinks.map(({ path, icon: Icon, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  active
                    ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={14} />
                {label}
              </Link>
            );
          })}
        </nav>

        <Link to="/profil" className="flex items-center gap-2 px-3 py-2 rounded-xl glass-gold flex-shrink-0 hover:scale-105 transition-all">
          <span className="text-xl">{userProfile?.avatar || level.icon}</span>
          <div>
            <div className="text-xs text-amber-400/70 leading-tight truncate max-w-20">
              {userProfile?.name || 'Mon profil'}
            </div>
            <div className="text-sm font-bold text-amber-400 leading-tight">{xp} XP</div>
          </div>
        </Link>
      </header>

      {/* Tablet mid nav */}
      <header className="hidden md:flex lg:hidden fixed top-0 left-0 right-0 z-50 items-center justify-between px-4 py-3 glass border-b border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">🇲🇦</div>
          <span className="font-bold text-white text-sm">Darija Now</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map(({ path, icon: Icon, label }) => {
            const active = isActive(path);
            return (
              <Link key={path} to={path} className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${active ? 'bg-amber-400/20 text-amber-400' : 'text-white/50 hover:text-white'}`}>
                <Icon size={14} />
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="text-amber-400 font-bold text-sm">{level.icon} {xp}</div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 px-1 py-2">
        <div className="flex items-center justify-around">
          {navItems.map(({ path, icon: Icon, label }) => {
            const active = isActive(path);
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-200 ${
                  active ? 'text-amber-400' : 'text-white/35'
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.5 : 1.5} />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
