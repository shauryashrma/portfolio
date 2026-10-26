import { useParams, Link, Navigate } from 'react-router-dom';
import { featuredProjects } from '../data/portfolioData';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import ImageSlot from '../components/ImageSlot';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = featuredProjects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/works" replace />;
  }

  return (
    <main className="w-full bg-white py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link
          to="/works"
          className="inline-flex items-center text-sm font-bold text-[#21243D] hover:text-[#FF6464] mb-8 transition-colors group"
        >
          <span className="p-1 rounded bg-[#EDF7FA] border border-[#21243D] mr-2 shadow-[2px_2px_0px_#21243D] group-hover:shadow-[2px_2px_0px_#FF6464] transition-all">
            <ArrowLeft className="w-3.5 h-3.5" />
          </span>
          Back to all works
        </Link>

        {/* Project Title matching Figma Frame 4 */}
        <h1 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#21243D] leading-tight tracking-tight">
          {project.title}
        </h1>

        {/* 3D Year Badge & Category Meta */}
        <div className="flex items-center flex-wrap gap-4 mt-4 mb-6">
          <span className="bg-[#FF6464] text-white font-bold text-[16px] md:text-[18px] px-3.5 py-0.5 rounded-full border border-[#21243D] shadow-[2px_2px_0px_#00A8CC] tracking-wide">
            {project.year}
          </span>
          <span className="text-[18px] md:text-[20px] text-[#21243D] font-medium">
            {project.category}
          </span>
        </div>

        {/* Intro Description */}
        <p className="text-[16px] md:text-[18px] text-[#21243D] leading-[28px] mb-8">
          {project.fullDescription}
        </p>

        {/* 3D Action Links */}
        <div className="flex flex-wrap items-center gap-4 mb-10 pb-6 border-b border-[#E0E0E0]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#21243D] hover:bg-[#142850] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded border border-[#21243D] shadow-[3px_3px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#00A8CC] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <GithubIcon className="w-4 h-4 mr-2" /> View GitHub Repository
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#FF6464] hover:bg-[#E05353] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded border border-[#21243D] shadow-[3px_3px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#00A8CC] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Live Application Demo
            </a>
          )}
        </div>

        {/* Primary Visual Slot with 3D Cyan Extrusion Frame */}
        <div className="mb-12">
          <div className="border-2 border-[#21243D] rounded-lg shadow-[8px_8px_0px_#00A8CC] overflow-hidden bg-white">
            <ImageSlot
              src={project.image}
              alt={`${project.title} Main Screenshot`}
              aspectRatio="aspect-[16/9]"
              className="w-full"
              label={`${project.title} Primary Screenshot`}
              hint={project.image.replace(/^\//, 'public/')}
            />
          </div>
        </div>

        {/* Technical Architecture & Key Features */}
        <section className="mb-12">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#21243D] mb-4">
            System Architecture & Key Capabilities
          </h2>
          <p className="text-[16px] text-[#21243D] leading-[26px] mb-6">
            Designed for stability, clear separation of concerns, and rapid query response times under realistic load scenarios.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((feat, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-[#F8FAFC] border-2 border-[#21243D] shadow-[3px_3px_0px_#00A8CC] rounded-md"
              >
                <CheckCircle className="w-5 h-5 text-[#00A8CC] shrink-0 mt-0.5" />
                <span className="text-[15px] text-[#21243D] leading-snug font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Applied */}
        <section className="mb-12">
          <h2 className="text-[20px] font-bold text-[#21243D] mb-4">
            Applied Stack & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-bold uppercase tracking-wider bg-[#EDF7FA] text-[#21243D] px-3.5 py-1.5 rounded border border-[#21243D] shadow-[2px_2px_0px_#21243D]"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Secondary Screenshot with 3D Coral Extrusion Frame */}
        <div className="mb-12">
          <h2 className="text-[20px] font-bold text-[#21243D] mb-4">
            Interface & Data Workflow
          </h2>
          <div className="border-2 border-[#21243D] rounded-lg shadow-[8px_8px_0px_#FF6464] overflow-hidden bg-white">
            <ImageSlot
              src={project.image.replace('.png', '_detail.png')}
              alt={`${project.title} Architecture Overview`}
              aspectRatio="aspect-[16/9]"
              className="w-full"
              label={`${project.title} Workflow / Dashboard`}
              hint={project.image.replace('.png', '_detail.png').replace(/^\//, 'public/')}
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-[#E0E0E0] flex justify-between items-center">
          <Link
            to="/works"
            className="inline-flex items-center text-sm font-bold text-[#21243D] hover:text-[#FF6464] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Works
          </Link>
          <Link
            to="/contact"
            className="btn-3d inline-flex items-center bg-[#FF6464] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded border border-[#21243D]"
          >
            Get in touch &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
