// src/app/api/tickets/route.js
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectDB();

    const tickets = await mongoose.connection.db
      .collection("tickets")
      .find()
      .toArray();

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
    console.error("❌ Error al obtener tickets:", error);
    return new Response(JSON.stringify({ error: "Error al obtener los tickets" }), {
      status: 500,
    });
  }
}
