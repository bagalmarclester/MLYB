import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filterButtons = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: 'AI & Machine Learning' },
    { key: 'web', label: 'Web & Frontend' },
    { key: 'systems', label: 'Systems & Tools' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    return (
      project.category === activeCategory ||
      project.extraCategory === activeCategory
    );
  });

  return (
    <div className="relative z-10 w-full">
      {/* Section Header */}
      <div className="font-label-caps text-label-caps text-black mb-6 flex items-center gap-4">
        Projects
        <div className="h-px bg-outline-variant/30 flex-grow ml-4"></div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
        {filterButtons.map((btn) => {
          const isActive = activeCategory === btn.key;
          return (
            <button
              key={btn.key}
              onClick={() => setActiveCategory(btn.key)}
              className={`project-filter-btn px-4 py-2.5 rounded-[10px] text-xs md:text-sm font-inter font-semibold border transition-all cursor-pointer ${
                isActive
                  ? 'border-black bg-black text-white shadow-sm'
                  : 'border-black/15 bg-white text-black hover:border-black hover:bg-gray-50'
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card bg-white p-6 md:p-8 rounded-2xl border transition-all duration-200 flex flex-col justify-between h-full fade-in ${
              project.isFlagship
                ? 'border-black/30 shadow-sm'
                : 'border-black/15 hover:border-black/30 hover:shadow-md'
            }`}
          >
            <div>
              {project.image && (
                <div className="w-full h-48 sm:h-56 mb-5 overflow-hidden rounded-xl bg-gray-50 border border-black/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-3">
                <span className="font-code-sm text-xs text-black/50 font-medium">
                  {project.index} · {project.type}
                </span>
                <span
                  className={`text-[10px] font-code-sm px-2.5 py-0.5 rounded-[6px] border ${
                    project.isFlagship
                      ? 'border-red-200 bg-red-50 text-red-600 font-bold'
                      : project.badge.includes('TANAMAN') || project.badge.includes('RYPACI')
                      ? 'border-black/15 bg-black/5 text-black font-semibold'
                      : 'border-black/10 bg-black/[0.03] text-black/70 font-medium'
                  }`}
                >
                  {project.badge}
                </span>
              </div>
              <h2 className="font-fraunces text-2xl font-bold text-black mb-1.5">
                {project.title}
              </h2>
              <div className="font-inter text-xs flex items-center gap-1.5 mb-3 text-black/60 font-medium">
                <span className="material-symbols-outlined text-[16px] text-black/40">
                  {project.orgIcon}
                </span>{' '}
                {project.org}
              </div>
              <p className="font-inter text-sm text-black/80 mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-inter font-medium px-2.5 py-1 rounded-[6px] bg-[#f4f1ea] border border-black/10 text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-black font-inter text-sm font-semibold hover:opacity-80 flex items-center gap-1.5 w-max"
              >
                <span className="group-hover:underline">{project.linkLabel}</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5">
                  {project.linkIcon === 'groups' ? 'groups' : 'arrow_outward'}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
