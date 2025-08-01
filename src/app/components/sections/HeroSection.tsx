'use client';

export default function HeroSection() {
  return (
    <div className="section flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white" data-section="hero">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Hola, soy [Tu Nombre]
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Desarrollador Full Stack & Diseñador UI/UX
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Creando experiencias digitales excepcionales con código limpio y diseño innovador
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Ver mi trabajo
        </button>
      </div>
    </div>
  );
}
