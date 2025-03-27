"use client";
import { useState } from "react";
import Image from "next/image";

const micros = [
  {
    src: "/unidades/micro1.jpg",
    descripcion: "Moderno bus cama con aire acondicionado y TV.",
  },
  {
    src: "/unidades/micro2.jpg",
    descripcion: "Unidad doble piso con asientos reclinables.",
  },
  {
    src: "/unidades/micro3.jpg",
    descripcion: "Micro panorámico ideal para viajes largos.",
  },
  {
    src: "/unidades/micro4.jpg",
    descripcion: "Unidad ejecutiva equipada con Wi-Fi y cargadores.",
  },
  {
    src: "/unidades/micro5.jpg",
    descripcion: "Interior cómodo y moderno con luz de lectura.",
  },
];

export default function Unidades() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10">Nuestras Unidades</h2>

      {/* Galería estilo collage */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {micros.map((micro, i) => (
          <div key={i} className="cursor-pointer group overflow-hidden rounded shadow-lg">
            <img
              src={micro.src}
              alt={`Micro ${i + 1}`}
              onClick={() => setSelected(micro)}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal estilo Instagram */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-4xl w-full rounded-lg flex flex-col md:flex-row overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen */}
            <div className="md:w-2/3 w-full h-[300px] md:h-auto">
              <img
                src={selected.src}
                alt="Ampliada"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Descripción */}
            <div className="p-6 md:w-1/3 flex flex-col justify-between text-gray-800 text-sm">
              <div>
                <h3 className="font-semibold text-lg mb-2">Empresa Maurello</h3>
                <p>{selected.descripcion}</p>
              </div>
              <p className="text-gray-400 mt-4 text-xs">Publicado recientemente</p>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-red-600 text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
