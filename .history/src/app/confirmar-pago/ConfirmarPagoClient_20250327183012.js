"use client";

import usePagoConfirmado from "@/Hook/usePagoConfirmado";

export default function ConfirmarPagoClient() {
  const { pago, loading, error } = usePagoConfirmado();

  if (loading) return <p>Cargando información de pago...</p>;
  if (error) return <p className="text-red-600">❌ {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">✅ Pago confirmado</h1>
      <p><strong>Nombre:</strong> {pago.nombreCompleto}</p>
      <p><strong>Destino:</strong> {pago.destino}</p>
      <p><strong>Fecha:</strong> {pago.fechaViaje}</p>
      <p><strong>Total:</strong> ${pago.total}</p>
      <p><strong>Método de pago:</strong> {pago.metodoPago}</p>
    </div>
  );
}
