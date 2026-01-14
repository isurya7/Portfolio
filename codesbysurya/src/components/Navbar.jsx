import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'projects', 'github', 'services', 'gallery', 'story', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Story', href: '#story' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md py-3 border-b border-gray-800/50' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border border-gray-700 group-hover:border-blue-500 transition-colors">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">S</span>
              </div>
            </div>
            <span className="text-xl font-bold text-white">codesbysurya</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2.5 group"
              >
                <div className="relative">
                  {/* Text with gradient effect */}
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  
                  {/* Underline animation */}
                  <div className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 transform origin-left ${
                    activeSection === item.href.substring(1)
                      ? 'w-full bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'w-0 group-hover:w-full bg-gradient-to-r from-blue-400/50 to-purple-400/50'
                  }`}></div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-sm"></div>
                </div>
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
          >
            {open ? (
              <FiX className="w-6 h-6 text-gray-300" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-md rounded-xl border border-gray-800 p-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gray-800/50 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  <FiChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                    activeSection === item.href.substring(1) ? 'translate-x-1' : ''
                  }`} />
                </a>
              ))}
              
              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 mt-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;