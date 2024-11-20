# Estrutura do projeto

Considerado arquitetura em camadas.

Estrutura de pastas:

```
  /prisma
  ├── /migrations
  └── schema.prisma
  /src
  ├── /controllers
  ├── /services
  ├── /middlewares
  ├── /routes
  ├── /database
  ├── /utils
  ├── /types
  ├── /dtos
  └── server.ts
```

## Explicação

- prisma: Contém os arquivos de configuração e o esquema do Prisma, que define os modelos de dados e as migrações do banco de dados.

- src: Diretório principal do código-fonte da aplicação.

- controllers: É responsável por receber e processar as requisições HTTP e delegam a lógica de negócios a serviços.

- services: Armazena a lógica de negócios da aplicação e a interação com o banco de dados.

- middlewares: Armazena funções intermediárias que podem modificar requisições e respostas antes que cheguem aos controladores, como autenticação e validação de dados.

- routes: Define as rotas da API, mapeando URLs específicas para funções nos controladores.

- database: Contém a configuração de conexão e inicialização do banco de dados, além de interações diretas com o Prisma.

- utils: Um local para funções utilitárias e auxiliares que podem ser reutilizadas em diferentes partes da aplicação.

- types: Armazena definições de tipos TypeScript personalizados, ajudando a manter a tipagem em todo o projeto.

- dtos: Armazena Data Transfer Objects (DTOs), que são tipos TypeScript utilizados para definir a estrutura dos dados transferidos entre diferentes camadas da aplicação.

- server.ts: O ponto de entrada da aplicação, onde o servidor é configurado e iniciado, incluindo a configuração de middleware e rotas.
