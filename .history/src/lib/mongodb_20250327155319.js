// lib/mongodb.js
import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export async function connectDB() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();

  const db = client.db(); // Ya toma ventapasajes desde la URI
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
