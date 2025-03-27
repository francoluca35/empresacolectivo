"use client";
import { useEffect, useState } from "react";

export default function useBuscarBoletos() {
  const [boletos, setBoletos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/buscar")
      .then((res) => res.json())
      .then((data) => {
        setBoletos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar boletos:", err);
        setLoading(false);
      });
  }, []);

  return { boletos, loading };
}
