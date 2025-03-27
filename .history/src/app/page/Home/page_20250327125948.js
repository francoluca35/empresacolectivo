"use client";
import { useState, useEffect } from "react";
import useBuscarBoletos from "@/Hook/useBuscarBoletos";

const imagenes = [
  "/Assets/carrousel/1.jpg",
  "/Assets/carrousel/2.jpg",
  "/Assets/carrousel/3.jpg",
];

export default function Home() {
  const [tipoViaje, setTipoViaje] = useState("ida");
  const [index, setIndex] = useState(0);
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [pasajeros, setPasajeros] = useState(1);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const { boletos, loading } = useBuscarBoletos();

  const resultadosFiltrados = boletos.filter((boleto) => {
    return (
      boleto.origen.toLowerCase().includes(origen.toLowerCase()) &&
      boleto.destino.toLowerCase().includes(destino.toLowerCase())
    );
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="flex mt-14 justify-center items-center p-4 md:p-8 lg:p-28"
      style={{
        backgroundImage: "url('/Assets/fondo-home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex mt-10 md:mt-0 flex-col md:flex-row max-w-6xl w-full">
        {/* Buscador */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col space-y-4 text-black bg-opacity-30 bg-black backdrop-blur-lg rounded-3xl shadow-2xl md:mr-4">
          <input
            type="text"
            placeholder="Desde"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            className="rounded-xl bg-white text-black placeholder:text-black px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
          />
          <input
            type="text"
            placeholder="Hasta"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            className="rounded-xl bg-white text-black placeholder:text-black px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
          />

          {/* Tipo de viaje */}
          <div className="flex bg-white text-white rounded-xl p-3 space-x-6 justify-center font-medium">
            <label className="flex items-center space-x-2 ">
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
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="rounded-xl bg-white px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800 text-black"
          />
          {tipoViaje === "idaYvuelta" && (
            <input
              type="date"
              className="rounded-xl text-black bg-white px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
            />
          )}

          <input
            type="number"
            min="1"
            value={pasajeros}
            onChange={(e) => setPasajeros(e.target.value)}
            placeholder="Cantidad de Pasajero(s)"
            className="rounded-xl bg-white placeholder:text-black px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-800"
          />

          <button
            onClick={() => setMostrarResultados(true)}
            className="bg-cyan-700 hover:bg-cyan-600 text-white rounded-xl py-3 font-bold text-lg transition"
          >
            Buscar
          </button>

          {/* Resultados */}
          {mostrarResultados && !loading && (
            <div className="bg-white p-4 mt-4 rounded-xl text-black max-h-80 overflow-y-auto">
              <h2 className="font-bold mb-2">Resultados:</h2>
              {resultadosFiltrados.length > 0 ? (
                resultadosFiltrados.map((b, i) => (
                  <div key={i} className="border-b py-2">
                    <p><strong>Origen:</strong> {b.origen}</p>
                    <p><strong>Destino:</strong> {b.destino}</p>
                    <p><strong>Precio:</strong> ${b.precio}</p>
                    <p><strong>Horario:</strong> {b.horario}</p>
                    <p><strong>Tipo:</strong> {b.tipoServicio}</p>
                  </div>
                ))
              ) : (
                <p>No se encontraron boletos para tu búsqueda.</p>
              )}
            </div>
          )}
        </div>

        {/* Carrusel de promociones */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
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
