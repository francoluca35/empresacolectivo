import Image from "next/image";

export default function Corte() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center md:justify-end">
      {/* Imagen de fondo */}
      <img
        src="/Assets/bus-bg.jpg"
        alt="colectivo fondo"
        className="absolute w-full h-full object-cover z-0"
      />

      {/* Capa diagonal responsiva */}
 {/* Fondo gris completo solo en mobile */}
<div className="absolute inset-0 z-10 block md:hidden">
  <div
    className="w-full h-full"
    style={{ background: "rgba(0,0,0,0.75)" }}
  />
</div>

{/* Fondo gris diagonal solo en escritorio */}
<div className="absolute right-0 top-0 w-full md:w-2/3 h-full z-10 hidden md:block">
  <div
    className="w-full h-full"
    style={{
      background: "rgba(0,0,0,0.75)",
      clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
    }}
  />
</div>


      {/* Contenido principal */}
      <div className="relative z-20 w-full max-w-7xl px-6 md:px-16 py-10 flex flex-col justify-center items-center md:items-end text-white text-balance">

        {/* Bus flotante */}
        <div className="w-full flex justify-center md:justify-end mb-6 -mt-10 md:-mt-20">
          <img
            src="/Assets/bus-flotante.png"
            alt="colectivo frontal"
            className="w-[280px] sm:w-[350px] md:w-[480px] drop-shadow-2xl transition-all"
          />
        </div>

        {/* Título */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-500 text-center md:text-right tracking-wide leading-snug">
          \\ Elegí comfort, elegí Seguridad con nuestras nuevas unidades. //
        </h2>

        {/* Descripción */}
        <p className="mt-4 text-sm sm:text-base text-gray-200 max-w-xl text-center md:text-right leading-relaxed">
          Transoporte Maurello renovó sus unidades y cuenta hoy en día con una de las flotas más moderna del país.
          Además de su servicio a bordo que nos permite brindar mayor confort y bienestar a lo largo del viaje.
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-end">
          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black px-6 py-2 rounded-lg flex items-center gap-2 font-medium shadow-sm">
            🔍 conocer unidades
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black px-6 py-2 rounded-lg flex items-center gap-2 font-medium shadow-sm">
            🛏️ conocer servicios
          </button>
        </div>
      </div>
    </section>
  );
}
