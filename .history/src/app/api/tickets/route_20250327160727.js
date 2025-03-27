import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ventapasajes");
    const tickets = await db.collection("tickets").find({}).toArray();

    const parsed = tickets.map((t) => ({
      ...t,
      id: t._id.toString(),
    }));

    return new Response(JSON.stringify(parsed), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (err) {
    console.error("❌ Error en GET tickets:", err);
    return new Response(
      JSON.stringify({ error: "Error al obtener los tickets" }),
      { status: 500 }
    );
  }
}
