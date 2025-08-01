'use client';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comercio electrónico con React, Node.js y PostgreSQL',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🛒',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades colaborativas',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'tRPC'],
      image: '📋',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Sitio web personal con animaciones y diseño responsive',
      technologies: ['Next.js', 'GSAP', 'Tailwind CSS', 'FullPage.js'],
      image: '🎨',
      link: '#'
    }
  ];

  return (
    <div className="section flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-600 to-gray-700 text-white" data-section="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
          Proyectos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105 group">
              <div className="p-6 text-center bg-gradient-to-br from-gray-700 to-gray-800">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs border border-blue-600/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300">
                  Ver proyecto
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
            Ver todos los proyectos
          </button>
        </div>
      </div>
    </div>
  );
}
