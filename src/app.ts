import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Permite peticiones desde cualquier origen (Tu Frontend)
app.use(express.json());

// Conexión Base de Datos
connectDB();

// Rutas Globales
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`📡 Servidor corriendo en http://localhost:${PORT}`);
});
