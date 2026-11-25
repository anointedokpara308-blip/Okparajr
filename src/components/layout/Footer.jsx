import { useNavigate } from 'react-router-dom';
import { ArrowUp, Mail } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

const FOOTER_LINKS = [
  { label: 'Home', page: 'home', href: '/' },
  { label: 'Work', page: 'work', href: '/work' },
  { label: 'Experience', page: 'experience', href: '/experience' },
  { label: 'About', page: 'about', href: '/about' },
  { label: 'Contact', page: 'contact', href: '/contact' },
];

function formatAvailabilityText(availability) {
  if (!availability) return '';
  return availability
    .replace(/\s*\(Available for Q4\s*\/\s*Q1 builds\)/i, '')
    .replace(/\s*Available for Q4\s*\/\s*Q1 builds/i, '')
    .trim();
}

export default function Footer({ activePage = 'home', onNavigate }) {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handlePageNav = (e, targetPage, fallbackHref) => {
    e.preventDefault();

    if (typeof onNavigate === 'function') {
      onNavigate(targetPage);
      return;
    }

    navigate(fallbackHref || '/');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const monogramText = PROFILE.monogram ? ` (${PROFILE.monogram})` : '';
  const availabilityText = formatAvailabilityText(PROFILE.availability);

  return (
    <footer className="mt-24 px-4 pb-8 sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-surface px-6 py-10 shadow-lg shadow-black/25 backdrop-blur-md sm:px-8">
        {/* Top Row: Identity, Qualifications & Quick Navigation */}
        <div className="flex flex-col justify-between gap-8 border-b border-line pb-8 md:flex-row md:items-start">
          {/* Left: Logo, Full Name & Qualifications */}
          <div className="max-w-md space-y-3">
            <a
              href="/"
              onClick={(e) => handlePageNav(e, 'home', '/')}
              aria-label="Home"
              className="group inline-flex items-center gap-3 focus:outline-none"
            >
              <img
                src="/favicon.jpg"
                alt="Okpara jr logo"
                className="h-10 w-18 rounded-xl border border-line object-cover transition-colors group-hover:border-line-hover"
              />
              <div>
                <p className="text-base font-semibold tracking-tight text-primary transition-colors group-hover:text-accent">
                  {PROFILE.fullName}
                </p>
                {PROFILE.location && (
                  <p className="text-xs text-muted">{PROFILE.location}</p>
                )}
              </div>
            </a>

            {PROFILE.qualifications && (
              <p className="text-sm leading-relaxed text-secondary">
                {PROFILE.qualifications}
              </p>
            )}

            {/* Availability Status */}
            {availabilityText && (
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas/70 px-3 py-1 text-xs text-secondary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span>{availabilityText}</span>
              </div>
            )}
          </div>

          {/* Right: Navigation & Social Links */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                Navigation
              </p>
              <ul className="space-y-2">
                {FOOTER_LINKS.map((link) => {
                  const isCurrent = activePage === link.page;
                  return (
                    <li key={link.page}>
                      <a
                        href={link.href}
                        onClick={(e) => handlePageNav(e, link.page, link.href)}
                        aria-current={isCurrent ? 'page' : undefined}
                        className={`text-sm transition-colors ${
                          isCurrent
                            ? 'font-medium text-primary'
                            : 'text-secondary hover:text-primary'
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                Connect
              </p>
              <div className="flex items-center gap-2.5">
                {PROFILE.github && (
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-elevated text-secondary transition-colors hover:border-line-hover hover:text-primary"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                    </svg>
                  </a>
                )}

                {PROFILE.twitter && (
                  <a
                    href={PROFILE.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X (Twitter)"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-elevated text-secondary transition-colors hover:border-line-hover hover:text-primary"
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}

                {PROFILE.linkedin && (
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-elevated text-secondary transition-colors hover:border-line-hover hover:text-primary"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}

                {PROFILE.email && (
                  <a
                    href={`mailto:${PROFILE.email}`}
                    aria-label={`Email ${PROFILE.fullName}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-elevated text-secondary transition-colors hover:border-line-hover hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>
            © {currentYear} {PROFILE.fullName}{monogramText}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-elevated px-3 py-1.5 text-xs font-medium text-secondary transition-colors hover:border-line-hover hover:text-primary"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}