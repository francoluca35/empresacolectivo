"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../Component/Navbar";

const eventos = [
  { year: "2012", img: "/timeline/2012.jpg", text:"hola"},
  { year: "2013", img: "/timeline/2013.jpg", text:"todo"},
  { year: "2014", img: "/timeline/2014.jpg", text:"bien"},
  { year: "2015", img: "/timeline/2015.jpg", text:"si"},
  { year: "2016", img: "/timeline/2016.jpg", text:"vos"},
  { year: "2017", img: "/timeline/2017.jpg", text:"?"},
];

export default function Timeline() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
  <>
  <Navbar />
  <section className="bg-white py-16 px-4 mt-20 md:mt-14">
        
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10">Nuestra Historia</h2>

      <div className="overflow-x-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center md:justify-center px-4">

          {eventos.map((evento, index) => (
            <div key={index} className="text-center relative">
              {/* Línea punteada superior */}
              <div className="w-px h-10 bg-dotted border-l-2 border-dotted border-gray-400 mx-auto mb-2"></div>

              {/* Imagen circular */}
              <div
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-red-500 overflow-hidden cursor-pointer hover:scale-105 transition"
                onClick={() => setSelectedImg(evento.img)}
              >
                <Image src={evento.img} alt={evento.year} width={128} height={128} className="w-full h-full object-cover" />
              </div>

              {/* Año */}
              <div className="mt-3 font-semibold text-gray-700 text-lg">{evento.year}</div>
              <div className="mt-3  text-gray-700 text-lg">{evento.text}</div>

              {/* Línea punteada inferior */}
              <div className="w-px h-10 bg-dotted border-l-2 border-dotted border-gray-400 mx-auto mt-2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full relative">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <Image src={selectedImg} alt="Imagen ampliada" width={800} height={600} className="w-full h-auto object-contain rounded" />
          </div>
        </div>
      )}
    </section>
    </>
  );
}
