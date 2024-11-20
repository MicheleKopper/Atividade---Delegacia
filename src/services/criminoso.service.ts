import { Criminoso as CriminosoPrisma } from "@prisma/client";

import { prisma } from "../database/prisma.database";
import { CreateCriminosoDto, CriminosoDto, QueryFilterDto } from "../dtos";
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
      data: this.mapToDto(criminosoCriado),
    };
  }

  public async findAll(query: QueryFilterDto): Promise<ResponseApi> {
    console.log(query);

    // contains = conter
    // endsWith = terminar
    // startWith = começar
    // in = []

    const criminosos = await prisma.criminoso.findMany({
      where: {
        nome: { contains: query.nome, mode: "insensitive"},
        cpf: { contains: query.cpf },
      },
    });

    return {
      ok: true,
      code: 200,
      message: "Criminosos buscados com sucesso!",
      data: criminosos.map((criminoso) => this.mapToDto(criminoso)), // CriminosoDto[]
    };
  }

  // Entra como tipo do prisma e sai como meu tipo
  private mapToDto(criminoso: CriminosoPrisma): CriminosoDto {
    return {
      id: criminoso.id_criminoso,
      nome: criminoso.nome,
      data_nascimento: criminoso.data_nascimento,
    };
  }
}

// DTO - Data Transfer Object

// ok: true
// code: 201
// message: "Deu bom"
// data: ANY (quando houver)
