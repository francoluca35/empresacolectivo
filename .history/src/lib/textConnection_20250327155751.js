// testConnection.js
import { connectDB } from "./mongodb"; 

(async () => {
  await connectDB();
})();
