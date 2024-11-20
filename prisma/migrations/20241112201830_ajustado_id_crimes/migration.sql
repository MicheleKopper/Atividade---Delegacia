/*
  Warnings:

  - You are about to drop the column `id_Crime` on the `Armas` table. All the data in the column will be lost.
  - The primary key for the `Crimes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_Crime` on the `Crimes` table. All the data in the column will be lost.
  - Added the required column `id_crime` to the `Armas` table without a default value. This is not possible if the table is not empty.
  - The required column `id_crime` was added to the `Crimes` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Armas" DROP CONSTRAINT "Armas_id_Crime_fkey";

-- AlterTable
ALTER TABLE "Armas" DROP COLUMN "id_Crime",
ADD COLUMN     "id_crime" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Crimes" DROP CONSTRAINT "Crimes_pkey",
DROP COLUMN "id_Crime",
ADD COLUMN     "id_crime" UUID NOT NULL,
ADD CONSTRAINT "Crimes_pkey" PRIMARY KEY ("id_crime");

-- AddForeignKey
ALTER TABLE "Armas" ADD CONSTRAINT "Armas_id_crime_fkey" FOREIGN KEY ("id_crime") REFERENCES "Crimes"("id_crime") ON DELETE RESTRICT ON UPDATE CASCADE;
