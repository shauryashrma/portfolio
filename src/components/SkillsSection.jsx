import { technicalSkills } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section className="w-full bg-[#EDF7FA] py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-[20px] md:text-[22px] text-[#21243D] font-bold tracking-tight">
            Technical Proficiencies
          </h2>
          <p className="text-[15px] text-[#8695A4] mt-1">
            Technologies and core fundamentals applied in production and academic engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technicalSkills.map((group) => (
            <div
              key={group.category}
              className="bg-white p-5 rounded border-2 border-[#21243D] shadow-[5px_5px_0px_#00A8CC] hover:shadow-[7px_7px_0px_#FF6464] hover:-translate-x-0.5 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[17px] font-bold text-[#21243D] mb-3 pb-2 border-b-2 border-[#EDF7FA] flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A8CC]" />
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold bg-[#F5F8FA] text-[#21243D] px-2.5 py-1 rounded border border-[#CCD6DF] hover:border-[#FF6464] hover:shadow-[2px_2px_0px_#FF6464] hover:-translate-y-0.5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
