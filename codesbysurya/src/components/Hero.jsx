import { useEffect, useState } from "react";
import { FiLinkedin, FiTwitter, FiGithub, FiArrowRight, FiZap } from "react-icons/fi";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Software Developer", "Freelancer", "Full Time Worker", "Part Time Worker"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left content - Text */}
          <div className="flex-1 text-left">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Available for collaborations</span>
            </div>

            {/* Name and rotating role */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Surya
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Pramanik
                </span>
              </h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
                <div className="text-xl text-blue-400 font-mono h-8 flex items-center">
                  <FiZap className="w-5 h-5 mr-2" />
                  {roles[textIndex]}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-2xl">
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                I craft <span className="text-blue-300 font-semibold">digital experiences</span> that 
                blend innovative technology with intuitive design. Passionate about turning 
                complex problems into elegant, scalable solutions.
              </p>
              
              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Explore My Work</span>
                  <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
                <a 
                  href="#story" 
                  className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 rounded-xl hover:scale-105"
                >
                  <span>My Journey</span>
                  <FiArrowRight className="w-5 h-5 ml-2 group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image with effects */}
          <div className="relative">
            {/* Image container with gradient border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              
              {/* Image frame */}
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl"></div>
              
              {/* Profile image */}
              <div className="absolute inset-2 bg-gray-900 rounded-2xl overflow-hidden border-4 border-transparent bg-clip-padding">
                {/* Try loading different image formats */}
                <img 
                  src="/images/profile.heic" 
                  alt="Surya Pramanik"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Try fallback images if primary fails
                    const fallbacks = [
                      '/images/profile.jpg',
                      '/images/surya.jpg',
                      '/images/photo.jpg',
                      '/images/profile.png'
                    ];
                    
                    let currentIndex = 0;
                    const tryNextImage = () => {
                      if (currentIndex < fallbacks.length) {
                        e.target.src = fallbacks[currentIndex];
                        currentIndex++;
                      } else {
                        // All images failed, show placeholder
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                            <div class="text-center p-8">
                              <div class="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span class="text-4xl font-bold text-white">SP</span>
                              </div>
                              <p class="text-gray-400 text-sm">
                                Add your photo to /public/images/ folder
                              </p>
                              <p class="text-gray-500 text-xs mt-2">
                                Name it: surya-profile.jpg
                              </p>
                            </div>
                          </div>
                        `;
                      }
                    };
                    
                    e.target.onerror = tryNextImage;
                    tryNextImage();
                  }}
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500/10 rounded-full blur-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-lg"></div>
            </div>

            {/* Social links around image */}
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-6">
              {[
                { 
                  href: "https://linkedin.com", 
                  icon: <FiLinkedin className="w-5 h-5" />, 
                  color: "text-blue-400 hover:text-blue-300",
                  label: "LinkedIn"
                },
                { 
                  href: "https://twitter.com", 
                  icon: <FiTwitter className="w-5 h-5" />, 
                  color: "text-blue-400 hover:text-blue-300",
                  label: "Twitter"
                },
                { 
                  href: "https://github.com/isurya7", 
                  icon: <FiGithub className="w-5 h-5" />, 
                  color: "text-gray-400 hover:text-white",
                  label: "GitHub"
                },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                  {/* Tooltip */}
                  <div className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile social links */}
            <div className="flex justify-center gap-6 mt-8 lg:hidden">
              {[
                { href: "https://linkedin.com", icon: <FiLinkedin className="w-5 h-5" />, color: "text-blue-400" },
                { href: "https://twitter.com", icon: <FiTwitter className="w-5 h-5" />, color: "text-blue-400" },
                { href: "https://github.com/isurya7", icon: <FiGithub className="w-5 h-5" />, color: "text-gray-400" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;