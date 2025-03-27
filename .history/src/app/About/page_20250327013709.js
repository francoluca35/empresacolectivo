"use client";
import Navbar from "../Component/Navbar";

export default function About() {
  return (
    <>
    <Navbar/>
    <section className="bg-white py-16 px-4 mt-12">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-12">¿Quiénes somos?</h2>

        {/* Línea de tiempo */}
        <div className="relative border-l-4 border-red-600 pl-6 space-y-10">
          {/* ITEM 1 */}
          <div>
            <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-2.5 top-1.5"></div>
            <h3 className="text-xl font-semibold text-red-600">1990 - Fundación</h3>
            <p className="text-gray-600">
              Maurello S.A nace como una empresa familiar con la misión de brindar transporte confiable y seguro.
            </p>
          </div>

          {/* ITEM 2 */}
          <div>
            <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-2.5 top-[6.3rem]"></div>
            <h3 className="text-xl font-semibold text-red-600">2005 - Expansión regional</h3>
            <p className="text-gray-600">
              Incorporamos nuevas rutas y aumentamos nuestra flota para cubrir toda la costa atlántica.
            </p>
          </div>

          {/* ITEM 3 */}
          <div>
            <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-2.5 top-[13rem]"></div>
            <h3 className="text-xl font-semibold text-red-600">2015 - Renovación de flota</h3>
            <p className="text-gray-600">
              Sumamos nuevas unidades de última generación con mayor confort y seguridad.
            </p>
          </div>

          {/* ITEM 4 */}
          <div>
            <div className="absolute w-4 h-4 bg-red-600 rounded-full -left-2.5 top-[19.5rem]"></div>
            <h3 className="text-xl font-semibold text-red-600">2024 - Plataforma digital</h3>
            <p className="text-gray-600">
              Lanzamos nuestra app y sistema de reservas online para mejorar la experiencia del pasajero.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
