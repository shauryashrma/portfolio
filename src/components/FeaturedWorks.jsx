import { featuredProjects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function FeaturedWorks() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[20px] md:text-[22px] text-[#21243D] font-medium tracking-tight mb-8">
          Featured works
        </h2>

        <div className="flex flex-col">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isLast={index === featuredProjects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
