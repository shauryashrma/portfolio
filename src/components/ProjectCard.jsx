import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ImageSlot from './ImageSlot';

export default function ProjectCard({ project, isLast = false }) {
  return (
    <article className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-[246px_1fr] gap-6 md:gap-7 items-start">
        {/* Project Thumbnail with 3D Cyan Extrusion Frame */}
        <Link
          to={`/works/${project.id}`}
          className="block group focus:outline-none"
        >
          <div className="relative rounded-md border-2 border-[#21243D] shadow-[5px_5px_0px_0px_#00A8CC] group-hover:shadow-[7px_7px_0px_0px_#FF6464] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-200 overflow-hidden bg-white">
            <ImageSlot
              src={project.image}
              alt={project.title}
              aspectRatio="aspect-[4/3]"
              className="w-full md:w-[246px] md:h-[180px]"
              label={`${project.title.split('—')[0].trim()}`}
              hint={project.image.replace(/^\//, 'public/')}
            />
          </div>
        </Link>

        {/* Project Details */}
        <div className="flex flex-col">
          {/* Title */}
          <Link
            to={`/works/${project.id}`}
            className="group inline-block focus:outline-none"
          >
            <h3 className="text-[24px] md:text-[28px] lg:text-[30px] font-bold text-[#21243D] group-hover:text-[#FF6464] transition-colors leading-tight">
              {project.title}
            </h3>
          </Link>

          {/* Metadata Row: 3D Year Badge + Category */}
          <div className="flex items-center flex-wrap gap-4 mt-3 md:mt-4">
            <span className="bg-[#142850] text-white font-bold text-[15px] md:text-[17px] px-3.5 py-0.5 rounded-full border border-[#21243D] shadow-[2px_2px_0px_#00A8CC] tracking-wide">
              {project.year}
            </span>
            <span className="text-[18px] md:text-[20px] text-[#8695A4] font-medium">
              {project.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-[16px] text-[#21243D] leading-[24px] mt-4">
            {project.shortDescription}
          </p>

          {/* Technology Badges with 3D Depth */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold bg-[#EDF7FA] text-[#21243D] px-2.5 py-1 rounded border border-[#CCD6DF] hover:border-[#00A8CC] hover:shadow-[2px_2px_0px_#00A8CC] hover:-translate-y-0.5 transition-all"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs text-[#8695A4] px-1 py-1 font-medium">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Quick Action Links with 3D Tactile Buttons */}
          <div className="flex items-center flex-wrap gap-4 mt-5 text-[15px] font-medium">
            <Link
              to={`/works/${project.id}`}
              className="inline-flex items-center bg-[#FF6464] hover:bg-[#E05353] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded border border-[#21243D] shadow-[3px_3px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#00A8CC] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#00A8CC] transition-all"
            >
              Case Study <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#21243D] hover:text-[#FF6464] text-xs font-semibold px-3 py-2 rounded border border-[#21243D] shadow-[3px_3px_0px_#21243D] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#FF6464] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#21243D] transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 mr-1.5" /> Source Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#21243D] hover:text-[#00A8CC] text-xs font-semibold px-3 py-2 rounded border border-[#21243D] shadow-[3px_3px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#00A8CC] transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hairline Divider */}
      {!isLast && <hr className="border-[#E0E0E0] my-8 md:my-10" />}
    </article>
  );
}
