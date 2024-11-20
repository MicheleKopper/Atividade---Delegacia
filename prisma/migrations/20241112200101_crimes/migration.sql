-- CreateTable
CREATE TABLE "Crimes" (
    "id_Crime" UUID NOT NULL,
    "tipo_crime" TEXT NOT NULL,
    "data_crime" DATE NOT NULL,
    "local_crime" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "id_criminoso" UUID NOT NULL,

    CONSTRAINT "Crimes_pkey" PRIMARY KEY ("id_Crime")
);

-- AddForeignKey
ALTER TABLE "Crimes" ADD CONSTRAINT "Crimes_id_criminoso_fkey" FOREIGN KEY ("id_criminoso") REFERENCES "Criminosos"("id_criminoso") ON DELETE RESTRICT ON UPDATE CASCADE;
