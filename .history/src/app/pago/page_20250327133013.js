"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import usePagosCheck from "@/Hook/usePagosCheck";

export default function Pago() {
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
      nombreCompleto: formData.nombreCompleto,
      direccion: formData.direccion,
      dni: formData.dni,
      telefono: formData.telefono,
      correo: formData.correo,
      codigoPostal: formData.codigoPostal,
      metodoPago: formData.metodoPago,
    };

    try {
      await guardarPago(datosPago);
      alert("Pago confirmado y registrado en la base de datos");
    } catch (error) {
      alert("Error al registrar el pago");
    }
  };

  return (
    <section className="min-h-screen w-full bg-red-400 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Detalles del Pasaje</h2>
        <div className="text-sm text-gray-700 space-y-1 mb-4">
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

        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="nombreCompleto" placeholder="Nombre Completo" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="text" name="dni" placeholder="DNI" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="tel" name="telefono" placeholder="Teléfono" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="email" name="correo" placeholder="Correo Electrónico" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="text" name="localidad" placeholder="Localidad" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="text" name="codigoPostal" placeholder="Código Postal" onChange={handleChange} required className="w-full p-2 border rounded" />

          <label className="block text-gray-700 mt-2">Método de Pago:</label>
          <select name="metodoPago" onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Mercado Pago">Mercado Pago</option>
          </select>

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
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded w-full mt-2"
          >
            Ir a pagar
          </button>
        </form>
      </div>
    </section>
  );
}
