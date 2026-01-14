import { FiExternalLink, FiGithub, FiGlobe, FiZap, FiTrendingUp, FiUsers, FiTarget, FiCpu } from "react-icons/fi";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Zentry",
      tagline: "Social Productivity Platform",
      description: "A social productivity platform that helps users stay organized, accountable, and connected. Combines productivity tools with social interaction in a unified dashboard.",
      tech: ["HTML", "CSS", "JavaScript", "Django", "Python"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#",
      features: [
        "Vision board for goal planning",
        "Real-time chat with other users", 
        "Gmail integration with AI email tracking",
        "Progress analytics & pointing system",
        "Notes & calendar management"
      ]
    },
    {
      title: "PitchMetrics",
      tagline: "Football Insight & Analytics Platform",
      description: "A football analytics platform delivering deep insights across leagues, players, and seasons with real-time and historical data visualization.",
      tech: ["Python", "Django", "JavaScript", "HTML", "CSS"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#",
      features: [
        "Expected goals (xG) & GA metrics",
        "Player & team performance comparisons",
        "Interactive data visualizations",
        "Top performer rankings",
        "Season-long trend analysis"
      ]
    },
    {
      title: "AristroStudio",
      tagline: "Interior Design Website with Custom Analytics",
      description: "Professional interior design platform with real-time analytics dashboard showing user activity, visitor stats, and engagement metrics.",
      tech: ["Django", "Python", "JavaScript", "HTML", "CSS"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#",
      features: [
        "Custom admin analytics panel",
        "Live user activity tracking",
        "Most-viewed pages analytics",
        "Visitor count monitoring",
        "Project portfolio showcase"
      ]
    },
    {
      title: "Auxigent",
      tagline: "AI-based Customer Support System",
      description: "AI-driven customer support platform focused on automated responses, user query handling, and scalable backend integration.",
      tech: ["React.js", "TypeScript", "MongoDB"],
      category: "frontend",
      liveLink: "#",
      githubLink: "#",
      features: [
        "AI-powered automated responses",
        "Scalable backend architecture",
        "Efficient query handling",
        "Improved customer experience",
        "Live project deployment"
      ]
    },
    {
      title: "WriteAnon",
      tagline: "Open-source Anonymous Writing Platform",
      description: "Platform for anonymous writing and sharing in a safe, distraction-free environment with clean UI and secure data handling.",
      tech: ["React.js", "TypeScript", "MongoDB"],
      category: "frontend",
      liveLink: "#",
      githubLink: "#",
      features: [
        "Anonymous writing & sharing",
        "Secure data handling",
        "Clean, distraction-free UI",
        "Community-driven development",
        "Open-source platform"
      ]
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: <FiGlobe /> },
    { id: "fullstack", label: "Full-Stack", icon: <FiCpu /> },
    { id: "frontend", label: "Frontend", icon: <FiTarget /> },
    { id: "django", label: "Django", icon: <FiTrendingUp /> }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || 
    project.category === activeFilter ||
    (activeFilter === "django" && project.tech.includes("Django"))
  );

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <FiZap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Real-world applications combining innovative ideas with robust technical execution
          </p>

          {/* Project Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{projects.length}</div>
              <div className="text-sm text-gray-400">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{projects.filter(p => p.tech.includes("Django")).length}</div>
              <div className="text-sm text-gray-400">Django Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{projects.filter(p => p.liveLink !== "#").length}+</div>
              <div className="text-sm text-gray-400">Live Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span className="text-sm font-medium">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:scale-[1.01]"
            >
              <div className="grid lg:grid-cols-3 gap-6 p-6">
                {/* Left: Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Project Header */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`text-3xl ${
                        project.title === "Zentry" ? "text-blue-400" :
                        project.title === "PitchMetrics" ? "text-green-400" :
                        project.title === "AristroStudio" ? "text-purple-400" :
                        project.title === "Auxigent" ? "text-cyan-400" : "text-pink-400"
                      }`}>
                        {project.title === "Zentry" && "🧭"}
                        {project.title === "PitchMetrics" && "⚽"}
                        {project.title === "AristroStudio" && "🏡"}
                        {project.title === "Auxigent" && "🔗"}
                        {project.title === "WriteAnon" && "📝"}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-gray-400">{project.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-300 flex items-center gap-2">
                      <FiCpu className="w-4 h-4" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-300 flex items-center gap-2">
                      <FiTarget className="w-4 h-4" />
                      Key Features
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Links & Category */}
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
                    project.category === "fullstack" 
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  }`}>
                    <span className="text-sm font-medium">
                      {project.category === "fullstack" ? "Full-Stack" : "Frontend"}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span className="font-medium">View Live</span>
                      </a>
                    )}
                    
                    {project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span className="font-medium">View Code</span>
                      </a>
                    )}
                    
                    {project.liveLink === "#" && project.githubLink === "#" && (
                      <div className="text-center py-3 text-gray-500 text-sm">
                        Demo available upon request
                      </div>
                    )}
                  </div>

                  {/* Project Highlights */}
                  <div className="pt-6 border-t border-white/10">
                    <h4 className="font-bold text-gray-300 mb-3">Highlights</h4>
                    <div className="space-y-2">
                      {project.tech.includes("Django") && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-sm text-gray-400">Django Backend</span>
                        </div>
                      )}
                      {project.tech.includes("React.js") && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-400">React Frontend</span>
                        </div>
                      )}
                      {project.liveLink !== "#" && (
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-sm text-gray-400">Live Deployment</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block max-w-2xl">
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Build Something Together?</h3>
              <p className="text-gray-400 mb-6">
                Have a project in mind? Let's discuss how we can turn your ideas into reality.
              </p>
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <span>Start a Conversation</span>
                <FiUsers className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;