
import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ventapasajes", // nombre de tu base
    });
    console.log("✅ MongoDB conectado");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB", error);
    throw error;
  }
}
