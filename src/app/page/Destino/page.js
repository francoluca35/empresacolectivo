"use client";
import Link from "next/link";

const destinos = [
  {
    nombre: "BUENOS AIRES",
    imagen: "Assets/destinos/bsas.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "SAN CLEMENTE",
    imagen: "Assets/destinos/sanclemente.jpeg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "LAS TONINAS",
    imagen: "Assets/destinos/sanclemente.jpeg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "SANTA TERESITA",
    imagen: "Assets/destinos/sanclemente.jpeg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "MAR DEL TUYÚ",
    imagen: "Assets/destinos/sanclemente.jpeg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "SAN BERNARDO",
    imagen: "Assets/destinos/sanclemente.jpeg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "PINAMAR",
    imagen: "Assets/destinos/sanclemente.jpeg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "VILLA GESELL",
    imagen: "Assets/destinos/sanclemente.jpeg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "MAR DEL PLATA",
    imagen: "Assets/destinos/sanclemente.jpeg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "CORDOBA",
    imagen: "Assets/destinos/cordoba.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "SAN LUIS",
    imagen: "Assets/destinos/corrientes.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "SANTIAGO DEL ESTERO",
    imagen: "Assets/destinos/santiago-del-estero.jpeg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "TUCUMÁN",
    imagen: "Assets/destinos/tucuman.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "CHACO",
    imagen: "Assets/destinos/chaco.jpg", // Reemplaza con la ruta de tu imagen
  },
];

export default function Destino() {
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
                <Link
                  href={`/destinos/${destino.nombre.toLowerCase().replace(/ /g, "-")}`}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full inline-block"
                >
                  Compra tu viaje
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}