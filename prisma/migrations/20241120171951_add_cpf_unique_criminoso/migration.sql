/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Criminosos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Criminosos_cpf_key" ON "Criminosos"("cpf");
