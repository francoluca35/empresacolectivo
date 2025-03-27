import Image from "next/image";

export default function Corte() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-end">
      {/* Imagen de fondo */}
      <img
        src="/bus-bg.jpg"
        alt="colectivo fondo"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay con contenido */}
      <div className="relative z-10 w-full md:w-1/2 h-full bg-black/70 flex flex-col justify-center items-center text-white px-6 md:px-16">
        {/* Bus flotante */}
        <div className="w-full flex justify-center md:justify-end mb-4">
          <img
            src="/Assets/bus-flotante.png"
            alt="colectivo frontal"
            className="w-[380px] md:w-[460px] drop-shadow-2xl"
          />
        </div>

        {/* Título */}
        <h2 className="text-lg md:text-2xl font-semibold text-yellow-500 text-center md:text-right tracking-wide">
          \\ Elegí comfort, elegí Seguridad con nuestras nuevas unidades. //
        </h2>

        {/* Texto descriptivo */}
        <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl text-center md:text-right leading-relaxed">
          Rápido Tata renovó sus unidades y cuenta hoy en día con una de las flotas más moderna del país. 
          Además de su servicio a bordo que nos permite brindar mayor confort y bienestar a lo largo del viaje.
        </p>

        {/* Botones */}
        <div className="mt-6 flex gap-4 md:justify-end justify-center flex-wrap">
          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black px-5 py-2 rounded-lg flex items-center gap-2 font-semibold">
            🔍 conocer unidades
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black px-5 py-2 rounded-lg flex items-center gap-2 font-semibold">
            🛏️ conocer servicios
          </button>
        </div>
      </div>
    </section>
  );
}
