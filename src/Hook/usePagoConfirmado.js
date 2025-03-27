"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function usePagoConfirmado() {
  const [pago, setPago] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError("No se encontró el ID del pago");
      return;
    }

    const fetchPago = async () => {
      try {
        const res = await fetch(`/api/pagos/${id}`);
        if (!res.ok) throw new Error("Error al obtener el pago");

        const data = await res.json();
        setPago(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Ocurrió un error");
      } finally {
        setLoading(false);
      }
    };

    fetchPago();
  }, [id]);

  return { pago, loading, error };
}
