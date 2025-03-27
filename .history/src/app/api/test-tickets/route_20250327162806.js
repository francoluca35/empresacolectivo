import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function GET() {
  try {
    if (!uri) {
      return new Response(JSON.stringify({ error: "URI no definida" }), {
        status: 500,
      });
    }

    const client = await new MongoClient(uri).connect();
    const db = client.db("ventapasajes");
    const collection = db.collection("tickets");

    const tickets = await collection.find({}).limit(5).toArray();

    const parsed = tickets.map((t) => ({
      ...t,
      id: t._id?.toString(),
    }));

    return new Response(JSON.stringify(parsed), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error("🔥 Error en conexión directa:", err);
    return new Response(JSON.stringify({ error: "Fallo en conexión directa" }), {
      status: 500,
    });
  }
}
