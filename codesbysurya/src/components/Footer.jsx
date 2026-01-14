import { FiHeart, FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/isurya7", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/surya-pramanik-151976290/", label: "LinkedIn" },
    { icon: <FiTwitter />, href: "https://x.com/suryapramanik17", label: "Twitter" },
    { icon: <FiInstagram />, href: "https://www.instagram.com/suryaaa.17/", label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 bg-gradient-to-b from-black/50 to-gray-900/30 border-t border-white/10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">codesbysurya</h3>
                <p className="text-blue-400 text-sm">Developer & Creator</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building digital experiences with clean code and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Services', 'Gallery', 'Story'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:leosuryaof7@gmail.com"
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                leosuryaof7@gmail.com
              </a>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                Based in Kolkata, India
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Follow Along</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Surya Pramanik. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Crafted with passion for technology and design
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-sm">Back to Top</span>
            <FiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Tech Stack Mention */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-500 text-xs">Built with:</span>
            <div className="flex flex-wrap gap-3">
              {['React', 'Tailwind CSS', 'JavaScript', 'Vite'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Heart */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-pink-500/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-full">
            <FiHeart className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
          </div>
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="px-2 py-1 bg-pink-500 text-white text-xs rounded-full whitespace-nowrap">
              Made with ❤️
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;