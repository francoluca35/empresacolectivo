import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db("ventapasajes"); // 👈 asegurate que sea el nombre exacto de tu BD
    const collection = db.collection("tickets"); // 👈 esta es tu colección

    const tickets = await collection.find().toArray();

    // Convertir _id de ObjectId a string para evitar errores en el frontend
    const parsedTickets = tickets.map(ticket => ({
      ...ticket,
      id: ticket._id.toString(), // 👈 así lo usás fácil en el frontend
    }));

    return Response.json(parsedTickets);
  } catch (error) {
    console.error("❌ Error al obtener tickets:", error);
    return Response.json({ error: "Error al obtener los tickets" }, { status: 500 });
  }
}
