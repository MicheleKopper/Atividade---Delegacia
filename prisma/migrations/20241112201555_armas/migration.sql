-- CreateTable
CREATE TABLE "Armas" (
    "id_arma" UUID NOT NULL,
    "tipo_arma" TEXT NOT NULL,
    "numero_serie" INTEGER NOT NULL,
    "calibre" INTEGER NOT NULL,
    "id_Crime" UUID NOT NULL,

    CONSTRAINT "Armas_pkey" PRIMARY KEY ("id_arma")
);

-- AddForeignKey
ALTER TABLE "Armas" ADD CONSTRAINT "Armas_id_Crime_fkey" FOREIGN KEY ("id_Crime") REFERENCES "Crimes"("id_Crime") ON DELETE RESTRICT ON UPDATE CASCADE;
