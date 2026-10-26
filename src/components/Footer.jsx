import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white py-12 md:py-16 mt-auto border-t border-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Social Icons row matching Figma template (centered, space-x-8) */}
        <div className="flex items-center justify-center space-x-8 text-[#21243D]">
          {personalInfo.socials.github && (
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#21243D] hover:text-[#FF6464] transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-7 h-7" strokeWidth={2} />
            </a>
          )}

          {personalInfo.socials.linkedin && (
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#21243D] hover:text-[#FF6464] transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-7 h-7" strokeWidth={2} />
            </a>
          )}

          {personalInfo.socials.email && (
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="text-[#21243D] hover:text-[#FF6464] transition-colors p-2"
              aria-label="Send Email"
            >
              <Mail className="w-7 h-7" strokeWidth={2} />
            </a>
          )}
        </div>

        {/* Copyright notice matching Figma spec */}
        <p className="text-[14px] text-[#21243D] mt-6 font-normal">
          Copyright ©{currentYear} Shaurya Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
