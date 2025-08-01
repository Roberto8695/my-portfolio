'use client';

export default function ContactSection() {
  return (
    <div className="section flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-500 to-gray-600 text-white" data-section="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Contacto
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? ¡Me encantaría saber de ti! 
          Trabajemos juntos para crear algo increíble.
        </p>
        
        
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Nombre" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
            </div>
            <input 
              type="text" 
              placeholder="Asunto" 
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
            />
            <textarea 
              placeholder="Mensaje" 
              rows={4}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 resize-none"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
