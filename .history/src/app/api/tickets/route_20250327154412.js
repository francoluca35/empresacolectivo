// src/app/api/tickets/route.js
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectDB();
    const tickets = await db.collection("tickets").find().toArray();

    const parsedTickets = tickets.map(ticket => ({
      ...ticket,
      id: ticket._id.toString(),
    }));

    return new Response(JSON.stringify(parsedTickets), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error al obtener tickets:", error);
    return new Response(
      JSON.stringify({ error: "Error al obtener los tickets" }),
      { status: 500 }
    );
  }
}
