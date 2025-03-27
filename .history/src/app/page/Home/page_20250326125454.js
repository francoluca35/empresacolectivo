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
      className="flex justify-center items-center p-28"
      style={{
        backgroundImage: "url('/Assets/fondo-home.jpg')", // Fondo para el main
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row max-w-6xl w-full">
        {/* Buscador */}
        <div className="w-full md:w-1/2 p-8 flex flex-col space-y-4 text-black bg-opacity-30 bg-black backdrop-blur-lg rounded-3xl shadow-2xl mr-4">
          <input
            type="text"
            placeholder="Desde"
            className="rounded-xl bg-white px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
          />
          <input
            type="text"
            placeholder="Hasta"
            className="rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
          />

          {/* Tipo de viaje */}
          <div className="flex bg-white text-white rounded-xl p-3 space-x-6 justify-center font-medium">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tipo"
                value="ida"
                checked={tipoViaje === "ida"}
                onChange={() => setTipoViaje("ida")}
              />
              <span className="text-black">Sólo IDA</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="tipo"
                value="idaYvuelta"
                checked={tipoViaje === "idaYvuelta"}
                onChange={() => setTipoViaje("idaYvuelta")}
              />
              <span className="text-black">IDA y VUELTA</span>
            </label>
          </div>

          <input
            type="date"
            className="rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
          />
          {tipoViaje === "idaYvuelta" && (
            <input
              type="date"
              className="rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          )}

          <input
            type="number"
            min="1"
            placeholder="# Pasajero(s)"
            className="rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
          />

          <button className="bg-cyan-700 hover:bg-cyan-600 text-white rounded-xl py-3 font-bold text-lg transition">
            Buscar
          </button>
        </div>

        {/* Carrusel de promociones */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center  "> 
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