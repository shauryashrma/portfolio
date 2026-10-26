import { Link } from 'react-router-dom';
import { leadershipExperiences } from '../data/portfolioData';

export default function ExperienceHighlights() {
  // Show top 2 leadership initiatives for the home preview
  const previewItems = leadershipExperiences.slice(0, 2);

  return (
    <section className="w-full bg-[#EDF7FA] py-10 md:py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] md:text-[22px] text-[#21243D] font-medium tracking-tight">
            Leadership & Key Initiatives
          </h2>
          <Link
            to="/leadership"
            className="text-[16px] text-[#00A8CC] hover:underline font-medium"
          >
            View all
          </Link>
        </div>

        {/* 2-Card Grid matching Figma layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {previewItems.map((item) => (
            <article
              key={item.id}
              className="bg-white p-6 md:p-7 rounded shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#21243D] leading-tight">
                  {item.role}, {item.organization}
                </h3>

                <div className="flex items-center flex-wrap gap-2 my-4 text-[16px] text-[#21243D]">
                  <span className="font-normal">{item.period}</span>
                  <span className="text-[#8695A4] mx-1">|</span>
                  <span className="text-[#8695A4]">{item.tags.slice(0, 2).join(', ')}</span>
                </div>

                <p className="text-[16px] text-[#21243D] leading-[24px]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F3F6] flex justify-between items-center">
                <span className="text-xs font-semibold text-[#8695A4] uppercase tracking-wider">
                  Impact
                </span>
                <span className="text-xs font-medium text-[#21243D]">
                  {item.highlight}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
