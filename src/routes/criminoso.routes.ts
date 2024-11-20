import { Router } from "express";
import { CriminosoController } from "../controllers/criminoso.controller";
import { CreateCriminosoMiddlewares } from "../middlewares/create-criminoso-middlewares";

export class criminosoRoutes {
  public static execute(): Router {
    const router = Router(); // roteador

    // CREATE - POST
    router.post(
      "/criminoso",
      [
        CreateCriminosoMiddlewares.validateRequired,
        CreateCriminosoMiddlewares.validateTypes,
      ],
      CriminosoController.create
    );

    // ADICIONAR TODAS AS DEMAIS ROTAS
    // GET
    return router;
  }
}
