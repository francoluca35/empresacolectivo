"use client";
import Image from "next/image";

export default function Servicios() {
  return (
    <section className="bg-white">
      {/* Banner superior */}
      <div className="relative w-full h-[250px] md:h-[350px]">
        <Image
          src="/servicios/banner.jpg" // 🖼 Asegurate de tener esta imagen
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Servicio Cama */}
          <div>
            <h4 className="font-semibold text-lg border-b border-yellow-500 pb-2 mb-4 inline-block">
              Servicio Cama
            </h4>
            <Image
              src="/servicios/cama.jpg"
              alt="Servicio Cama"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded shadow"
            />
          </div>

          {/* Servicio Semicama */}
          <div>
            <h4 className="font-semibold text-lg border-b border-yellow-500 pb-2 mb-4 inline-block">
              Servicio Semicama
            </h4>
            <Image
              src="/servicios/semicama.jpg"
              alt="Servicio Semicama"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded shadow"
            />
          </div>

          {/* Servicio Especial */}
          <div>
            <h4 className="font-semibold text-lg border-b border-yellow-500 pb-2 mb-4 inline-block">
              Servicios Especiales
            </h4>
            <Image
              src="/servicios/especial.jpg"
              alt="Servicio Especial"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
