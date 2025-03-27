"use client";
import { useState } from "react";

const destinos = [
  {
    nombre: "BUENOS AIRES",
    imagen: "Assets/destinos/bsas.jpg",
    descripcion:
      "Descubrí Buenos Aires: historia, cultura, tango y una vibrante vida nocturna. Hospedaje en hotel 3 estrellas con desayuno incluido. Visitas al Obelisco, Caminito, Puerto Madero y más.",
  },
  {
    nombre: "SAN CLEMENTE",
    imagen: "Assets/destinos/sanclemente.jpeg",
    descripcion:
      "Playas familiares, Mundo Marino, Termas Marinas y paseo costero. Hospedaje en cabañas y hoteles cerca del mar. Ideal para vacaciones en familia.",
  },
  {
    nombre: "LAS TONINAS",
    imagen: "Assets/destinos/sanclemente.jpeg",
    descripcion:
      "Tranquilidad y mar: ideal para relajarse. Visita al laberinto temático y actividades en la playa. Alojamiento en departamentos y hoteles frente al mar.",
  },
  {
    nombre: "SANTA TERESITA",
    imagen: "Assets/destinos/sanclemente.jpeg",
    descripcion:
      "Paseos costeros, ferias artesanales, parques y vida tranquila. Hospedaje económico con opciones familiares. Excelente gastronomía local.",
  },
  {
    nombre: "MAR DEL TUYÚ",
    imagen: "Assets/destinos/sanclemente.jpeg",
    descripcion:
      "Un destino ideal para descansar y disfrutar de la playa. Paradores modernos y hospedajes accesibles. Opciones de recreación para todas las edades.",
  },
  {
    nombre: "SAN BERNARDO",
    imagen: "Assets/destinos/sanclemente.jpeg",
    descripcion:
      "Ambiente juvenil con bares, playa y entretenimiento. Hospedaje en hoteles céntricos. Ideal para escapadas con amigos o pareja.",
  },
  {
    nombre: "PINAMAR",
    imagen: "Assets/destinos/sanclemente.jpeg",
    descripcion:
      "Naturaleza, glamour y playa. Atractivos como bosques, shopping, paseos en cuatriciclos. Hoteles boutique y resorts de alta categoría.",
  },
  {
    nombre: "VILLA GESELL",
    imagen: "Assets/destinos/sanclemente.jpeg",
    descripcion:
      "Destino joven y vibrante. Playa, boliches, bares y paseos. Ideal para grupos de amigos. Hospedaje variado desde cabañas hasta hoteles.",
  },
  {
    nombre: "MAR DEL PLATA",
    imagen: "Assets/destinos/sanclemente.jpeg",
    descripcion:
      "La Perla del Atlántico. Casinos, playas extensas, teatro, gastronomía y centros comerciales. Hospedajes de todo tipo y para todos los gustos.",
  },
  {
    nombre: "CORDOBA",
    imagen: "Assets/destinos/cordoba.jpg",
    descripcion:
      "Sierras, ríos y cultura serrana. Visitas a Villa Carlos Paz, La Cumbrecita, Alta Gracia. Hospedaje en cabañas y hoteles con encanto serrano.",
  },
  {
    nombre: "SAN LUIS",
    imagen: "Assets/destinos/corrientes.jpg",
    descripcion:
      "Paisajes únicos, turismo aventura, embalses y sierras. Ideal para desconectar de la ciudad. Alojamientos rústicos y modernos.",
  },
  {
    nombre: "SANTIAGO DEL ESTERO",
    imagen: "Assets/destinos/santiago-del-estero.jpeg",
    descripcion:
      "Cultura del norte, termas, historia y tradición. Conocé Las Termas de Río Hondo y la cultura folklórica. Hospedaje cálido y regional.",
  },
  {
    nombre: "TUCUMÁN",
    imagen: "Assets/destinos/tucuman.jpg",
    descripcion:
      "La cuna de la Independencia. Ruinas, museos y paisajes verdes. Recorre Tafí del Valle y San Javier. Hoteles coloniales y ecolodges.",
  },
  {
    nombre: "CHACO",
    imagen: "Assets/destinos/chaco.jpg",
    descripcion:
      "Turismo cultural y natural. Descubrí el parque nacional El Impenetrable, esculturas al aire libre y gastronomía típica. Hospedaje rural y urbano.",
  },
];

export default function Destino() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);

  const abrirModal = (destino) => {
    setDestinoSeleccionado(destino);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setDestinoSeleccionado(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">NUESTROS DESTINOS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destinos.map((destino, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300"
            >
              <img
                src={destino.imagen}
                alt={destino.nombre}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{destino.nombre}</h2>
                <button
                  onClick={() => abrirModal(destino)}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full"
                >
                  Conocer sobre el viaje
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalAbierto && destinoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
              onClick={cerrarModal}
            >
              &times;
            </button>
            <img
              src={destinoSeleccionado.imagen}
              alt={destinoSeleccionado.nombre}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {destinoSeleccionado.nombre}
            </h2>
            <p className="text-gray-600">{destinoSeleccionado.descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
}
