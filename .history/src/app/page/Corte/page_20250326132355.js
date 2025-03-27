import React from 'react';

const Corte = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-800">
      {/* Fondo */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Assets/fondo-home.jpg')" }}></div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center p-8">
        {/* Imagen del autobús */}
        <div className="w-full md:w-1/2 p-4">
          <img src="/tu-imagen-de-autobus.png" alt="Autobús Rápido Tata" className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Texto y botones */}
        <div className="w-full md:w-1/2 p-4 text-white text-center md:text-left">
          <p className="text-xl font-semibold mb-4">¡Elegí comfort, elegí Seguridad con nuestras nuevas unidades!</p>
          <p className="text-sm mb-6">Rápido Tata renovó sus unidades y cuenta hoy en día con una de las flotas más modernas del país. Además de su service a bordo que nos permite brindar mayor confort y bienestar a lo largo del viaje.</p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full">Conocer unidades</button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full">Realizar viaje</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corte;