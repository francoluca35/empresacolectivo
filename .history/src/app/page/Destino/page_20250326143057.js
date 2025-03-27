"use client";
import Link from "next/link";

const destinos = [
  {
    nombre: "BUENOS AIRES",
    imagen: "/destinos/buenos-aires.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "SAN CLEMENTE",
    imagen: "/destinos/san-clemente.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "LAS TONINAS",
    imagen: "/destinos/las-toninas.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "SANTA TERESITA",
    imagen: "/destinos/santa-teresita.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "MAR DEL TUYÚ",
    imagen: "/destinos/mar-del-tuyu.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "SAN BERNARDO",
    imagen: "/destinos/san-bernardo.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "PINAMAR",
    imagen: "/destinos/pinamar.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "VILLA GESELL",
    imagen: "/destinos/villa-gesell.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "CLARÁ DEL MAR",
    imagen: "/destinos/clara-del-mar.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "CHACO",
    imagen: "/destinos/chaco.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "CORRIENTES",
    imagen: "/destinos/corrientes.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "SANTIAGO DEL ESTERO",
    imagen: "/destinos/santiago-del-estero.jpg", // Reemplaza con la ruta de tu imagen
  },
  {
    nombre: "TUCUMÁN",
    imagen: "/destinos/tucuman.jpg", // Reemplaza con la ruta de tu imagen
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