"use client";
import Image from "next/image";
import Navbar from "../Component/Navbar";

export default function Servicios() {
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
            {/* Servicio Cama */}
            <div className="transition-transform duration-300 hover:scale-105">
              <h4 className="font-semibold text-lg border-b border-yellow-500 pb-2 mb-4 inline-block">
                Servicio Cama
              </h4>
              <img
                src="Assets/servicios/s-cama.jpg"
                alt="Servicio Cama"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded shadow"
              />
              <p className="text-sm text-gray-700 mt-4 text-left">
                Moderna línea de unidades doble piso, con una fila de asientos dobles y otra simple, lo que permite disponer de mayor espacio entre butacas. Las mismas son reclinables y extensibles hasta 160°. Además el servicio cuenta con aire acondicionado, calefacción y luces de lectura, entre otros.
              </p>
            </div>

            {/* Servicio Semicama */}
            <div className="transition-transform duration-300 hover:scale-105">
              <h4 className="font-semibold text-lg border-b border-yellow-500 pb-2 mb-4 inline-block">
                Servicio Semicama
              </h4>
              <img
                src="Assets/servicios/s-scama.jpg"
                alt="Servicio Semicama"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded shadow"
              />
              <p className="text-sm text-gray-700 mt-4 text-left">
                Modernas unidades de doble piso. Cuentan con dos filas de asientos dobles. La distancia entre butacas es amplia permitiendo desplegar el apoya piernas y reclinar aún más el respaldo para descansar con comodidad. Incluye video, luces de lectura, aire acondicionado y calefacción.
              </p>
            </div>

            {/* Servicio Especial */}
            <div className="transition-transform duration-300 hover:scale-105">
              <h4 className="font-semibold text-lg border-b border-yellow-500 pb-2 mb-4 inline-block">
                Servicios Especiales
              </h4>
              <img
                src="Assets/servicios/s-especiales.jpg"
                alt="Servicio Especial"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded shadow"
              />
              <p className="text-sm text-gray-700 mt-4 text-left">
                <strong>Rápido Tata, es una empresa experimentada en viajes especiales y charters.</strong><br />
                Adaptándonos a las necesidades de cada cliente, ofrecemos varias opciones para que usted o su organización puedan optar a la hora de contratar un servicio de transporte.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
