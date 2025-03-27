"use client";
import { useState, useEffect } from "react";

const imagenes = [
  "/Assets/fondo-home.jpg",
  "/Assets/fondo-home.jpg",
  "/Assets/fondo-home.jpg",
];

export default function Home() {
  const [tipoViaje, setTipoViaje] = useState("ida");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="flex justify-center items-center p-28" // Eliminamos min-h-screen
      style={{
        backgroundImage: "url('/Assets/fondo-home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-6xl w-full">
        {/* Buscador */}
        <div className="w-full md:w-1/2 p-8 flex flex-col space-y-4 text-black">
          <input
            type="text"
            placeholder="Desde"
            className="rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            placeholder="Hasta"
            className="rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Tipo de viaje */}
          <div className="flex bg-black text-white rounded-xl p-3 space-x-6 justify-center font-medium">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tipo"
                value="ida"
                checked={tipoViaje === "ida"}
                onChange={() => setTipoViaje("ida")}
              />
              <span>Sólo IDA</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tipo"
                value="idaYvuelta"
                checked={tipoViaje === "idaYvuelta"}
                onChange={() => setTipoViaje("idaYvuelta")}
              />
              <span>IDA y VUELTA</span>
            </label>
          </div>

          <input
            type="date"
            className="rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          {tipoViaje === "idaYvuelta" && (
            <input
              type="date"
              className="rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          )}

          <input
            type="number"
            min="1"
            placeholder="# Pasajero(s)"
            className="rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-3 font-bold text-lg transition">
            Buscar
          </button>
        </div>

        {/* Carrusel de promociones */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-opacity-10 bg-gradient-to-br from-blue-400/0 to-sky-200/100">
          <div className="w-full max-w-md h-auto overflow-hidden rounded-2xl shadow-xl transition-all duration-700">
            <img
              src={imagenes[index]}
              alt={`promo-${index}`}
              className="w-full h-auto object-cover rounded-2xl transition-opacity duration-1000"
            />
          </div>
        </div>
      </div>
    </main>
  );
}