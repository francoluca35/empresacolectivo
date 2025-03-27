import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-red-600 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start text-sm">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <img src="/logo-flechabus.png" alt="Logo" className="w-28" />
          </div>
  
          {/* Nosotros */}
          <div>
            <h4 className="font-bold mb-2">Nosotros</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Historia</a></li>
              <li><a href="#" className="hover:underline">Trabaja con nosotros</a></li>
            </ul>
          </div>
  
          {/* Información */}
          <div>
            <h4 className="font-bold mb-2">Información</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Encomiendas</a></li>
              <li><a href="#" className="hover:underline">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:underline">Términos y condiciones</a></li>
            </ul>
          </div>
  
          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold mb-2">REDES SOCIALES</h4>
            <div className="flex space-x-4 text-white text-xl">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
  
          {/* Botón de arrepentimiento */}
          <div className="flex justify-start md:justify-end">
            <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-bold shadow-md text-sm">
              BOTÓN DE ARREPENTIMIENTO
            </button>
          </div>
        </div>
  
        {/* Derechos reservados */}
        <div className="text-center p-4 text-sm text-white mt-6 bg-black">
          Todos los derechos reservados © 2019
        </div>
      </footer>
    );
  }
  