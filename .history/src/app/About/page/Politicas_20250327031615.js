"use client";
import Image from "next/image";

export default function Politicas() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Imagen */}
        <div className="w-full">
          <Image
            src="/politica-calidad.jpg"
            alt="Colectivo Rutatlantica"
            width={500}
            height={700}
            className="rounded shadow-md mx-auto"
          />
        </div>

        {/* Texto */}
        <div className="text-gray-700">
          <h2 className="text-3xl font-bold mb-6">POLÍTICA DEL SISTEMA DE GESTIÓN DE LA CALIDAD</h2>

          <p className="mb-4">
            <strong>MAURELLO S.A.</strong>, establece su Gestión de Calidad a partir de una visión estratégica basada en el desarrollo
            sustentable y el agregado de valor a sus servicios; fortaleciendo la relación con los clientes y proveedores, de acuerdo con esto,
            nuestra Política de Calidad se basa en los siguientes principios:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Desarrollar, aplicar y sostener un Sistema de Gestión de Calidad, basado en la Norma ISO 9001:2015 Sistemas de
              Gestión de la Calidad para la realización de sus actividades, servicios, procesos de la empresa.
            </li>
            <li>Promover la mejora continua en todos los procesos del sistema de gestión de la calidad.</li>
            <li>
              Desarrollar el potencial de nuestros colaboradores; por medio de la formación, el entrenamiento y el involucramiento de los Recursos Humanos.
            </li>
            <li>Difundir, revisar y actualizar la presente política cuando resulte necesario.</li>
            <li>
              Garantizar que las operaciones y procesos, actuales y futuros de la empresa, cumplan con los requisitos aplicables,
              legislación vigente y con los requerimientos y necesidades de nuestros clientes.
            </li>
            <li>Establecer metas y objetivos que concurran al cumplimiento de la presente política.</li>
          </ul>

          <p className="mt-6 font-semibold">
            ..............<br />
            PRESIDENTE MAURELLO S.A<br />
            <span className="text-sm font-normal">
              (POL-01-Política SGC Rev. 01 – Septiembre 2022)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
