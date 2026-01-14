import { FiCode, FiHeart, FiTrendingUp, FiGlobe, FiStar, FiUsers, FiTarget, FiZap } from "react-icons/fi";
import { FaTshirt, FaFutbol } from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "Python/Django", level: 90, icon: <FiTrendingUp />, color: "from-green-400 to-emerald-400" },
    { name: "React/Next.js", level: 85, icon: <FiCode />, color: "from-blue-400 to-cyan-400" },
    { name: "Full-Stack Dev", level: 80, icon: <FiGlobe />, color: "from-purple-400 to-pink-400" },
    { name: "Problem Solving", level: 88, icon: <FiTarget />, color: "from-yellow-400 to-orange-400" },
  ];

  const passions = [
    { icon: <FiCode />, title: "Tech Projects", desc: "Building innovative digital solutions", color: "text-blue-400" },
    { icon: <FaTshirt />, title: "Fashion", desc: "Exploring style & personal expression", color: "text-pink-400" },
    { icon: <FaFutbol />, title: "Football", desc: "Passionate player & enthusiast", color: "text-green-400" },
    { icon: <FiHeart />, title: "Learning", desc: "Constantly growing & evolving", color: "text-red-400" },
  ];

  const qualities = [
    { title: "Creative", desc: "Bringing ideas to life", icon: "🎨" },
    { title: "Adaptable", desc: "Thriving in new challenges", icon: "🔄" },
    { title: "Driven", desc: "Pushing for growth daily", icon: "⚡" },
    { title: "Collaborative", desc: "Building with others", icon: "🤝" },
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <FiHeart className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-gray-300">Beyond the Code</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Am</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Developer, creator, learner — blending tech with passion and purpose
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Personality */}
          <div className="space-y-8">
            {/* Image Container */}
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Image frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border border-white/10 overflow-hidden">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img 
                    src="/images/Surya.HEIC" 
                    alt="Surya Pramanik"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                          <div class="text-center p-8">
                            <div class="w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                              <span class="text-4xl font-bold text-white">SP</span>
                            </div>
                            <p class="text-gray-400 text-sm">Add your photo</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-400/50 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-400/50 rounded-br-lg"></div>
              </div>
            </div>

            {/* Personality Traits */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FiStar className="text-yellow-400" />
                My Personality
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {qualities.map((quality, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{quality.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{quality.title}</div>
                        <div className="text-xs text-gray-400">{quality.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Current Status
                </h4>
                <FiZap className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Focus</span>
                  <span className="text-green-300">Python/Django</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Learning</span>
                  <span className="text-blue-300">Advanced Backend</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Passion</span>
                  <span className="text-pink-300">Fashion & Football</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FiUsers className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">My Story</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hey! I'm <span className="text-white font-semibold">Surya Pramanik</span> — someone who loves creating, learning, 
                  and pushing myself to grow every single day.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  I enjoy working on tech projects, exploring new ideas, and turning concepts into 
                  real things people can actually use. There's something magical about seeing an 
                  idea evolve from a thought into something tangible.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Apart from coding, I'm super interested in <span className="text-pink-300 font-medium">fashion</span> and absolutely 
                  passionate about <span className="text-green-300 font-medium">football</span> — both play a big role in who I am 
                  and how I express myself. Fashion lets me explore creativity visually, while 
                  football teaches me teamwork, discipline, and passion.
                </p>
              </div>
            </div>

            {/* Passions Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <FiHeart className="text-red-400" />
                What Drives Me
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {passions.map((passion, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`text-xl mb-3 ${passion.color}`}>
                      {passion.icon}
                    </div>
                    <h4 className="font-bold mb-1">{passion.title}</h4>
                    <p className="text-sm text-gray-400">{passion.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Progress */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <FiTrendingUp className="text-cyan-400" />
                Technical Expertise
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`text-lg ${skill.color.split(' ')[0].replace('from-', 'text-')}`}>
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Skills Note */}
              <div className="text-sm text-gray-400 pt-4 border-t border-white/10">
                <p>
                  <span className="text-green-400 font-medium">Python/Django</span> is my primary expertise area, 
                  with deep experience in building scalable backend systems and APIs.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl mt-1">💭</div>
                <div>
                  <h4 className="font-bold mb-2">My Philosophy</h4>
                  <p className="text-gray-300 text-sm">
                    Life is about balance — between logic and creativity, work and passion, 
                    learning and doing. I believe in expressing my whole self through everything 
                    I create, whether it's code, style, or teamwork on the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-2xl">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-300">Primary Expertise</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Python/Django <span className="text-green-400">Specialist</span>
              </h3>
              <p className="text-gray-400">
                With 90% expertise in Python and Django, I specialize in building robust, 
                scalable backend systems, REST APIs, and full-stack applications with clean, 
                maintainable code architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;