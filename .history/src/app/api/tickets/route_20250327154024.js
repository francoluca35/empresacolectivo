import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ventapasajes");
    const collection = db.collection("tickets");

    const tickets = await collection.find().toArray();

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
    console.error("❌ Error en la API de tickets:", error);
    return new Response(JSON.stringify({ error: "Error al obtener los tickets" }), {
      status: 500,
    });
  }
}
