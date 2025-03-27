// testConnection.js
import { connectDB } from "./mongodb";

(async () => {
  try {
    await connectDB();
    console.log("✅ Conectado correctamente a MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB Atlas:", error);
  }
})();
