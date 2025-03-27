"use client";
import { FaHeadphones, FaBullhorn, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export default function Contacto() {
  return (
    <>
    <Navbar />
    <section
  className="relative bg-cover bg-center bg-no-repeat mt-20 md:mt-20 py-20 px-6 text-center"
  style={{
    backgroundImage: "url('/Assets/fondo-contacto.png')",
  }}
>
  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />
  <div className="relative z-10">
    {/* todo el contenido actual va adentro de este div */}
  </div>
</section>



      <p className="text-gray-700 text-sm mb-2">¿Te querés comunicar con nosotros?</p>
      <h2 className="text-red-600 font-semibold mb-10">
        Te dejamos nuestros canales oficiales
      </h2>

      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {/* Atención al cliente */}
        <div className="border-4 border-red-600 rounded-2xl py-6 px-4 shadow-md">
          <h3 className="text-xl text-red-600 font-bold mb-2">ATENCIÓN AL CLIENTE:</h3>
          <p className="text-gray-800 flex justify-center items-center gap-2">
            <FaHeadphones /> info@maurello.com
          </p>
        </div>

        {/* Marketing */}
        <div className="border-4 border-red-600 rounded-2xl py-6 px-4 shadow-md">
          <h3 className="text-xl text-red-600 font-bold mb-2">MARKETING:</h3>
          <p className="text-gray-800 flex justify-center items-center gap-2">
            <FaBullhorn /> marketing@maurello.com
          </p>
        </div>

        {/* WhatsApp */}
        <div className="border-4 border-red-600 rounded-2xl py-6 px-4 shadow-md">
          <h3 className="text-xl text-red-600 font-bold mb-2">WHATSAPP:</h3>
          <p className="text-gray-800 flex justify-center items-center gap-2 mb-2">
            <FaWhatsapp /> +54 9 11 3434 5000
          </p>
          <p className="text-xs text-gray-500">HORARIO DE ATENCIÓN: LUNES A DOMINGOS 24HS</p>
        </div>

        {/* Sugerencias y Reclamos */}
        <div className="border-4 border-red-600 rounded-2xl py-6 px-4 shadow-md cursor-pointer hover:bg-red-50 transition">
          <a
            href="#sugerencias"
            className="flex justify-center items-center gap-2 text-red-600 font-bold text-lg"
          >
            <FaExternalLinkAlt /> SUGERENCIAS Y RECLAMOS
          </a>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
