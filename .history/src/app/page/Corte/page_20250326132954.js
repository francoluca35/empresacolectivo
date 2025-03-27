import Image from "next/image";

export default function Corte() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Fondo de la imagen general */}
      <img
        src="Assets/bus-bg.jpg"
        alt="colectivo fondo"
        className="absolute w-full h-full object-cover"
      />

      {/* Capa oscura en la derecha */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-black/70 backdrop-blur-sm z-10 flex flex-col justify-center px-10 text-white">
        
        {/* Micro flotante más grande y a la izquierda */}
        <div className="mb-4 relative md:-left-22 -left-10">
          <img
            src="/Assets/bus-flotante.png"
            alt="colectivo frontal"
            className="inline-block w-[550px] md:w-[6000px] drop-shadow-xl"
          />
        </div>

        {/* Texto */}
        <h2 className="text-xl md:text-2xl text-yellow-500 font-semibold tracking-wide text-center md:text-right">
          \\&nbsp;Elegí comfort, elegí Seguridad con nuestras nuevas unidades.&nbsp;//
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl md:text-right text-center">
          Rápido Tata renovó sus unidades y cuenta hoy en día con una de las flotas más moderna del país. 
          Además de su servicio a bordo que nos permite brindar mayor confort y bienestar a lo largo del viaje.
        </p>

        {/* Botones */}
        <div className="mt-6 flex gap-4 md:justify-end justify-center">
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
