import { Request, response, Response } from "express";
import { prisma } from "../database/prisma.database";
import { CriminosoService } from "../services/criminoso.service";

export class CriminosoController {
  public static async create(req: Request, res: Response): Promise<void> {
    try {
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
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }

  public static async findAll(req: Request, res: Response): Promise<void> {
    try {
      // 01 - Pegar do query
      const { nome, cpf } = req.query;

      // 02 - Chamar o responsável
      const service = new CriminosoService();
      const result = await service.findAll({nome: nome as string, cpf: cpf as string});

      // 03 - Responder para o cliente
      const { code, ...response } = result;
      res.status(code).json(response);
    } catch (error: any) {
      res.status(500).json({
        ok: false,
        message: `Erro do servidor: ${error.message}`,
      });
    }
  }
}
