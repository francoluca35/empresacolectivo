"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../Component/Navbar";
import { motion } from "framer-motion";

export default function Servicios() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <>
      <Navbar />
      <section className="bg-white">
        {/* Banner superior */}
        <div className="relative mt-20 md:mt-30 w-full h-[250px] md:h-[350px]">
          <Image
            src="/servicios/banner.jpg"
            alt="Banner Servicios"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 uppercase">Servicios</h2>
          </div>
        </div>

        {/* Contenido */}
        <div className="max-w-6xl mx-auto py-16 px-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 uppercase">Servicios</h3>
          <p className="text-gray-700 mb-10">
            Nuestra empresa cuenta con una flota de unidades de última generación, equipadas con todo el confort y servicios necesarios
            para que usted disfrute de un viaje placentero. Ofrecemos tres clases de servicio: Semicama, Cama y Cama Ejecutivo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-black">
            {/* Tarjeta de servicio */}
            {[
              {
                titulo: "Servicio Cama",
                img: "Assets/servicios/s-cama.jpg",
                texto:
                  "Moderna línea de unidades doble piso, con una fila de asientos dobles y otra simple, lo que permite disponer de mayor espacio entre butacas. Las mismas son reclinables y extensibles hasta 160°. Además el servicio cuenta con aire acondicionado, calefacción y luces de lectura, entre otros.",
              },
              {
                titulo: "Servicio Semicama",
                img: "Assets/servicios/s-scama.jpg",
                texto:
                  "Modernas unidades de doble piso. Cuentan con dos filas de asientos dobles. La distancia entre butacas es amplia permitiendo desplegar el apoya piernas y reclinar aún más el respaldo. Incluye video, luces de lectura, aire acondicionado y calefacción.",
              },
              {
                titulo: "Servicios Especiales",
                img: "Assets/servicios/s-especiales.jpg",
                texto:
                  "Rápido Tata, es una empresa experimentada en viajes especiales y charters. Adaptándonos a las necesidades de cada cliente, ofrecemos varias opciones para que usted o su organización puedan optar a la hora de contratar un servicio de transporte.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="transition-transform duration-300 hover:scale-105"
              >
                <h4 className="font-semibold text-lg border-b border-red-500 pb-2 mb-4 inline-block">
                  {item.titulo}
                </h4>
                <img
                  src={item.img}
                  alt={item.titulo}
                  onClick={() => setModalImg(item.img)}
                  className="w-full h-auto object-cover rounded shadow cursor-pointer"
                />
                <p className="text-sm text-gray-700 mt-4 text-left">{item.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de imagen */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
          onClick={() => setModalImg(null)}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-red-600 text-2xl"
              onClick={() => setModalImg(null)}
            >
              &times;
            </button>
            <img src={modalImg} alt="Vista ampliada" className="w-full h-auto rounded" />
          </div>
        </div>
      )}
    </>
  );
}
