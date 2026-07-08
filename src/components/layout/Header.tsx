import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border-b border-white/40 dark:border-slate-800/50 shadow-sm transition-colors duration-300">
      {/* Top Left Corner */}
      <button
        onClick={scrollToTop}
        className="text-xl font-bold hover:cursor-pointer tracking-tight text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        vaishali.techie
      </button>

      {/* Center Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700 dark:text-slate-300">
        {['About', 'Skills', 'Experience', 'Work', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => handleScroll(item.toLowerCase())}
            className="hover:text-blue-600 dark:hover:text-blue-400 hover:cursor-pointer transition-colors"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Top Right Corner */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:cursor-pointer bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none backdrop-blur-sm"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        {/* Mobile menu icon */}
        <button className="md:hidden p-2 text-slate-700 dark:text-slate-300">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
