import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', page: 'home', href: '/' },
  { label: 'Work', page: 'work', href: '/work' },
  { label: 'Experience', page: 'experience', href: '/experience' },
  { label: 'About', page: 'about', href: '/about' },
  { label: 'Contact', page: 'contact', href: '/contact' },
];

export default function Navbar({
  theme,
  onToggleTheme,
  activePage = 'home',
  onNavigate,
  onOpenWork,
  onSeeMore,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e, targetPage) => {
    e.preventDefault();
    setMenuOpen(false);

    if (targetPage === 'work') {
      const workHandler = onOpenWork || onSeeMore;
      if (typeof workHandler === 'function') {
        workHandler();
        return;
      }
    }

    if (typeof onNavigate === 'function') {
      onNavigate(targetPage);
    }
  };

  const isLight = theme === 'light';
  const subtleHoverBg = isLight ? 'hover:bg-black/5' : 'hover:bg-white/5';

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-line bg-surface px-4 shadow-lg shadow-black/25 backdrop-blur-md sm:px-5">
        <div className="flex h-14 items-center justify-between">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-center focus:outline-none"
            aria-label="Home"
          >
            <img
              src="/favicon.jpg"
              alt="Okpara jr logo"
              className="h-10 w-18 rounded-xl border border-line object-cover transition-colors group-hover:border-line-hover"
            />
          </a>

          {/* Desktop Navigation (1024px+) */}
          <nav aria-label="Primary Navigation" className="hidden items-center gap-2 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activePage === link.page;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.page)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-lg px-2.5 py-1.5 text-sm transition-colors ${subtleHoverBg} ${
                    isActive
                      ? 'font-medium text-primary'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Theme Toggle + Primary CTA (1024px+) */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface-elevated text-secondary transition-colors hover:border-line-hover hover:text-primary ${subtleHoverBg}`}
            >
              {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <a
              href="/contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`inline-flex items-center gap-1.5 rounded-lg bg-btn-primary px-3.5 py-1.5 text-xs font-medium text-btn-primary-text transition-colors hover:bg-btn-primary-hover ${
                isLight ? 'hover:ring-1 hover:ring-black/15' : 'hover:ring-1 hover:ring-white/25'
              }`}
            >
              <span>Start a project</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile & iPad Theme Toggle + Menu Button (< 1024px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-elevated text-secondary transition-colors hover:border-line-hover hover:text-primary ${subtleHoverBg}`}
            >
              {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="responsive-nav-drawer"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-elevated text-secondary transition-colors hover:border-line-hover hover:text-primary ${subtleHoverBg}`}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile & iPad Collapsible Drawer (< 1024px) */}
        {menuOpen && (
          <div
            id="responsive-nav-drawer"
            className="border-t border-line py-4 lg:hidden"
          >
            <nav
              aria-label="Mobile and Tablet Navigation"
              className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:gap-2"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activePage === link.page;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.page)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${subtleHoverBg} ${
                      isActive
                        ? 'bg-surface-elevated text-primary'
                        : 'text-secondary hover:bg-surface-elevated hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 border-t border-line pt-4">
              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-btn-primary px-4 py-2 text-xs font-medium text-btn-primary-text transition-colors hover:bg-btn-primary-hover sm:w-auto ${
                  isLight ? 'hover:ring-1 hover:ring-black/15' : 'hover:ring-1 hover:ring-white/25'
                }`}
              >
                <span>Start a project</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}