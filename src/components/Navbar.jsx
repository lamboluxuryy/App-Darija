import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Mic, HelpCircle, Home, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

const navItems = [
  { path: '/', icon: Home, label: 'Accueil' },
  { path: '/cours', icon: BookOpen, label: 'Cours' },
  { path: '/oral', icon: Mic, label: 'Oral' },
  { path: '/quiz', icon: HelpCircle, label: 'Quiz' },
  { path: '/favoris', icon: Star, label: 'Favoris' },
];

export default function Navbar() {
  const location = useLocation();
  const { xp, getLevel } = useApp();
  const level = getLevel();

  return (
    <>
      {/* Desktop top bar */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4 glass border-b border-white/10">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-lg">
            🇲🇦
          </div>
          <div className="text-left">
            <div className="font-bold text-white text-lg leading-tight">Darija Now</div>
            <div className="text-xs text-amber-400/80">Apprenez le Marocain</div>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map(({ path, icon: Icon, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-gold">
            <span className="text-lg">{level.icon}</span>
            <div className="text-right">
              <div className="text-xs text-amber-400/70">Niveau</div>
              <div className="text-sm font-bold text-amber-400">{xp} XP</div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 px-2 py-3">
        <div className="flex items-center justify-around">
          {navItems.map(({ path, icon: Icon, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-200 ${
                  active ? 'text-amber-400' : 'text-white/40'
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.5 : 1.5} />
                <span className="text-xs font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
