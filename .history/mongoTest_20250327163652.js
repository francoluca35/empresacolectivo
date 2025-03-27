const { MongoClient } = require("mongodb");
require("dns").setDefaultResultOrder("ipv4first"); // 👈 FIX

const uri = "mongodb://franco:123456franco@cluster0-shard-00-00.tfbhlgz.mongodb.net:27017,cluster0-shard-00-01.tfbhlgz.mongodb.net:27017,cluster0-shard-00-02.tfbhlgz.mongodb.net:27017/ventapasajes?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority";

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
