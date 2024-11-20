import { Router } from "express";
import { CriminosoController } from "../controllers/criminoso.controller";
import { CreateCriminosoMiddlewares } from "../middlewares/create-criminoso-middlewares";
import { FindAllCriminosoMiddleware } from "../middlewares/find-all-criminoso.middleware";

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

    // FIND ALL - GET
    router.get(
      "/criminoso",
      [FindAllCriminosoMiddleware.validateTypes],
      CriminosoController.findAll
    );

    return router;
  }
}
