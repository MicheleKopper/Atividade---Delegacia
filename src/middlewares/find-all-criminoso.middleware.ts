import { Request, Response, NextFunction } from "express";

// req.params; /criminoso/:id
// req.query; /criminoso?nome=michele

export class FindAllCriminosoMiddleware {
  static validateTypes(req: Request, res: Response, next: NextFunction) {
    const { nome, cpf } = req.query;

    if (nome && typeof nome !== "string") {
      res.status(400).json({
        ok: false,
        message: "O nome deve ser uma string!",
      });
    }

    if (cpf && typeof cpf !== "string") {
      res.status(400).json({
        ok: false,
        message: "O cpf deve ser uma string!",
      });
    }

    next();
  }

  public static async findAll(req: Request, res: Response, next: NextFunction) {

  };
}
