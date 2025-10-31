import { useState, useEffect } from 'react';

const Button = ({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-md hover:bg-gray-200 active:scale-95 transition ${className}`}
  >
    {children}
  </button>
);

// --- Animated Hamburger Icon ---
const AnimatedHamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-6 h-6 flex flex-col justify-around items-center">
    <span
      className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
        isOpen ? 'rotate-45 translate-y-2' : ''
      }`}
    ></span>
    <span
      className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : ''
      }`}
    ></span>
    <span
      className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`}
    ></span>
  </div>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Scroll listener for navbar animation and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowLogo(scrollY > 120);

      let currentSection = 'home';
      navItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop - 80;
          if (scrollY >= sectionTop) {
            currentSection = item.href.substring(1);
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slideInFromRight 0.3s ease-out forwards;
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black backdrop-blur-lg border-b border-gray-300'
            : 'bg-black'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className={`text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text transition-all duration-500 cursor-pointer transform ${
                showLogo
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              Kanishq Dhangar
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-gray-700 hover:text-blue-600 transition-colors cursor-pointer relative group ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-600'
                      : ''
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform transition-transform origin-center ${
                      activeSection === item.href.substring(1)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 text-gray-800"
            >
              <AnimatedHamburgerIcon isOpen={isMenuOpen} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Side Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm 
                     bg-white/90 backdrop-blur-xl shadow-2xl 
                     border-l border-gray-300
                     transition-transform duration-300 ease-in-out ${
                       isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                     }`}
        >
          <div className="flex flex-col h-full p-8">
            {/* Panel Header */}
            <div className="pb-6 mb-6 border-b border-gray-300">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
              >
                Kanishq Dhangar
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-start space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-xl transition-colors cursor-pointer animate-slide-in ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0'
                  } ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  style={{ animationDelay: `${100 + index * 75}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
