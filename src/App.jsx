import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import VantaBackground from './components/ui/VantaBackground';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Work from './components/sections/SelectedWork';
import Approach from './components/sections/Approach';
import Footer from './components/layout/Footer';
import Skills from './components/sections/Skills';
import Recommendations from './components/sections/Recommendations';
import WorkPage from './pages/WorkPage';
import ExperiencePage from './pages/ExperiencePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const THEME_STORAGE_KEY = 'portfolio-theme';

function getInitialTheme() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  } catch {
    return 'dark';
  }
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <Work onSeeMore={() => navigate('/work')} />
      <Approach />
      <Skills />
      <Recommendations />
    </>
  );
}

function NotFoundPage({ onBackHome, onOpenWork }) {
  return (
    <section className="px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface p-8 text-center shadow-lg shadow-black/20 backdrop-blur-md sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface-elevated text-accent">
          <Compass className="h-6 w-6" />
        </div>

        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted">
          404 • Page Not Found
        </p>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
          This route does not exist.
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
          The page you are looking for may have moved or the URL might be mistyped. Head back home or explore recent projects instead.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 rounded-xl bg-btn-primary px-5 py-2.5 text-sm font-medium text-btn-primary-text transition-colors hover:bg-btn-primary-hover"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>

          {typeof onOpenWork === 'function' && (
            <button
              type="button"
              onClick={onOpenWork}
              className="inline-flex items-center justify-center rounded-xl border border-line bg-surface-elevated px-5 py-2.5 text-sm font-medium text-secondary transition-colors hover:border-line-hover hover:text-primary"
            >
              View Work
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage write errors in restricted browser modes
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const activePage =
    pathname === '/work'
      ? 'work'
      : pathname === '/experience'
      ? 'experience'
      : pathname === '/about'
      ? 'about'
      : pathname === '/contact'
      ? 'contact'
      : pathname === '/'
      ? 'home'
      : null;

  const handleNavigate = (page) => {
    if (page === 'home') {
      navigate('/');
      return;
    }
    if (page === 'work') {
      navigate('/work');
      return;
    }
    if (page === 'experience') {
      navigate('/experience');
      return;
    }
    if (page === 'about') {
      navigate('/about');
      return;
    }
    if (page === 'contact') {
      navigate('/contact');
      return;
    }
    navigate('/');
  };

  return (
    <div className="relative min-h-screen text-primary">
      <ScrollToTop />

      {/* Vanta Dots animated background pinned at z-0 underneath everything */}
      <VantaBackground theme={theme} />

      {/* Main content shell sitting cleanly above at z-10 */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          activePage={activePage}
          onNavigate={handleNavigate}
          onOpenWork={() => navigate('/work')}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/work"
              element={<WorkPage onBackHome={() => navigate('/')} />}
            />
            <Route
              path="/experience"
              element={<ExperiencePage onBackHome={() => navigate('/')} />}
            />
            <Route
              path="/about"
              element={<AboutPage onBackHome={() => navigate('/')} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onBackHome={() => navigate('/')} />}
            />
            <Route
              path="*"
              element={
                <NotFoundPage
                  onBackHome={() => navigate('/')}
                  onOpenWork={() => navigate('/work')}
                />
              }
            />
          </Routes>
        </main>

        <Footer activePage={activePage} onNavigate={handleNavigate} />
      </div>
    </div>
  );
}