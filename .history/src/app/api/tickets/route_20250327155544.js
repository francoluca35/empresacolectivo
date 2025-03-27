// src/app/api/tickets/route.js
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectDB();
    const tickets = await db.collection("tickets").find().toArray();

    const parsed = tickets.map((t) => ({ ...t, id: t._id.toString() }));

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ API ERROR:", err);
    return new Response(JSON.stringify({ error: "Error al obtener los tickets" }), {
      status: 500,
    });
  }
}
