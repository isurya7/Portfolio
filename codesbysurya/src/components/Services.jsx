import { 
  FiCode, 
  FiLayout, 
  FiServer, 
  FiDatabase, 
  FiCloud, 
  FiUsers,
  FiZap,
  FiTarget,
  FiCheckCircle,
  FiArrowRight
} from "react-icons/fi";

const Services = () => {
  const services = [
    { 
      id: 1, 
      title: "Full-Stack Development", 
      description: "End-to-end web applications using React, Django, and modern frameworks.",
      icon: <FiCode />,
      color: "from-blue-500 to-cyan-500",
      features: ["React/Next.js Frontend", "Django/Node.js Backend", "Modern Architecture", "Scalable Solutions"]
    },
    { 
      id: 2, 
      title: "UI/UX Design", 
      description: "Clean, user-friendly interfaces with focus on user experience and responsive design.",
      icon: <FiLayout />,
      color: "from-purple-500 to-pink-500",
      features: ["User-Centered Design", "Responsive Layouts", "Prototyping", "Design Systems"]
    },
    { 
      id: 3, 
      title: "API Development", 
      description: "RESTful and GraphQL APIs with Django REST Framework and Node.js.",
      icon: <FiServer />,
      color: "from-green-500 to-emerald-500",
      features: ["REST & GraphQL APIs", "Authentication", "Rate Limiting", "Documentation"]
    },
    { 
      id: 4, 
      title: "Database Design", 
      description: "Scalable database architecture with PostgreSQL, MongoDB, and Redis.",
      icon: <FiDatabase />,
      color: "from-orange-500 to-yellow-500",
      features: ["PostgreSQL/MongoDB", "Query Optimization", "Data Modeling", "Performance Tuning"]
    },
    { 
      id: 5, 
      title: "DevOps & Deployment", 
      description: "CI/CD pipelines, Docker, and cloud deployment on AWS/Heroku.",
      icon: <FiCloud />,
      color: "from-cyan-500 to-blue-500",
      features: ["Docker Containers", "CI/CD Pipelines", "Cloud Deployment", "Monitoring"]
    },
    { 
      id: 6, 
      title: "Technical Consulting", 
      description: "Architecture planning and technical strategy for startups.",
      icon: <FiUsers />,
      color: "from-pink-500 to-purple-500",
      features: ["Tech Strategy", "Architecture Review", "Team Mentoring", "Best Practices"]
    },
  ];

  const technologies = [
    { name: "React/Next.js", icon: "⚛️" },
    { name: "Django/Flask", icon: "🐍" },
    { name: "Node.js", icon: "⬢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
  ];

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <FiZap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Development Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Full-stack solutions that build trust and drive results through clean code, 
            intuitive interfaces, and scalable architecture.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">6+</div>
              <div className="text-sm text-gray-400">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Full-Stack</div>
              <div className="text-sm text-gray-400">Development Focus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">End-to-End</div>
              <div className="text-sm text-gray-400">Project Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Modern</div>
              <div className="text-sm text-gray-400">Tech Stack</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Service Number */}
              <div className="absolute top-4 right-4 text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity">
                {service.id.toString().padStart(2, '0')}
              </div>
              
              {/* Icon */}
              <div className={`mb-6 p-3 w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                <div className="text-2xl text-white">
                  {service.icon}
                </div>
              </div>
              
              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FiTarget className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold">Technologies I Work With</h3>
            </div>
            <span className="text-sm text-gray-400">Modern & Proven Stack</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">My Development Process</h3>
              <p className="text-gray-300 mb-6">
                I follow an agile, iterative approach that ensures quality, transparency, 
                and timely delivery at every stage of the project.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { step: "01", title: "Discovery", desc: "Requirements & Planning" },
                  { step: "02", title: "Design", desc: "UI/UX & Architecture" },
                  { step: "03", title: "Development", desc: "Coding & Implementation" },
                  { step: "04", title: "Deployment", desc: "Testing & Launch" },
                ].map((item) => (
                  <div key={item.step} className="bg-white/5 p-4 rounded-xl">
                    <div className="text-sm text-blue-400 font-bold mb-1">{item.step}</div>
                    <div className="font-medium mb-1">{item.title}</div>
                    <div className="text-xs text-gray-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-green-400" />
                  What You Get
                </h4>
                <div className="space-y-3">
                  {[
                    "Clean, maintainable code",
                    "Responsive, modern design",
                    "Scalable architecture",
                    "Regular updates",
                    "Post-launch support",
                    "Documentation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how I can help bring your ideas to life with cutting-edge 
              technology and proven development practices.
            </p>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span>Start a Conversation</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;