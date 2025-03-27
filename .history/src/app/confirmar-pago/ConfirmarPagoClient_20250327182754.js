"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ConfirmarPagoClient() {
  const searchParams = useSearchParams();
  const idPago = searchParams.get("id");

  useEffect(() => {
    console.log("ID del pago:", idPago);
    // podés hacer fetch o lógica con el ID acá
  }, [idPago]);

  return (
    <div className="p-4 text-black">
      <h1 className="text-xl font-bold">Confirmación de Pago</h1>
      {idPago ? (
        <p>Estamos procesando el pago con ID: <strong>{idPago}</strong></p>
      ) : (
        <p>No se encontró ningún ID de pago.</p>
      )}
    </div>
  );
}
