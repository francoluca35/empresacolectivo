import { connectDB } from "@/lib/mongodb";
import { MongoClient } from "mongodb";

export async function GET(req) {
  try {
    await connectDB();

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("ventapasajes");
    const tickets = await db.collection("tickets").find().toArray();

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
