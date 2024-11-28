import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./lib/db.js";
const app = express();
const PORT = process.env.PORT || 3000;
import authRoutes from "./routes/auth.route.js";
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
  connectDB();
});
