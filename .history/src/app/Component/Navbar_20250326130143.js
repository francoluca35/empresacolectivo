"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white  text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-red-600">Maurello S.A</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-400 transition text-red-600">Inicio</Link>
          <Link href="#servicios" className="hover:text-blue-400 transition text-red-600">Servicios</Link>
          <Link href="#contacto" className="hover:text-blue-400 transition text-red-600">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
