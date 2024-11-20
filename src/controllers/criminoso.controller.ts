import { Request, Response } from "express";
import { prisma } from "../database/prisma.database";

export class CriminosoController {
  public static async create(req: Request, res: Response) {
    const { nome, cpf, data_nascimento, endereco } = req.body;

    // VERIFICA CPF ÚNICO

    const cpfExiste = await prisma.criminoso.findUnique({
      where: { cpf },
    });

    if (cpfExiste) {
      res.status(409).json({
        ok: false,
        message: "CPF já está cadastrado!",
      });
      return;
    }

    // 03 - CRIAÇÃO DO 'CRIMINOSO' NO BANCO DE DADOS

    // INSET INTO | VALUES [(""), ("")] = SELECT
    // create = cria um | retorna dado criado
    // createMany = cria vários CRIMINOSOS [] | não retorna nada
    // createManyAndReturn = cria vários CRIMINOSOS [] | retorna os dados criados
    // Convertendo data_nascimento para Date

    const dataNascimentoDate = new Date(data_nascimento);

    if (isNaN(dataNascimentoDate.getTime())) {
      res.status(400).json({
        ok: false,
        message: "Data de nascimento precisa ser um date!",
      });
      return;
    }
    const criminosoCriado = await prisma.criminoso.create({
      data: {
        nome: nome,
        cpf: cpf,
        data_nascimento: dataNascimentoDate,
        endereco: endereco,
      },
    });

    res.status(201).json({
      ok: true,
      message: "Criminoso cadastrado com sucesso!",
      data: criminosoCriado,
    });
  }
}
