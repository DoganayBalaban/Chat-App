import express from "express";
import { app, server } from "./lib/socket.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/message.route.js";
import path from "path";

// .env Dosyasını Yükle
dotenv.config();

// Uygulama Ayarları
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// Veritabanına Bağlan

// Middleware'ler
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// API Rotaları
app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Sunucuyu Dinle
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
