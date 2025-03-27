"use client";
import { useState } from "react";
import { FaEye, FaPen, FaHeart } from "react-icons/fa";

export default function Vision() {
  const [selected, setSelected] = useState("mision");

  const contenido = {
    mision: (
      <p className="text-gray-700 text-center">
        Superarnos a nosotros mismos, brindando un servicio de transporte de excelencia cómodo,
        seguro y accesible para todos.
      </p>
    ),
    vision: (
      <p className="text-gray-700 text-center">
        Liderar el mercado de transporte de pasajeros en la Costa Atlántica y poder expandir nuestros servicios.
      </p>
    ),
    valores: (
      <ul className="text-gray-700 text-left space-y-2">
        <li><strong>Calidad:</strong> ofrecer un servicio con un nivel de calidad y valor que los clientes merecen.</li>
        <li><strong>Humildad:</strong> queremos ser nosotros mismos, de forma honesta y sencilla.</li>
        <li><strong>Compromiso con los clientes:</strong> ofrecer un servicio de gran calidad que satisfaga las necesidades de los usuarios.</li>
        <li><strong>Renovación:</strong> buscar siempre nuevas maneras de mejorar estructuralmente y personalmente.</li>
      </ul>
    ),
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-red-500">LA EMPRESA</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Botón 1 - Misión */}
          <div>
            <button
              onClick={() => setSelected("mision")}
              className={`w-full bg-sky-500 text-white font-semibold py-3 rounded transition ${
                selected === "mision" ? "opacity-100" : "opacity-80"
              }`}
            >
              <FaPen className="inline mr-2" />
              MISIÓN
            </button>
            {selected === "mision" && (
              <div className="bg-white shadow-md mt-4 p-4 rounded">
                {contenido.mision}
              </div>
            )}
          </div>

          {/* Botón 2 - Visión */}
          <div>
            <button
              onClick={() => setSelected("vision")}
              className={`w-full bg-sky-500 text-white font-semibold py-3 rounded transition ${
                selected === "vision" ? "opacity-100" : "opacity-80"
              }`}
            >
              <FaEye className="inline mr-2" />
              VISIÓN
            </button>
            {selected === "vision" && (
              <div className="bg-white shadow-md mt-4 p-4 rounded">
                {contenido.vision}
              </div>
            )}
          </div>

          {/* Botón 3 - Valores */}
          <div>
            <button
              onClick={() => setSelected("valores")}
              className={`w-full bg-sky-500 text-white font-semibold py-3 rounded transition ${
                selected === "valores" ? "opacity-100" : "opacity-80"
              }`}
            >
              <FaHeart className="inline mr-2" />
              VALORES
            </button>
            {selected === "valores" && (
              <div className="bg-white shadow-md mt-4 p-4 rounded">
                {contenido.valores}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
