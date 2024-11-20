import { prisma } from "../database/prisma.database";
import { CreateCriminosoDto } from "../dtos";
import { ResponseApi } from "../types/response.type";

export class CriminosoService {
  public async create(
    createCriminoso: CreateCriminosoDto
  ): Promise<ResponseApi> {
    const { nome, cpf, data_nascimento, endereco } = createCriminoso;

    // VERIFICA CPF ÚNICO

    const cpfExiste = await prisma.criminoso.findUnique({
      where: { cpf },
    });

    if (cpfExiste) {
      return {
        ok: false,
        code: 409,
        message: "CPF já está cadastrado!",
      };
    }

    // 03 - CRIAÇÃO DO 'CRIMINOSO' NO BANCO DE DADOS

    // INSET INTO | VALUES [(""), ("")] = SELECT
    // create = cria um | retorna dado criado
    // createMany = cria vários CRIMINOSOS [] | não retorna nada
    // createManyAndReturn = cria vários CRIMINOSOS [] | retorna os dados criados
    // Convertendo data_nascimento para Date

    const dataNascimentoDate = new Date(data_nascimento);

    if (isNaN(dataNascimentoDate.getTime())) {
      return {
        ok: false,
        code: 409,
        message: "Data de nascimento precisa ser um date!",
      };
    }
    const criminosoCriado = await prisma.criminoso.create({
      data: {
        nome: nome,
        cpf: cpf,
        data_nascimento: dataNascimentoDate,
        endereco: endereco,
      },
    });

    return {
      ok: true,
      code: 201,
      message: "Criminoso cadastrado com sucesso!",
      data: criminosoCriado,
    };
  }
}

// DTO - Data Transfer Object

// ok: true
// code: 201
// message: "Deu bom"
// data: ANY (quando houver)
