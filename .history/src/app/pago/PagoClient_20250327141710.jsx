"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import usePagosCheck from "@/Hook/usePagosCheck";
import BackArrow from "../Component/backArrow";

export default function PagoClient() {
  const searchParams = useSearchParams();
  const { guardarPago } = usePagosCheck();

  const origen = searchParams.get("origen");
  const destino = searchParams.get("destino");
  const localidad = searchParams.get("localidad");
  const horario = searchParams.get("horario");
  const horariodesalida = searchParams.get("horariosalida");
  const horariodellegada = searchParams.get("horariollegada");
  const fechaDesde = searchParams.get("fechaDesde");
  const fechaHasta = searchParams.get("fechaHasta");
  const butaca = searchParams.get("butaca");
  const precio = parseFloat(searchParams.get("precio")) || 0;
  const cantidad = parseInt(searchParams.get("cantidad")) || 1;
  const total = precio * cantidad;

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    dni: "",
    telefono: "",
    correo: "",
    direccion: "",
    localidad: "",
    codigoPostal: "",
    metodoPago: "Efectivo",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datosPago = {
      fechaViaje: new Date().toISOString(),
      origen,
      destino,
      localidad,
      horario,
      horariodesalida,
      horariodellegada,
      fechaDesde,
      fechaHasta,
      butaca,
      cantidad,
      total,
      ...formData,
    };

    try {
      await guardarPago(datosPago);
      alert("Pago confirmado y registrado en la base de datos");
    } catch (error) {
      alert("Error al registrar el pago");
    }
  };

  return (
    <section className="h-screen w-full bg-red-400 flex items-center justify-center px-4">
      <BackArrow />
      <div className="w-full max-w-2xl bg-black/40 rounded-lg shadow-lg p-6 h-[95vh] overflow-hidden flex flex-col justify-between">
        <div className="space-y-1 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-white">Detalles del Pasaje</h2>
          <div className="text-sm text-white space-y-1">
            <p><strong>Origen:</strong> {origen}</p>
            <p><strong>Destino:</strong> {destino}</p>
            <p><strong>Localidad:</strong> {localidad}</p>
            <p><strong>Turno:</strong> {horario}</p>
            <p><strong>Horario salida:</strong> {horariodesalida}</p>
            <p><strong>Horario llegada:</strong> {horariodellegada}</p>
            <p><strong>Ida:</strong> {fechaDesde}</p>
            <p><strong>Vuelta:</strong> {fechaHasta}</p>
            <p><strong>Precio por boleto:</strong> ${precio}</p>
            <p><strong>Tipo de butaca:</strong> {butaca}</p>
            <p><strong>Cantidad:</strong> {cantidad}</p>
            <p><strong>Total a Pagar:</strong> ${total}</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-4 space-y-2">
            {[
              { name: "nombreCompleto", label: "Nombre Completo" },
              { name: "dni", label: "DNI" },
              { name: "telefono", label: "Teléfono" },
              { name: "correo", label: "Correo Electrónico", type: "email" },
              { name: "direccion", label: "Dirección" },
              { name: "localidad", label: "Localidad" },
              { name: "codigoPostal", label: "Código Postal" },
            ].map(({ name, label, type = "text" }) => (
              <input
                key={name}
                type={type}
                name={name}
                placeholder={label}
                onChange={handleChange}
                required
                className="w-full p-2 border bg-slate-200 rounded placeholder:text-black"
              />
            ))}

            <label className="block text-white font-medium mt-2">Método de Pago:</label>
            <select
              name="metodoPago"
              onChange={handleChange}
              required
              className="w-full p-2 border bg-slate-200 text-black placeholder:text-black rounded"
            >
              <option value="Efectivo">Efectivo</option>
              <option value="Transferencia">Transferencia</option>
              <option value="Mercado Pago">Mercado Pago</option>
            </select>
          </form>
        </div>

        <button
          type="button"
          onClick={() => {
            const queryParams = new URLSearchParams({
              origen,
              destino,
              localidad,
              horario,
              horariosalida: horariodesalida,
              horariollegada: horariodellegada,
              fechaDesde,
              fechaHasta,
              butaca,
              precio,
              cantidad,
              total,
              ...formData,
            }).toString();

            window.location.href = `/confirmar-pago?${queryParams}`;
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-full mt-4 transition"
        >
          Ir a pagar
        </button>
      </div>
    </section>
  );
}
