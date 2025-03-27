"use client";
import { useState } from "react";

const micros = [
  {
    src: "Assets/Unidades/unidad-4.png  ",
    descripcion: "Moderno bus cama con aire acondicionado y TV.",
    interno:"Interno 67",
  },
  {
    src: "Assets/Unidades/unidad-4.png  ",
    descripcion: "Unidad doble piso con asientos reclinables.",
    interno:"Interno 45",
  },
  {
    src: "Assets/Unidades/unidad-4.png  ",
    descripcion: "Micro panorámico ideal para viajes largos.",
    interno:"Interno 56",
  },
  {
    src: "Assets/Unidades/unidad-4.png  ",
    descripcion: "Unidad ejecutiva equipada con Wi-Fi y cargadores.",
    interno:"Interno 10",
  },
  {
    src: "Assets/Unidades/unidad-4.png  ",
    descripcion: "Interior cómodo y moderno con luz de lectura.",
    interno:"Interno 20",
  },
  {
    src: "Assets/Unidades/unidad-4.png  ",
    descripcion: "Bus turístico con ventanales amplios y confort.",
    interno:"Interno 30",
  },
];

export default function Unidades() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="unidades" className="bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10 uppercase">
        Nuestras Unidades
      </h2>

      {/* Collage estilo "recuerdos" */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {/* Columna 1 */}
        <div className="flex flex-col gap-4">
          <img
            src={micros[0].src}
            onClick={() => setSelected(micros[0])}
            className="rounded-lg object-cover h-40 w-full cursor-pointer"
          />
          <img
            src={micros[1].src}
            onClick={() => setSelected(micros[1])}
            className="rounded-lg object-cover h-24 w-full cursor-pointer"
          />
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col gap-4">
          <img
            src={micros[2].src}
            onClick={() => setSelected(micros[2])}
            className="rounded-lg object-cover h-full max-h-64 w-full cursor-pointer"
          />
        </div>

        {/* Columna 3 */}
        <div className="flex flex-col gap-4">
          <img
            src={micros[3].src}
            onClick={() => setSelected(micros[3])}
            className="rounded-lg object-cover h-48 w-full cursor-pointer"
          />
          <img
            src={micros[4].src}
            onClick={() => setSelected(micros[4])}
            className="rounded-lg object-cover h-40 w-full cursor-pointer"
          />
        </div>

        {/* Columna 4: Branding tipo "VERANO 2030" */}
        <div className="bg-white text-center p-6 border border-gray-200 rounded-lg flex flex-col justify-center items-center">
          <h3 className="text-gray-700 uppercase tracking-widest mb-2 text-sm">
            Empresa
          </h3>
          <h2 className="text-3xl font-extrabold text-red-600 leading-tight">
            TRANSPORTE
          </h2>
          <h2 className="text-4xl font-bold text-gray-800 -mt-1">MAURELLO</h2>
          <p className="text-xs text-gray-400 mt-4">Galería de unidades 2025</p>
        </div>
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
                <h3 className="font-semibold text-lg mb-2">TRANSPORTE MAURELLO</h3>
                <p>{selected.descripcion}</p>
              </div>
              <p className="text-gray-400 mt-4 text-xs">{selected.interno}</p>
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
