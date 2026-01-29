
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Project Team', href: '#team' },
    { label: 'Team Experience', href: '#portfolio' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
      isScrolled ? 'bg-white border-sh-border py-4' : 'bg-transparent border-transparent py-8'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="z-50 group">
          <span className={`font-bold text-lg tracking-widest uppercase transition-colors duration-300 ${
            isMobileMenuOpen ? 'text-sh-black' : (isScrolled ? 'text-sh-black' : 'text-white')
          }`}>
            Stanley Hamilton
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-[11px] font-bold tracking-widest uppercase transition-colors relative group ${
                isScrolled ? 'text-sh-black hover:text-sh-accent' : 'text-white hover:text-white/70'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-sh-accent"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className={`text-[11px] font-bold tracking-widest uppercase border px-6 py-2 transition-all ${
              isScrolled 
                ? 'border-sh-black text-sh-black hover:bg-sh-black hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-sh-black'
            }`}
          >
            Review Proposal
          </a>
        </div>

        <button className="md:hidden z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="text-sh-black" /> : <Menu className={isScrolled ? 'text-sh-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-700 ease-out-expo ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-3xl font-bold tracking-tight text-sh-black"
            onClick={(e) => handleNavClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
