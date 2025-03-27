import { MongoClient } from "mongodb";
import crypto from "crypto";

const MONGODB_URI = "mongodb://localhost:27017";
const DB_NAME = "ventapasajes";
const COLLECTION_NAME = "pagos";

const connectDB = async () => {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(DB_NAME);
  return { client, db };
};

export async function POST(req) {
  try {
    const { client, db } = await connectDB();
    const pagosCollection = db.collection(COLLECTION_NAME);

    const body = await req.json();
    console.log("🟡 Datos recibidos:", body);

    // Validar campos obligatorios
    if (
      !body.nombreCompleto || !body.dni || !body.destino || !body.metodoPago ||
      !body.origen || !body.cantidad
    ) {
      return new Response(JSON.stringify({ error: "Faltan campos obligatorios" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const nuevoPago = {
      id: crypto.randomBytes(5).toString("hex"),
      origen: body.origen,
      destino: body.destino,
      localidad: body.localidad || "",
      horario: body.horario || "",
      horariosalida: body.horariosalida || "",
      horariollegada: body.horariollegada || "",
      fechaDesde: body.fechaDesde || "",
      fechaHasta: body.fechaHasta || "",
      butaca: body.butaca || "",
      cantidad: parseInt(body.cantidad),
      precioUnitario: parseFloat(body.precio),
      total: parseFloat(body.total),
      nombreCompleto: body.nombreCompleto,
      direccion: body.direccion || "",
      dni: body.dni,
      telefono: body.telefono || "",
      correo: body.correo || "",
      codigoPostal: body.codigoPostal || "",
      metodoPago: body.metodoPago,
      fechaViaje: body.fechaViaje || new Date().toISOString(),
      fechaRegistro: new Date().toISOString(),
    };

    const result = await pagosCollection.insertOne(nuevoPago);

    client.close();
    return new Response(JSON.stringify({ success: true, pago: nuevoPago }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al guardar pago:", error);
    return new Response(JSON.stringify({ error: "Error al guardar pago" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
