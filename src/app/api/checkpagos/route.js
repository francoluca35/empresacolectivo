import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb://localhost:27017"; // Asegurate que sea el mismo que usás en agregar-viaje
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db("ventapasajes");
    const collection = db.collection("pagos");

    const pagos = await collection.find({}).toArray();
    return Response.json(pagos);
  } catch (error) {
    console.error("Error al obtener viajes:", error);
    return Response.json({ success: false, error: "Error al obtener viajes" }, { status: 500 });
  }
}
