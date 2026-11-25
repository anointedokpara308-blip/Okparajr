import { ArrowUpRight, Layers } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { PROJECTS } from '../../data/portfolioData';

export default function SelectedWork({ onSeeMore, onOpenWork }) {
  const handleNavigateToWork = (e) => {
    const handler = onSeeMore || onOpenWork;
    if (typeof handler === 'function') {
      e.preventDefault();
      handler();
    }
  };

  const featuredProjects = Array.isArray(PROJECTS) ? PROJECTS.slice(0, 2) : [];

  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <Reveal delay={0}>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
              Previous Projects
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
              Check out some of my recent work.
            </h2>
          </div>
        </Reveal>

        {/* 2-Column Projects Grid Matching WorkPage Card Styling */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const targetUrl = project.liveUrl || project.projectUrl || '';
            const hasProjectLink = Boolean(targetUrl);

            return (
              <Reveal key={project.id || project.title} delay={80 + index * 70}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-colors hover:border-line-hover sm:p-8">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-elevated px-3 py-1 font-mono text-xs text-accent">
                        <Layers className="h-3.5 w-3.5" />
                        <span>{project.category}</span>
                      </span>

                      {project.year && (
                        <span className="font-mono text-xs text-muted">
                          {project.year}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 space-y-5">
                    {project.stack?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-lg border border-line bg-surface-elevated px-3 py-1 text-xs font-medium text-secondary"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
                      {hasProjectLink ? (
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-btn-primary px-4 py-2 text-xs font-medium text-btn-primary-text transition-colors hover:bg-btn-primary-hover sm:text-sm"
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          title="Add liveUrl in portfolioData.js"
                          className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-xl border border-line bg-surface-elevated px-4 py-2 text-xs font-medium text-muted opacity-70 sm:text-sm"
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Wider Button Reciprocating Dark & Light Mode */}
        <Reveal delay={220}>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={handleNavigateToWork}
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-line bg-btn-primary px-7 py-3 text-sm font-medium text-btn-primary-text shadow-md transition-colors hover:bg-btn-primary-hover sm:w-auto sm:min-w-[14rem]"
            >
              <span>See more</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}