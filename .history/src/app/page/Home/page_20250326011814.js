// app/page.js o app/components/Home.js

"use client";
import { useState } from "react";

export default function Home() {
  const [tipoViaje, setTipoViaje] = useState("ida");

  return (
    <main className="min-h-screen bg-red-400 flex justify-center items-center p-4">
      <div className="bg-white bg-opacity-80 rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden max-w-6xl w-full">
        {/* Buscador */}
        <div className="w-full md:w-1/2 p-6 flex flex-col space-y-4 bg-black/50 rounded-xl text-white">
          <input type="text" placeholder="Desde" className="rounded-xl px-4 py-3 text-black" />
          <input type="text" placeholder="Hasta" className="rounded-xl px-4 py-3 text-black" />

          {/* Tipo de viaje */}
          <div className="flex bg-black rounded-xl p-2 space-x-4 justify-center">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="tipo"
                value="ida"
                checked={tipoViaje === "ida"}
                onChange={() => setTipoViaje("ida")}
              />
              <span>Sólo IDA</span>
            </label>
            <label className="flex items-center space-x-1">
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

          <input type="date" className="rounded-xl px-4 py-3 text-black" />
          {tipoViaje === "idaYvuelta" && (
            <input type="date" className="rounded-xl px-4 py-3 text-black" />
          )}

          <input
            type="number"
            min="1"
            placeholder="# Pasajero(s)"
            className="rounded-xl px-4 py-3 text-black"
          />

          <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-3 font-bold text-lg">
            Buscar
          </button>
        </div>

        {/* Carrusel */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center relative bg-sky-200">
          <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-md">
            <img
              src="/descuento1.jpg"
              alt="promo"
              className="absolute w-full h-full object-cover animate-fade"
            />
            {/* Podés agregar más imágenes con lógica para cambiar cada X segundos o usar una librería */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-4 py-2 rounded-xl text-black font-semibold">
              ¡Verano sin límites! 🌞
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
