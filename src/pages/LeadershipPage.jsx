import { leadershipExperiences } from '../data/portfolioData';
import { Users, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function LeadershipPage() {
  const getIcon = (id) => {
    switch (id) {
      case 'drishti-vp':
        return <Users className="w-5 h-5 text-[#FF6464]" />;
      case 'community-services-director':
        return <HeartHandshake className="w-5 h-5 text-[#00A8CC]" />;
      case 'project-shakti':
        return <ShieldCheck className="w-5 h-5 text-[#FF6464]" />;
      default:
        return <Users className="w-5 h-5 text-[#21243D]" />;
    }
  };

  return (
    <main className="w-full bg-white py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Title matching Figma 'Blog' artboard */}
        <div className="mb-10 md:mb-12">
          <h1 className="text-[34px] sm:text-[40px] md:text-[44px] font-bold text-[#21243D] tracking-tight">
            Leadership & Experience
          </h1>
          <p className="text-[16px] text-[#8695A4] mt-2 max-w-2xl">
            Team leadership, large-scale community initiatives, and social impact projects coordinated throughout academic and civic engagements.
          </p>
        </div>

        {/* Experience List matching Figma Blog layout */}
        <div className="flex flex-col">
          {leadershipExperiences.map((exp, index) => (
            <article key={exp.id} className="w-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#EDF7FA] rounded-md hidden sm:flex items-center justify-center mt-1">
                  {getIcon(exp.id)}
                </div>

                <div className="flex-1">
                  <h2 className="text-[24px] sm:text-[26px] md:text-[30px] font-bold text-[#21243D] leading-tight">
                    {exp.role} — {exp.organization}
                  </h2>

                  {/* Metadata row matching Figma (Date | Category) */}
                  <div className="flex items-center flex-wrap gap-3 mt-2 text-[16px]">
                    <span className="text-[#21243D] font-medium">{exp.period}</span>
                    <span className="text-[#8695A4]">|</span>
                    <span className="text-[#8695A4]">{exp.tags.join(', ')}</span>
                  </div>

                  {/* Core description */}
                  <p className="text-[16px] text-[#21243D] leading-[25px] mt-4">
                    {exp.description}
                  </p>

                  {/* Key highlight pill */}
                  <div className="mt-4 inline-flex items-center bg-[#F5F8FA] border border-[#E5ECF0] px-3.5 py-1.5 rounded text-sm text-[#21243D]">
                    <span className="font-semibold text-[#8695A4] mr-2">Key Highlight:</span>
                    <span>{exp.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Hairline Divider */}
              {index !== leadershipExperiences.length - 1 && (
                <hr className="border-[#E0E0E0] my-8 md:my-10" />
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
