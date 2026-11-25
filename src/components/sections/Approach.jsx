import { Layers, Compass, Cpu, Sparkles } from 'lucide-react';
import Reveal from '../ui/Reveal';

const APPROACH_PILLARS = [
  {
    id: 'structure-first',
    step: '01',
    title: 'Structure Before Decoration',
    icon: Compass,
    description:
      'Every interface starts with clear hierarchy, predictable layout flow, and purposeful spacing so users immediately understand where to look and what to do next.',
  },
  {
    id: 'component-systems',
    step: '02',
    title: 'Modular React Architecture',
    icon: Layers,
    description:
      'Components are built to be clean, reusable, and easy to maintain—keeping state predictable and styling consistent across screens and states.',
  },
  {
    id: 'data-and-logic',
    step: '03',
    title: 'Reliable JavaScript & APIs',
    icon: Cpu,
    description:
      'Interactive logic, dynamic views, and external data integrations are wired with practical error handling and responsive feedback rather than brittle shortcuts.',
  },
  {
    id: 'responsive-polish',
    step: '04',
    title: 'Responsive & Accessible Polish',
    icon: Sparkles,
    description:
      'Layouts adapt smoothly from mobile and tablet to desktop while respecting theme contrast, readable typography, and subtle motion that supports the content.',
  },
];

export default function Approach() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <Reveal delay={0}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
              How I Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
              A practical approach to design and engineering.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base">
              Good interfaces feel effortless on the surface because the underlying structure, components, and interaction details are deliberate.
            </p>
          </div>
        </Reveal>

        {/* Approach Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {APPROACH_PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={80 + index * 70}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-5 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-line-hover sm:p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-accent">
                        {item.step}
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface-elevated text-secondary transition-colors group-hover:border-line-hover group-hover:text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-primary sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-secondary">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}