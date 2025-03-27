"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-0 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Mi Empresa</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-400 transition">Inicio</Link>
          <Link href="#servicios" className="hover:text-blue-400 transition">Servicios</Link>
          <Link href="#contacto" className="hover:text-blue-400 transition">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
