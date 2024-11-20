import { Request, response, Response } from "express";
import { prisma } from "../database/prisma.database";
import { CriminosoService } from "../services/criminoso.service";

export class CriminosoController {
  public static async create(req: Request, res: Response): Promise<void> {
    const { nome, cpf, data_nascimento, endereco } = req.body;

    // Chamar o serviço responsável
    const service = new CriminosoService();

    const result = await service.create({
      nome: nome,
      cpf: cpf,
      data_nascimento: data_nascimento,
      endereco: endereco,
    });

    // Retornar para o cliente as informações que o serviço retorna
    // code | ok, message...
    const { code, ...response } = result;
    res.status(code).json(response); // {ok, message, data?}
  }
}
