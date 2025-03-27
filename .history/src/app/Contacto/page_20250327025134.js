"use client";
import { FaHeadphones, FaBullhorn, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="bg-white py-20 px-6 text-center">
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
  );
}
