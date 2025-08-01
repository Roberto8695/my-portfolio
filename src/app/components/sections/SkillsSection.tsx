'use client';

export default function SkillsSection() {
  const skills = [
    { name: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP'], color: 'from-blue-400 to-cyan-400' },
    { name: 'Backend', technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'], color: 'from-green-400 to-emerald-400' },
    { name: 'Tools & Others', technologies: ['Git', 'Docker', 'AWS', 'Figma', 'Vercel'], color: 'from-purple-400 to-pink-400' }
  ];

  return (
    <div className="section flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-gray-800 text-white" data-section="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Habilidades
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-gray-300 hover:text-white transition-colors">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Siempre aprendiendo y explorando nuevas tecnologías
          </p>
        </div>
      </div>
    </div>
  );
}
