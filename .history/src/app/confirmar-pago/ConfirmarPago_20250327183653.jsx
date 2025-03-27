"use client";
import { useSearchParams } from "next/navigation";
import usePagosCheck from '@/Hook/usePagosCheck';

export default function ConfirmarPagoContent() {
  const searchParams = useSearchParams();
  const { guardarPago } = usePagosCheck();

  const datosPago = Object.fromEntries(searchParams.entries());

  const confirmar = async () => {
    try {
      await guardarPago({
        ...datosPago,
        fechaViaje: new Date().toISOString(),
      });
      alert("✅ ¡Pago confirmado y guardado!");
      window.location.href = "/";
    } catch (err) {
      alert("❌ Hubo un error al guardar el pago.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded text-center">
      <h2 className="text-xl font-bold mb-4">¿Deseás confirmar el pago?</h2>
      <p>Total a pagar: <strong>${datosPago.total}</strong></p>
      <p>Nombre: <strong>{datosPago.nombreCompleto}</strong></p>

      <button
        className="bg-green-600 text-white px-6 py-2 mt-4 rounded"
        onClick={confirmar}
      >
        Confirmar pago
      </button>
    </div>
  );
}
