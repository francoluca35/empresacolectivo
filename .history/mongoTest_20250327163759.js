const { MongoClient } = require("mongodb");
require("dns").setDefaultResultOrder("ipv4first"); // 👈 FIX

const uri = "mongodb+srv://franco:123456franco@cluster0.tfbh1gz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  try {
    const client = await new MongoClient(uri).connect();
    const db = client.db("ventapasajes");
    const tickets = await db.collection("tickets").find({}).limit(1).toArray();
    console.log("✅ Conexión exitosa:", tickets);
  } catch (err) {
    console.error("❌ Fallo de conexión:", err);
  }
}

main();
