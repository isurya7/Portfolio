const Skills = () => {
    const skills = ["React", "JavaScript", "Tailwind CSS", "Django", "MongoDB", "Node.js", "Python", "Git"];
  
    return (
      <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
  
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full shadow hover:bg-blue-500 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  