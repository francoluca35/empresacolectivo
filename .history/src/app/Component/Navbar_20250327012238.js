"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("es-AR", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">


      <div className="w-full bg-red-600 text-white text-sm py-2 px-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="text-center md:text-right font-medium">{time}</div>{" "}

        <div className="flex justify-center md:justify-start items-center space-x-4 mb-1 md:mb-0">
          <a
            href="https://www.instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-blue-400"
          >
            <FaInstagram className="text-white" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-blue-400"
          >
            <FaFacebookF className="text-white" />
            <span>Facebook</span>
          </a>
        </div>

      </div>

  
      <nav className="w-full bg-white text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
          <img
            src="Assets/navbar.png"
            alt="Maurello S.A Logo"
            width={200}
            height={50}
            priority
          />

          <div className="hidden md:flex space-x-6 font-semibold">
            <Link
              href="/"
              className="hover:text-blue-400 transition text-red-600"
            >
              Inicio
            </Link>
            <Link
              href="/"
              className="hover:text-blue-400 transition text-red-600"
            >
              Nosotros
            </Link>
            <Link
              href="#servicios"
              className="hover:text-blue-400 transition text-red-600"
            >
              Servicios
            </Link>
            <Link
              href="#contacto"
              className="hover:text-blue-400 transition text-red-600"
            >
              Contacto
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-red-600">
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white py-4 px-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="hover:text-blue-400 transition text-red-600"
              >
                Inicio
              </Link>
              <Link
                href="/"
                className="hover:text-blue-400 transition text-red-600"
              >
                Nosotros
              </Link>
              <Link
                href="#servicios"
                className="hover:text-blue-400 transition text-red-600"
              >
                Servicios
              </Link>
              <Link
                href="#contacto"
                className="hover:text-blue-400 transition text-red-600"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
