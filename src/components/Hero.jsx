import { Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ImageSlot from './ImageSlot';

export default function Hero() {
  return (
    <section className="w-full bg-white pt-8 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="order-2 md:order-1 md:col-span-8 text-center md:text-left">
            <h1 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold text-[#21243D] leading-[42px] sm:leading-[48px] md:leading-[60px] tracking-tight">
              Hi, I am {personalInfo.name},
              <br />
              <span className="text-[#21243D]">{personalInfo.role}</span>
            </h1>

            <p className="mt-4 md:mt-6 text-[16px] text-[#21243D] leading-[24px] max-w-xl mx-auto md:mx-0">
              {personalInfo.positioning}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href={personalInfo.resumeUrl}
                download="Shaurya_Sharma_Resume.pdf"
                className="btn-3d inline-flex items-center justify-center bg-[#FF6464] hover:bg-[#E05353] text-white text-[18px] md:text-[20px] font-medium px-8 py-3 rounded border-2 border-[#21243D] focus:outline-none"
              >
                <Download className="w-5 h-5 mr-2.5" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Profile Photo with 3D Layering matching Figma image */}
          <div className="order-1 md:order-2 md:col-span-4 flex justify-center">
            <div className="relative group">
              {/* 3D Cyan Extrusion Disc behind avatar shifted down-left matching reference image */}
              <div className="absolute -bottom-2.5 -left-3 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-[#00A8CC] transition-transform duration-300 group-hover:-translate-x-1.5 group-hover:translate-y-1.5" />

              {/* Subtle 3D Coral accent ring */}
              <div className="absolute -top-1.5 -right-1.5 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border-2 border-[#FF6464]/60 pointer-events-none" />

              {/* Main Avatar Container */}
              <ImageSlot
                src={personalInfo.avatar}
                alt={personalInfo.name}
                aspectRatio="aspect-square"
                isCircle={true}
                className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 relative z-10 shadow-sm border-4 border-white"
                label="Profile Photo"
                hint="public/images/profile.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
