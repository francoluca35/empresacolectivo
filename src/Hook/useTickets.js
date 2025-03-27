"use client";

import { useState, useEffect } from "react";

const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        console.log("🔵 Conectando a la API de MongoDB...");

        const response = await fetch("/api/tickets");
        if (!response.ok) {
          throw new Error(`❌ Error en API: ${await response.text()}`);
        }

        const data = await response.json();
        console.log("🎟️ Tickets obtenidos:", data);

        // Actualizar el estado con los tickets
        setTickets(data);
      } catch (err) {
        console.error("🚨 Error al obtener los tickets:", err);
        setError("Error al cargar los pasajes.");
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  return { tickets, loading, error };
};

export default useTickets;
