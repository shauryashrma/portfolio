import { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function Works() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = ['All', 'Full-Stack', 'Machine Learning', 'Systems Programming'];

  const filteredProjects = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) =>
        p.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <main className="w-full bg-white py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Title matching Figma 'Work' artboard */}
        <div className="mb-8 md:mb-10">
          <h1 className="text-[34px] sm:text-[40px] md:text-[44px] font-bold text-[#21243D] tracking-tight">
            Work
          </h1>
          <p className="text-[16px] text-[#8695A4] mt-2 max-w-2xl">
            Selected engineering projects demonstrating practical software design, machine learning pipelines, and high-performance algorithms.
          </p>

          {/* 3D Filter Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded border-2 border-[#21243D] transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#FF6464] text-white shadow-[3px_3px_0px_0px_#00A8CC] -translate-x-0.5 -translate-y-0.5'
                    : 'bg-white text-[#21243D] shadow-[3px_3px_0px_0px_#21243D] hover:shadow-[3px_3px_0px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isLast={index === filteredProjects.length - 1}
            />
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-[#8695A4]">
              No projects found in this category.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
