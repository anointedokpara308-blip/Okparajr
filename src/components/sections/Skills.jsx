import { useState } from 'react';
import {
  Webhook,
  Layers,
  FlaskConical,
  ShieldCheck,
  Smartphone,
  Search,
  Blocks,
  GitBranch,
  DatabaseZap,
  Network,
  Sparkles,
} from 'lucide-react';
import Reveal from '../ui/Reveal';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    items: [
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      },
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'PHP',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      },
    ],
  },
  {
    id: 'frameworks-libraries',
    label: 'Frameworks/Libraries',
    items: [
      {
        name: 'React.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      },
      {
        name: 'Lucide Icons',
        icon: Sparkles,
      },
      {
        name: 'Tailwind CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'Vue.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        invertOnDark: true,
      },
    ],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud/DevOps',
    items: [
      {
        name: 'Firebase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
      },
      {
        name: 'Supabase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
      },
      {
        name: 'Vercel',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
        invertOnDark: true,
      },
    ],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    items: [
      { name: 'REST APIs', icon: Webhook },
      { name: 'MVC Architecture', icon: Layers },
      { name: 'Unit Testing', icon: FlaskConical },
      { name: 'Authentication/Authorization', icon: ShieldCheck },
      { name: 'Responsive Design', icon: Smartphone },
      { name: 'SEO', icon: Search },
      { name: 'Design Patterns', icon: Blocks },
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'State Management', icon: DatabaseZap },
      { name: 'Microservices', icon: Network },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: [
      {
        name: 'VS Code',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Github',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        invertOnDark: true,
      },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const currentCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <Reveal delay={0}>
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-2 text-sm text-secondary sm:text-base">
              My expertise across various technologies and tools
            </p>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <Reveal delay={80}>
          <div
            role="tablist"
            aria-label="Technical skill categories"
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          >
            {SKILL_CATEGORIES.map((category) => {
              const isSelected = category.id === activeTab;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(category.id)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                    isSelected
                      ? 'border-line bg-btn-primary text-btn-primary-text shadow-sm'
                      : 'border-line bg-surface text-secondary backdrop-blur-md hover:border-line-hover hover:text-primary'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Skill Cards Grid */}
        <div
          key={currentCategory.id}
          role="tabpanel"
          aria-label={currentCategory.label}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {currentCategory.items.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Reveal key={skill.name} delay={40 + index * 35}>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface px-4 py-6 text-center shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-line-hover">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-elevated text-accent">
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={`h-6 w-6 object-contain ${
                          skill.invertOnDark ? 'invert [.light_&]:invert-0' : ''
                        }`}
                      />
                    ) : (
                      IconComponent && <IconComponent className="h-5 w-5" />
                    )}
                  </span>
                  <span className="mt-3 text-sm font-medium text-primary">
                    {skill.name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}