import { ArrowLeft, Award, BookOpen, Code2, Sparkles } from 'lucide-react';
import Reveal from '../components/ui/Reveal';

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Node.js', 'PHP'],
  },
  {
    label: 'Frameworks/Libraries',
    items: ['React.js', 'Lucide Icons', 'Tailwind CSS', 'Vue.js', 'Next.js'],
  },
  {
    label: 'Cloud/DevOps',
    items: ['Firebase', 'Supabase', 'Vercel'],
  },
  {
    label: 'Concepts',
    items: [
      'REST APIs',
      'MVC Architecture',
      'Unit Testing',
      'Authentication/Authorization',
      'Responsive Design',
      'SEO',
      'Design Patterns',
      'Git & GitHub',
      'State Management',
      'Microservices',
    ],
  },
  {
    label: 'Tools',
    items: ['VS Code', 'Github'],
  },
];

const CERTIFICATES = [
  {
    title: 'Certification of Graduation from Listacc Tech Academy',
    issuer: 'Listacc Tech Academy',
    detail: 'Frontend Web Development',
  },
];

const ACHIEVEMENTS = [
  'Earned Certification of Graduation from Listacc Tech Academy for completing frontend web development training.',
  'Built and shipped responsive, interactive web applications including Market Path and Music Plus using React, Tailwind CSS, and modern frontend architecture.',
];

export default function AboutPage({ onBackHome }) {
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
                About Me
              </h1>
              <p className="mt-2.5 text-sm text-secondary sm:text-base">
                Get to know more about my background and skills
              </p>
            </div>
          </div>
        </Reveal>

        {/* Main Two-Column Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Who I Am, Certificates & Achievements */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal delay={60}>
              <article className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/20 backdrop-blur-md sm:p-8">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                    Who I Am
                  </h2>
                </div>

                <div className="mt-4 space-y-4 text-sm leading-relaxed text-secondary sm:text-base">
                  <p>
                    I am Anointed Okpara, a Frontend Developer and UI/UX Designer focused on building responsive, clean, and high-performing web applications with React, Tailwind CSS, and Framer Motion.
                  </p>
                  <p>
                    I enjoy turning ideas into practical, user-friendly interfaces—iterating closely on layout structure, theme consistency, smooth motion, and modular component architecture across real-world projects like Market Path and Music Plus.
                  </p>
                  <p>
                    I'm particularly interested in the intersection of web development and emerging technologies, where I've developed projects leveraging AI and new frameworks.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/20 backdrop-blur-md sm:p-8">
                <div className="flex items-center gap-2.5">
                  <Award className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                    Certificates
                  </h2>
                </div>

                <div className="mt-5 space-y-4">
                  {CERTIFICATES.map((cert) => (
                    <div
                      key={cert.title}
                      className="rounded-xl border border-line bg-surface-elevated p-4 sm:p-5"
                    >
                      <h3 className="text-base font-semibold text-primary sm:text-lg">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-xs text-secondary sm:text-sm">
                        {cert.issuer} • {cert.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={150} className="flex-1">
              <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/20 backdrop-blur-md sm:p-8">
                <div>
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                      Achievements
                    </h2>
                  </div>

                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-secondary">
                    {ACHIEVEMENTS.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Right Column: Skills Matched to Achievements Height */}
          <div className="flex flex-col lg:col-span-5">
            <Reveal delay={90} className="flex-1">
              <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/20 backdrop-blur-md sm:p-8">
                <div>
                  <div className="flex items-center gap-2.5">
                    <Code2 className="h-5 w-5 text-accent" />
                    <h2 className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                      Skills
                    </h2>
                  </div>

                  <div className="mt-5 space-y-5">
                    {SKILL_GROUPS.map((group) => (
                      <div key={group.label}>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
                          {group.label}
                        </h3>
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          {group.items.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-line bg-surface-elevated px-3 py-1.5 text-xs font-medium text-secondary transition-colors hover:border-line-hover hover:text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}