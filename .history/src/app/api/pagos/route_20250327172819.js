import clientPromise from "@/lib/mongodb";
import crypto from "crypto";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("ventapasajes");
    const pagosCollection = db.collection("pagos");

    const body = await req.json();
    console.log("🟡 Datos recibidos:", body);

    // Validación de campos obligatorios
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

    await pagosCollection.insertOne(nuevoPago);

    return new Response(JSON.stringify({ success: true, pago: nuevoPago }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("❌ Error al guardar pago:", error);
    return new Response(JSON.stringify({ error: "Error al guardar pago" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
