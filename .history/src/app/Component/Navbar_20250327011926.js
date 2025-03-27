"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Barra superior con redes */}
      <div className="w-full bg-red-600 text-white text-sm py-2 px-6 flex justify-center md:justify-end items-center space-x-4">
        <a
          href="https://www.instagram.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 hover:text-blue-400"
        >
          <FaInstagram className="text-white" />
          <span>Seguinos en Instagram</span>
        </a>
        <a
          href="https://www.facebook.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 hover:text-blue-400"
        >
          <FaFacebookF className="text-white" />
          <span>Seguinos en Facebook</span>
        </a>
      </div>

      {/* Navbar principal */}
      <nav className="w-full bg-white text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo en vez de texto */}
          <img
            src="Assets/navbar.png"
            alt="Maurello S.A Logo"
            width={200}
            height={50}
            priority
          />

          <div className="hidden md:flex space-x-6 font-gold">
            <Link href="/" className="hover:text-blue-400 transition text-red-600">Inicio</Link>
            <Link href="/" className="hover:text-blue-400 transition text-red-600">Nosotros</Link>
            <Link href="#servicios" className="hover:text-blue-400 transition text-red-600">Servicios</Link>
            <Link href="#contacto" className="hover:text-blue-400 transition text-red-600">Contacto</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-red-600">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white py-4 px-6">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-blue-400 transition text-red-600">Inicio</Link>
              <Link href="/" className="hover:text-blue-400 transition text-red-600">Nosotros</Link>
              <Link href="#servicios" className="hover:text-blue-400 transition text-red-600">Servicios</Link>
              <Link href="#contacto" className="hover:text-blue-400 transition text-red-600">Contacto</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
