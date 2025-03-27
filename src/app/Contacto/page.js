"use client";
import { FaHeadphones, FaBullhorn, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export default function Contacto() {
  return (
    <>
    <Navbar />
    <section
  className="bg-white bg-cover bg-center bg-no-repeat mt-20 md:mt-20 py-20 px-6 text-center"
  style={{
    backgroundImage: "url('/Assets/fondo-contacto.png')", // con / delante porque está en /public
  }}
>



      <p className="text-white text-sm mb-2">¿Te querés comunicar con nosotros?</p>
      <h2 className="text-red-600 text-xl uppercase font-semibold mb-10">
        Te dejamos nuestros canales oficiales
      </h2>

      <div className="max-w-2xl mx-auto flex flex-col gap-6 ">
        {/* Atención al cliente */}
        <div className="group border-4 border-red-600 rounded-2xl py-6 px-4 shadow-md hover:bg-white transition">
  <h3 className="text-xl text-white font-bold mb-2 group-hover:text-black">ATENCIÓN AL CLIENTE:</h3>
  <p className="text-white flex justify-center items-center gap-2 group-hover:text-black">
    <FaHeadphones /> info@maurello.com
  </p>
</div>



        {/* Marketing */}
        <div className="group border-4 border-red-600 rounded-2xl py-6 px-4 shadow-md hover:bg-white transition">
  <h3 className="text-xl text-white font-bold mb-2 group-hover:text-black">MARKETING:</h3>
  <p className="text-white flex justify-center items-center gap-2 group-hover:text-black">
    <FaBullhorn /> marketing@maurello.com
  </p>
</div>


        {/* WhatsApp */}
        <div className="group border-4 border-red-600 rounded-2xl py-6 px-4 shadow-md hover:bg-white transition">
  <h3 className="text-xl text-white font-bold mb-2 group-hover:text-black">WHATSAPP:</h3>
  <p className="text-white flex justify-center items-center gap-2 mb-2 group-hover:text-black">
    <FaWhatsapp /> +54 9 11 3434 5000
  </p>
  <p className="text-xs text-white group-hover:text-black">
    HORARIO DE ATENCIÓN: LUNES A DOMINGOS 24HS
  </p>
</div>


        {/* Sugerencias y Reclamos */}
        <div className="group border-4 border-red-600 rounded-2xl py-6 px-4 shadow-md cursor-pointer hover:bg-white transition">
  <a
    href="#sugerencias"
    className="flex justify-center items-center gap-2 text-white font-bold text-lg group-hover:text-black"
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
