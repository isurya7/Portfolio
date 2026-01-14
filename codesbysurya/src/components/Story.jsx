// Story.jsx
import { useState } from "react";
import { 
  FiBookOpen, 
  FiTarget, 
  FiHeart, 
  FiAward, 
  FiGlobe,
  FiBriefcase,
  FiBook,
  FiCode,
  FiTrendingUp
} from "react-icons/fi";

const Story = () => {
  const [activeTab, setActiveTab] = useState('education');

  const sections = {
    education: {
      title: "Education",
      icon: <FiBook />,
      content: [
        {
          year: "2024 – 2027",
          title: "B.Tech in Computer Science & Engineering",
          subtitle: "Techno India University",
          description: "Currently pursuing a bachelor's degree, focusing on advanced computer science concepts, algorithms, and software engineering principles."
        },
        {
          year: "2021 – 2024",
          title: "Diploma in Computer Science & Technology",
          subtitle: "Berhampore Polytechnic College",
          description: "Completed diploma with hands-on training in programming, web development, and computer fundamentals. Built strong foundation in practical software development."
        },
        {
          year: "2009 – 2021",
          title: "Secondary Education",
          subtitle: "Mary Immaculate School",
          description: "Completed schooling with a focus on science and mathematics, developing strong analytical and problem-solving skills from an early age."
        }
      ]
    },
    journey: {
      title: "Career Journey",
      icon: <FiTrendingUp />,
      content: [
        {
          year: "2023",
          title: "Remote Internship",
          subtitle: "Skill Vertex",
          description: "Worked on practical industry projects, enhancing problem-solving skills, technical understanding, and teamwork in real-world development environments. Gained experience in collaborative development and project lifecycle."
        },
        {
          year: "2021 - Present",
          title: "Self-Directed Learning",
          subtitle: "Personal Projects & Skill Development",
          description: "Continuously building projects to master modern web technologies including React, Node.js, and full-stack development. Exploring AI/ML concepts and staying updated with industry trends."
        },
        {
          year: "Future",
          title: "Software Developer Role",
          subtitle: "Looking for Opportunities",
          description: "Seeking full-time opportunities to contribute to innovative projects, work with experienced teams, and grow as a professional developer."
        }
      ]
    },
    passions: {
      title: "Interests & Passions",
      icon: <FiHeart />,
      content: [
        {
          title: "⚽ Football",
          subtitle: "Strategy & Analysis",
          description: "Deeply passionate about the game, tactical analysis, and playing. Follow major leagues and enjoy discussing team strategies and player performances."
        },
        {
          title: "👗 Fashion",
          subtitle: "Style & Personal Expression",
          description: "Strong interest in fashion aesthetics, personal style development, and understanding how clothing reflects personality and culture."
        },
        {
          title: "🎧 EDM Music",
          subtitle: "Creative Energy",
          description: "Love creating playlists, exploring artists across electronic music genres, and playing EDM. Appreciate the technical production aspects and emotional impact of electronic music."
        },
        {
          title: "💻 Technology Trends",
          subtitle: "Continuous Learning",
          description: "Constantly exploring new frameworks, tools, and methodologies in software development. Passionate about open-source contributions and developer communities."
        }
      ]
    }
  };

  const coreValues = [
    {
      icon: <FiCode />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code that stands the test of time."
    },
    {
      icon: <FiTarget />,
      title: "Continuous Growth",
      description: "Always learning new technologies and improving skills through projects and challenges."
    },
    {
      icon: <FiBriefcase />,
      title: "Professional Integrity",
      description: "Delivering quality work with honesty, reliability, and attention to detail."
    },
    {
      icon: <FiGlobe />,
      title: "Global Perspective",
      description: "Understanding diverse user needs and building inclusive, accessible solutions."
    }
  ];

  return (
    <section id="story" className="py-24 px-6 bg-gradient-to-b from-gray-900/30 to-black/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <FiBookOpen className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Journey & Vision</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beyond <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Code</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            From classroom learning to real-world projects – a journey in technology and personal passions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left column - Personal Info */}
          <div className="relative group">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10 overflow-hidden">
                  {/* Profile */}
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">SP</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Surya Pramanik</h3>
                    <p className="text-blue-400">Computer Science Student & Developer</p>
                    <p className="text-gray-400 text-sm mt-2">Passionate about building meaningful software</p>
                  </div>
                  
                  {/* Quick Facts */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold border-b border-white/10 pb-2">Quick Facts</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Current Status</span>
                        <span className="text-green-400">Student Developer</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Education Level</span>
                        <span className="text-blue-400">B.Tech (Ongoing)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Experience</span>
                        <span className="text-purple-400">Internship + Projects</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Focus Areas</span>
                        <span className="text-pink-400">Full-Stack, Web Dev</span>
                      </div>
                    </div>
                  </div>

                  {/* Personal Interests */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="text-lg font-bold mb-4">Personal Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">⚽ Football</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">🎧 EDM Music</span>
                      <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm">👗 Fashion</span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">💻 Tech</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right columns - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {section.icon}
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            <div className="space-y-6">
              {sections[activeTab].content.map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/20"
                >
                  {item.year && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm mb-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {item.year}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-blue-300 font-medium mb-3">{item.subtitle}</p>
                  )}
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  
                  {/* Interactive hover effect */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-full h-px bg-gradient-to-r from-blue-500/30 to-transparent"></div>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <FiAward className="text-blue-400" />
                Core Values & Approach
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl text-blue-400 mt-1 group-hover:scale-110 transition-transform">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-3">{value.title}</h4>
                        <p className="text-gray-400 text-sm">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Vision */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">🚀</div>
                <div>
                  <h4 className="text-xl font-bold mb-3">Looking Ahead</h4>
                  <p className="text-gray-200 leading-relaxed">
                    "As the journey continues in computer science, the focus remains on bridging the gap between 
                    academic learning and industry needs. The goal is to contribute to innovative projects 
                    that solve real problems while maintaining a balance between technical excellence and 
                    creative expression through personal interests."
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                    <span className="text-sm text-gray-400">— Surya Pramanik</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-4">Current Learning Focus</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm">Advanced React Patterns</span>
                <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm">Node.js Backend</span>
                <span className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm">Database Design</span>
                <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm">UI/UX Principles</span>
                <span className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-sm">System Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;