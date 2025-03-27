"use client";
import { FaEye, FaPen, FaHeart } from "react-icons/fa";

export default function Vision() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">LA EMPRESA</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MISIÓN */}
          <div>
            <div className="w-full bg-sky-500 text-white font-semibold py-3 rounded">
              <FaPen className="inline mr-2" />
              MISIÓN
            </div>
            <div className="bg-white shadow-md mt-4 p-4 rounded text-center text-gray-700">
              Superarnos a nosotros mismos, brindando un servicio de transporte
              de excelencia cómodo, seguro y accesible para todos.
            </div>
          </div>

          {/* VISIÓN */}
          <div>
            <div className="w-full bg-sky-500 text-white font-semibold py-3 rounded">
              <FaEye className="inline mr-2" />
              VISIÓN
            </div>
            <div className="bg-white shadow-md mt-4 p-4 rounded text-center text-gray-700">
              Liderar el mercado de transporte de pasajeros en la Costa Atlántica y
              poder expandir nuestros servicios.
            </div>
          </div>

          {/* VALORES */}
          <div>
            <div className="w-full bg-sky-500 text-white font-semibold py-3 rounded">
              <FaHeart className="inline mr-2" />
              VALORES
            </div>
            <div className="bg-white shadow-md mt-4 p-4 rounded text-left text-gray-700 space-y-2">
              <p><strong>Calidad:</strong> ofrecer un servicio con un nivel de calidad y valor que los clientes merecen.</p>
              <p><strong>Humildad:</strong> queremos ser nosotros mismos, de forma honesta y sencilla.</p>
              <p><strong>Compromiso con los clientes:</strong> ofrecer un servicio de gran calidad que satisfaga las necesidades de los usuarios.</p>
              <p><strong>Renovación:</strong> buscar siempre nuevas maneras de mejorar estructuralmente y personalmente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
