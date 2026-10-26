import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Download, MapPin, GraduationCap, Send, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    if (personalInfo.socials.email) {
      navigator.clipboard.writeText(personalInfo.socials.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.socials.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <main className="w-full bg-white py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-10 md:mb-12">
          <h1 className="text-[34px] sm:text-[40px] md:text-[44px] font-bold text-[#21243D] tracking-tight">
            Contact & Connect
          </h1>
          <p className="text-[16px] text-[#8695A4] mt-2 max-w-xl">
            Open to software engineering roles, full-stack development, and technical collaboration. Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Contact Details & Links */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            {/* Email Card with 3D Cyan Shadow */}
            <div className="p-6 bg-[#EDF7FA] rounded-md border-2 border-[#21243D] shadow-[6px_6px_0px_#00A8CC]">
              <div className="flex items-center space-x-3 text-[#21243D] mb-2">
                <Mail className="w-5 h-5 text-[#FF6464]" />
                <h2 className="text-lg font-bold">Email</h2>
              </div>
              <p className="text-sm text-[#21243D] font-mono select-all">
                {personalInfo.socials.email}
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="text-xs font-bold uppercase tracking-wider bg-[#FF6464] hover:bg-[#E05353] text-white px-3.5 py-1.5 rounded border border-[#21243D] shadow-[2px_2px_0px_#21243D] hover:-translate-y-0.5 transition-all"
                >
                  Send Email
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-bold uppercase tracking-wider bg-white text-[#21243D] border border-[#21243D] hover:bg-[#F5F8FA] px-3.5 py-1.5 rounded shadow-[2px_2px_0px_#21243D] hover:-translate-y-0.5 transition-all inline-flex items-center"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1 text-green-600" /> Copied!
                    </>
                  ) : (
                    'Copy Address'
                  )}
                </button>
              </div>
            </div>

            {/* Profiles & Location Card with 3D Coral Shadow */}
            <div className="p-6 bg-[#F8FAFC] border-2 border-[#21243D] rounded-md shadow-[5px_5px_0px_#FF6464] space-y-4">
              <div className="flex items-start space-x-3 text-[#21243D]">
                <GraduationCap className="w-5 h-5 text-[#00A8CC] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold">Education</h3>
                  <p className="text-xs text-[#21243D] font-medium">{personalInfo.education.degree}</p>
                  <p className="text-xs text-[#8695A4]">{personalInfo.education.institution}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-[#21243D]">
                <MapPin className="w-5 h-5 text-[#FF6464] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold">Location</h3>
                  <p className="text-xs text-[#8695A4]">Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Quick 3D Link Buttons */}
            <div className="flex flex-col space-y-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-white border-2 border-[#21243D] shadow-[4px_4px_0px_#21243D] hover:shadow-[5px_5px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5 rounded transition-all text-sm font-bold text-[#21243D]"
              >
                <span className="flex items-center">
                  <GithubIcon className="w-4 h-4 mr-2.5" /> GitHub Profile
                </span>
                <span className="text-xs text-[#8695A4]">@shauryashrma &rarr;</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-white border-2 border-[#21243D] shadow-[4px_4px_0px_#21243D] hover:shadow-[5px_5px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5 rounded transition-all text-sm font-bold text-[#21243D]"
              >
                <span className="flex items-center">
                  <LinkedinIcon className="w-4 h-4 mr-2.5 text-[#0077B5]" /> LinkedIn Profile
                </span>
                <span className="text-xs text-[#8695A4]">Connect &rarr;</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Shaurya_Sharma_Resume.pdf"
                className="flex items-center justify-between p-3.5 bg-white border-2 border-[#21243D] shadow-[4px_4px_0px_#FF6464] hover:shadow-[5px_5px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5 rounded transition-all text-sm font-bold text-[#21243D]"
              >
                <span className="flex items-center">
                  <Download className="w-4 h-4 mr-2.5 text-[#FF6464]" /> Download Resume
                </span>
                <span className="text-xs text-[#8695A4]">PDF &rarr;</span>
              </a>
            </div>
          </div>

          {/* Message Form with 3D Cyan Shadow */}
          <div className="md:col-span-7 bg-white p-6 md:p-8 border-2 border-[#21243D] rounded-md shadow-[7px_7px_0px_#00A8CC]">
            <h2 className="text-[22px] font-bold text-[#21243D] mb-2">Send a Message</h2>
            <p className="text-xs text-[#8695A4] mb-6">
              This triggers your email client directly with pre-composed message details.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-[#21243D] uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border-2 border-[#CCD6DF] rounded focus:outline-none focus:border-[#21243D] focus:shadow-[3px_3px_0px_#00A8CC] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#21243D] uppercase mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border-2 border-[#CCD6DF] rounded focus:outline-none focus:border-[#21243D] focus:shadow-[3px_3px_0px_#00A8CC] transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-[#21243D] uppercase mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Project Inquiry / Opportunity"
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border-2 border-[#CCD6DF] rounded focus:outline-none focus:border-[#21243D] focus:shadow-[3px_3px_0px_#00A8CC] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#21243D] uppercase mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note here..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border-2 border-[#CCD6DF] rounded focus:outline-none focus:border-[#21243D] focus:shadow-[3px_3px_0px_#00A8CC] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-3d inline-flex items-center justify-center bg-[#FF6464] hover:bg-[#E05353] text-white font-bold uppercase tracking-wider text-sm py-3.5 rounded border-2 border-[#21243D] cursor-pointer"
              >
                <Send className="w-4 h-4 mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
