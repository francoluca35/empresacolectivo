"use client";
import { useState, useEffect } from "react";

export default function usePagosCheck() {
  const [pagos, setPagos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener pagos desde la API
  useEffect(() => {
    const fetchPagos = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/pagos");
        if (!response.ok) throw new Error("Error al obtener pagos");
        const data = await response.json();
        setPagos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPagos();
  }, []);

  // Guardar un nuevo pago en la API
const guardarPago = async (datos) => {
  try{
  const response = await fetch("/api/pagos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
 } );


      if (!response.ok) throw new Error("Error al guardar pago");

      const nuevoPago = await response.json();
      setPagos((prevPagos) => [...prevPagos, nuevoPago.pago]);
    } catch (error) {
      console.error("Error al guardar el pago:", error);
      setError(error.message);
    }
  };

  return { pagos, guardarPago, loading, error };
}
