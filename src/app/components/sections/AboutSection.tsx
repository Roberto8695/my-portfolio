'use client';

export default function AboutSection() {
  return (
    <div className="section flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white" data-section="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Sobre mí
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Soy un desarrollador apasionado por crear soluciones digitales que combinan 
            funcionalidad y estética. Con experiencia en tecnologías modernas, me enfoco 
            en escribir código limpio y crear interfaces intuitivas.
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, 
            contribuyendo a proyectos open source y explorando las últimas tendencias 
            en desarrollo web.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
              React
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              Node.js
            </span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
              TypeScript
            </span>
            <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm">
              Next.js
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <div className="w-72 h-72 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
