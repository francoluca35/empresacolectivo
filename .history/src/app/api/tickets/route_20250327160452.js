import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function GET() {
  try {
    console.log("🚀 Iniciando API /api/tickets");
    await connectDB();
    console.log("✅ Conexión a MongoDB exitosa");

    const tickets = await mongoose.connection.db
      .collection("tickets")
      .find()
      .toArray();

    console.log("📦 Tickets obtenidos:", tickets);

    const parsedTickets = tickets.map(ticket => ({
      ...ticket,
      id: ticket._id.toString(),
    }));

    return new Response(JSON.stringify(parsedTickets), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("❌ Error al obtener tickets:", error.message, error);
    return new Response(JSON.stringify({ error: "Error al obtener los tickets" }), {
      status: 500,
    });
  }
}

