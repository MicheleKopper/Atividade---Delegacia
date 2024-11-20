-- CreateTable
CREATE TABLE "Criminosos" (
    "id_criminoso" UUID NOT NULL,
    "nome" VARCHAR(250) NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "endereco" VARCHAR(250) NOT NULL,

    CONSTRAINT "Criminosos_pkey" PRIMARY KEY ("id_criminoso")
);
