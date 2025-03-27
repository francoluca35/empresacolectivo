"use client";
import { useState } from 'react';

const Home = () => {
  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');
  const [tipoViaje, setTipoViaje] = useState('IDA');
  const [fechaIda, setFechaIda] = useState('26/03/2025');
  const [fechaVuelta, setFechaVuelta] = useState('26/03/2025');
  const [pasajeros, setPasajeros] = useState(1);

  const promociones = [
    {
      imagen: '/promo1.jpg', // Reemplaza con la ruta de tu imagen
      texto: '¡CUOTAS SIN INTERÉS! Viaja de la mano de BancoCiudad',
    },
    {
      imagen: '/promo2.jpg', // Reemplaza con la ruta de tu imagen
      texto: '¡Aprovecha nuestras ofertas de verano!',
    },
    // Agrega más promociones aquí
  ];

  const [promoActual, setPromoActual] = useState(0);

  const siguientePromo = () => {
    setPromoActual((promoActual + 1) % promociones.length);
  };

  const anteriorPromo = () => {
    setPromoActual((promoActual - 1 + promociones.length) % promociones.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-400">
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-96 mb-4 md:mb-0 md:mr-4">
          <input
            type="text"
            placeholder="Desde"
            value={desde}
            onChange={(e) => setDesde(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="Hasta"
            value={hasta}
            onChange={(e) => setHasta(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          />
          <div className="flex justify-between mb-2">
            <button
              onClick={() => setTipoViaje('IDA')}
              className={`p-2 rounded-md ${
                tipoViaje === 'IDA' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              Solo IDA
            </button>
            <button
              onClick={() => setTipoViaje('IDA Y VUELTA')}
              className={`p-2 rounded-md ${
                tipoViaje === 'IDA Y VUELTA' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              IDA Y VUELTA
            </button>
          </div>
          <input
            type="text"
            placeholder="26/03/2025"
            value={fechaIda}
            onChange={(e) => setFechaIda(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          />
          <input
            type="text"
            placeholder="26/03/2025"
            value={fechaVuelta}
            onChange={(e) => setFechaVuelta(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          />
          <input
            type="number"
            placeholder="1 Pasajero(s)"
            value={pasajeros}
            onChange={(e) => setPasajeros(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
          />
          <button className="w-full bg-pink-500 text-white p-2 rounded-md">Buscar</button>
        </div>

        <div className="bg-pink-200 rounded-lg shadow-md p-6 w-full md:w-96">
          <div className="relative">
            <img
              src={promociones[promoActual].imagen}
              alt={`Promoción ${promoActual + 1}`}
              className="w-full rounded-md"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <p className="text-white text-center font-bold">{promociones[promoActual].texto}</p>
            </div>
            <button
              onClick={anteriorPromo}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={siguientePromo}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;