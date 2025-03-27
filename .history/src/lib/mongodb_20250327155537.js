// src/lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let db;

export async function connectDB() {
  if (db) return { client, db };

  client = new MongoClient(uri);
  await client.connect();
  db = client.db(); // toma ventapasajes del URI
  return { client, db };
}
