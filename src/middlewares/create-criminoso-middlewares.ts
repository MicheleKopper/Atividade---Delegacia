import { NextFunction, Request, Response } from "express";

// VALIDAÇÕES ADICIONAIS

// 02 - VERIFICAR COLUNAS ÚNICAS

// SELECT
// findFirts = encontra o primeiro | null
// findUnique = encontra coluna unica | null
// findFirtsOrThrow = encontra a coluna | error
// findMany = lista de itens[] | []

// where: { cpf } está dizendo ao Prisma para buscar um registro na tabela criminoso onde o valor da coluna cpf é igual ao valor da variável cpf fornecida.

// ------------------------------------------------------

// const middleware = new CreateCriminosoMiddlewares();
// middleware.method();
// CreateCriminosoMiddlewares.method();

// OU =

export class CreateCriminosoMiddlewares {
  public static validateRequired(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { nome, cpf, data_nascimento, endereco } = req.body;

    // 01 - VALIDAÇÃO OBRIGATÓRIA
    if (!nome) {
      res.status(400).json({
        ok: false,
        message: "Preencha o nome!",
      });
      return;
    }

    if (!cpf) {
      res.status(400).json({
        ok: false,
        message: "Preencha o CPF!",
      });
      return;
    }

    if (!endereco) {
      res.status(400).json({
        ok: false,
        message: "Preencha o endereço!",
      });
      return;
    }

    if (!data_nascimento) {
      res.status(400).json({
        ok: false,
        message: "Preencha a data de nascimento!",
      });
      return;
    }
    next();
  }
  public static validateTypes(req: Request, res: Response, next: NextFunction) {
    const { nome, cpf, data_nascimento, endereco } = req.body;

    // VALIDAÇÃO TIPO DE DADO
    if (typeof nome !== "string") {
      res.status(400).json({
        ok: false,
        message: "Nome precisa ser uma string!",
      });
      return;
    }

    if (typeof cpf !== "string") {
      res.status(400).json({
        ok: false,
        message: "CPF precisa ser uma string!",
      });
      return;
    }

    if (typeof endereco !== "string") {
      res.status(400).json({
        ok: false,
        message: "Endereço precisa ser uma string!",
      });
      return;
    }
    next();
  }

  //   public static validateData(req: Request, res: Response, next: NextFunction) {
  //     // VALIDAÇÕES ADICIONAIS
  //   }
}
