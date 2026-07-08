import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { SkillsEducation } from './components/sections/SkillsEducation';
import { Experience } from './components/sections/Experience';
import { Work } from './components/sections/Work';
import { Contact } from './components/sections/Contact';
import { Mail } from 'lucide-react';

function App() {
  return (
    <ThemeProvider>
      <div className="ambient-bg" />
      <Header />
      
      <main className="relative z-10 selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-200 pb-4">
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <div id="skills">
          <SkillsEducation />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="work">
          <Work />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <footer className="relative z-10 w-full border-t border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-lg py-6 px-6 md:px-12 transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <div className="flex flex-col items-center md:items-start text-slate-600 dark:text-slate-400 font-semibold tracking-wide">
            <span>Vaishali Sharma</span>
            <span className="text-sm font-normal mt-1 opacity-80">© 2026</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Vaishali495" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 hover:text-slate-900 hover:bg-slate-300 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700 transition-all transform hover:scale-110 flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" className="w-5 h-5 fill-current opacity-80 hover:opacity-100 transition-opacity">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82A7.48 7.48 0 0 0 8 2.84c-.68.01-1.36.09-2 .28-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/vaishalisharma1805/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 hover:text-blue-600 hover:bg-blue-100 dark:text-slate-400 dark:hover:text-blue-400 dark:hover:bg-slate-700 transition-all transform hover:scale-110 flex items-center justify-center">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-current opacity-80 hover:opacity-100 transition-opacity">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:vaishali.techie@gmail.com" className="p-2 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 hover:text-red-500 hover:bg-red-100 dark:text-slate-400 dark:hover:text-red-400 dark:hover:bg-slate-700 transition-all transform hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default App;
