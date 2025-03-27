"use client";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from '@heroicons/react/solid'; // Asegúrate de instalar heroicons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-red-600">Maurello S.A</h1>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition text-red-600">Inicio</Link>
          <Link href="/" className="hover:text-blue-400 transition text-red-600">Nosotros</Link>
          <Link href="#servicios" className="hover:text-blue-400 transition text-red-600">Servicios</Link>
          <Link href="#contacto" className="hover:text-blue-400 transition text-red-600">Contacto</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-600">
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
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
  );
}