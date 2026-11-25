import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, FolderGit2, Layers } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import { PROJECTS } from '../data/portfolioData';

const CATEGORIES = ['All', 'Web Apps', 'FinTech', 'Music & Media'];

function matchesCategory(project, selectedCategory) {
  if (selectedCategory === 'All') return true;

  const rawCategory = (project.category || '').toLowerCase();
  if (selectedCategory === 'FinTech') {
    return rawCategory.includes('fintech') || rawCategory.includes('trading');
  }
  if (selectedCategory === 'Music & Media') {
    return (
      rawCategory.includes('music') ||
      rawCategory.includes('media') ||
      rawCategory.includes('audio')
    );
  }
  if (selectedCategory === 'Web Apps') {
    return (
      rawCategory.includes('web') ||
      rawCategory.includes('app') ||
      rawCategory.includes('developer') ||
      rawCategory.includes('ui')
    );
  }

  return rawCategory === selectedCategory.toLowerCase();
}

export default function WorkPage({ onBackHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projectList = Array.isArray(PROJECTS) ? PROJECTS : [];
  const filteredProjects = projectList.filter((project) =>
    matchesCategory(project, selectedCategory)
  );

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
                Selected Work
              </h1>
              <p className="mt-2.5 text-sm text-secondary sm:text-base">
                Frontend applications and interactive interfaces crafted with care
              </p>
            </div>
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal delay={70}>
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl border px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                    isSelected
                      ? 'border-line bg-btn-primary text-btn-primary-text shadow-sm'
                      : 'border-line bg-surface text-secondary backdrop-blur-md hover:border-line-hover hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div
          key={selectedCategory}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const targetUrl = project.liveUrl || project.projectUrl || '';
              const hasProjectLink = Boolean(targetUrl);

              return (
                <Reveal key={project.id || project.title} delay={40 + index * 70}>
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

                      <h2 className="mt-5 text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                        {project.title}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-secondary sm:text-base">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-6 space-y-5">
                      {project.stack?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-line bg-surface-elevated px-3 py-1 text-xs font-medium text-secondary"
                            >
                              {tech}
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

                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface-elevated px-4 py-2 text-xs font-medium text-secondary transition-colors hover:border-line-hover hover:text-primary sm:text-sm"
                          >
                            <FolderGit2 className="h-4 w-4" />
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })
          ) : (
            <div className="col-span-full rounded-2xl border border-line bg-surface p-8 text-center backdrop-blur-md">
              <p className="text-sm text-secondary sm:text-base">
                No projects listed under <span className="font-medium text-primary">{selectedCategory}</span> yet.
              </p>
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className="mt-4 inline-flex items-center rounded-xl bg-btn-primary px-4 py-2 text-xs font-medium text-btn-primary-text transition-colors hover:bg-btn-primary-hover sm:text-sm"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}