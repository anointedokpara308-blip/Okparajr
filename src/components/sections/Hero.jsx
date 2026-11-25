import { useState, useEffect } from 'react';
import { ArrowUpRight, FolderKanban, MapPin } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';

const DISPLAY_NAME = "Hi, I'm Anointed Okpara";
const ROLES = ['Frontend Developer', 'UI/UX Designer'];

const HERO_HEADLINE =
  'Frontend developer with precision, structure, and innovative approach.';

const HERO_BIO =
  'A passionate developer with expertise in React, Tailwind CSS, and JavaScript, dedicated to crafting seamless user experiences and innovative web solutions.';
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const activeRole = ROLES[roleIndex];

  return (
    <section
      id="hero"
      className="px-4 pt-12 pb-16 sm:px-6 sm:pt-16 md:px-8 md:pt-20 md:pb-24 lg:pt-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Role, Name, Headline, Bio & CTAs */}
          <div className="lg:col-span-7">
            {/* Top Metadata Row: Active Role & Location */}
            <Reveal delay={0}>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-primary backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{activeRole}</span>
                </span>

                {PROFILE.location && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas/75 px-3 py-1.5 font-mono text-xs text-secondary backdrop-blur-md">
                    <MapPin className="h-3.5 w-3.5 text-muted" />
                    {PROFILE.location}
                  </span>
                )}
              </div>
            </Reveal>

            {/* Main Editorial Headline & Bio */}
            <div className="mt-6 sm:mt-8">
              <Reveal delay={80}>
                <p className="font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
                  {DISPLAY_NAME}
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-[3.15rem] lg:leading-[1.12]">
                  {HERO_HEADLINE}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
                  {HERO_BIO}
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={240}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="/work"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-btn-primary px-5 py-3 text-sm font-medium text-btn-primary-text transition-colors hover:bg-btn-primary-hover sm:w-auto"
                  >
                    <FolderKanban className="h-4 w-4" />
                    <span>View Selected Work</span>
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-btn-secondary/90 px-5 py-3 text-sm font-medium text-primary backdrop-blur-md transition-colors hover:border-line-hover hover:bg-btn-secondary-hover sm:w-auto"
                  >
                    <span>Start a Conversation</span>
                    <ArrowUpRight className="h-4 w-4 text-secondary" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Circular Full-Bleed Portrait */}
          <div className="flex justify-center lg:col-span-5">
            <Reveal delay={200} className="flex w-full items-center justify-center">
              <div className="aspect-square w-72 overflow-hidden rounded-full border border-line bg-surface p-2 shadow-lg shadow-black/25 backdrop-blur-md sm:w-80 lg:w-full lg:max-w-[24rem]">
                <img
                  src="/my-photo.jpg"
                  alt={DISPLAY_NAME}
                  className="h-full w-full rounded-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}