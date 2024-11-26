import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";
import { criminosoRoutes } from "./routes/criminoso.routes";

// app.VERBO ("rota", MIDDLEWARES, CONTROLLER)

// SERVIDOR EXPRESS
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROTA PADRÃO
app.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "Api Prisma 💛" });
});

// ROTAS
app.use(criminosoRoutes.execute());


// Iniciar o servidor
app.listen(process.env.PORTA, () => {
  console.log("Servidor rodando na porta:", process.env.PORTA, "💛");
});
