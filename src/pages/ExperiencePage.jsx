import { ArrowLeft, Briefcase, MapPin } from 'lucide-react';
import Reveal from '../components/ui/Reveal';

const EXPERIENCES = [
  {
    id: 'frontend-web-developer',
    role: 'Frontend Web Developer',
    organization: 'Listacc Academy',
    location: 'At, Ebonyi state, Nigeria',
    period: 'January 2026 - September 2026',
    summary:
      'Developed responsive web applications using React, enhancing user experience and optimizing performance across multiple devices and platforms.',
    achievements: [
      'Collaborated with designers to implement pixel-perfect UI components, ensuring consistent branding and seamless functionality.',
      'Built reusable components and front-end libraries, streamlining development and improving code maintainability.',
      'Integrated RESTful APIs, ensuring smooth data flow and efficient communication between frontend and backend systems.',
      'Optimized web performance by minimizing load times and improving accessibility, enhancing overall site engagement and usability.',
    ],
  },
];

export default function ExperiencePage({ onBackHome }) {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Top Back Link & Centered Header */}
        <Reveal delay={0}>
          <div>
            {typeof onBackHome === 'function' && (
              <button
                type="button"
                onClick={onBackHome}
                className="mb-6 inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface px-3.5 py-2 text-xs font-medium text-secondary backdrop-blur-md transition-colors hover:border-line-hover hover:text-primary sm:text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </button>
            )}

            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
                Experience
              </h1>
              <p className="mt-2.5 text-sm text-secondary sm:text-base">
                My professional journey of Web development.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Experience Cards */}
        <div className="mt-10 space-y-6">
          {EXPERIENCES.map((item, index) => (
            <Reveal key={item.id} delay={80 + index * 70}>
              <article className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-line-hover sm:p-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                      {item.role}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-secondary sm:text-base">
                      {item.organization}
                    </p>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted sm:text-sm">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      <span>{item.location}</span>
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line bg-surface-elevated px-3.5 py-1.5 font-mono text-xs text-secondary">
                    <Briefcase className="h-3.5 w-3.5 text-accent" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-secondary sm:text-base">
                  {item.summary}
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-primary sm:text-base">
                    Key Achievements:
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-secondary">
                    {item.achievements.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}