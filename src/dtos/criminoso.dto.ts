export interface CreateCriminosoDto {
  nome: string;
  cpf: string;
  data_nascimento: string;
  endereco: string;
}

export interface CriminosoDto {
  id: string;
  nome: string;
  data_nascimento: Date;
}

export interface QueryFilterDto {
  nome?: string;
  cpf?: string;
}
