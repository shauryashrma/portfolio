import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-[#FF6464] border-b-2 border-[#21243D] shadow-[0px_6px_0px_0px_#00A8CC] sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
        {/* 3D Brand Badge */}
        <Link
          to="/"
          className="inline-flex items-center px-4 py-1.5 bg-white text-[#21243D] font-extrabold text-xl tracking-tight rounded border-2 border-[#21243D] shadow-[3px_3px_0px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#00A8CC] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#00A8CC] transition-all focus:outline-none"
        >
          Shaurya<span className="text-[#FF6464] ml-0.5">.</span>
        </Link>

        {/* 3D Desktop Navigation Buttons */}
        <nav className="hidden md:flex items-center space-x-4" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-5 py-2 text-base font-bold rounded border-2 border-[#21243D] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#FF6464] shadow-[4px_4px_0px_0px_#00A8CC] -translate-x-0.5 -translate-y-0.5'
                    : 'bg-[#00A8CC] text-white shadow-[3px_3px_0px_0px_#21243D] hover:bg-white hover:text-[#21243D] hover:shadow-[4px_4px_0px_0px_#00A8CC] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* 3D Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 bg-white text-[#21243D] rounded border-2 border-[#21243D] shadow-[3px_3px_0px_0px_#00A8CC] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus:outline-none transition-all cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6 text-[#FF6464]" /> : <Menu className="w-6 h-6 text-[#21243D]" />}
        </button>
      </div>

      {/* 3D Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF2F4] border-t-2 border-b-2 border-[#21243D] shadow-[0px_6px_0px_0px_#00A8CC] px-6 py-4 animate-in slide-in-from-top duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 text-base font-bold rounded border-2 border-[#21243D] transition-all ${
                    isActive
                      ? 'bg-[#FF6464] text-white shadow-[3px_3px_0px_0px_#00A8CC] -translate-x-0.5 -translate-y-0.5'
                      : 'bg-white text-[#21243D] shadow-[2px_2px_0px_0px_#21243D] hover:shadow-[3px_3px_0px_0px_#00A8CC]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
