<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/BrunoCarvalhoFeitosa/airbnb-clone">
    <img src="public\images\common\fav.png" alt="Logo" width="200" weight="200" />
  </a>

  <p align="center">
    Este projeto foi feito em Next.js, Typescript, Clerk, Convex, EdgeStore, ShadcnUi e TailwindCSS e basicamente consiste num clone da plataforma de criação de documentos/anotações Notion. Primeiramente foi criado o clone da página principal da plataforma, onde incrementei diversas animações do Framer Motion e criei uma função para a escolha de temas "light" ou "dark". Ao fazer login nesta página através da bliblioteca clerk, o usuário é redirecionado ao app, onde é possível explorar diversas funcionalidades semelhantes à plataforma original, sendo a criação/modificação ou exclusão de notas/documentos.
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#license">Licenças</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

### Projeto

#### Home
A página principal criada é um clone exato ao do Notion, acrescentei animações feitas com Framer Motion e acrescentei funcionalidade de escolha do tema de apresentação da página, onde o usuário pode optar pelo tema "light" ou "dark".

https://github.com/BrunoCarvalhoFeitosa/notion-clone/assets/46093815/7d48e6f0-ffcc-416c-8055-6028d25abcf8

#### App - Criação de documento
Através do Clerk foi feito o login com GitHub, após a autenticação, o usuário foi reconhecido e sua foto passou a ser exibida no header da página. A partir daí, o usuário poderá ter acesso ao app e poderá criar/, modificar, excluir ou publicar seus documentos. A criação destes conteúdos só foi possível devido a bibliotecado Block Note, muito completa, permite inserir títulos, parágrafos, listas e até imagens. Além disso, é possível alinhar estes conteúdos e trocar as cores dos textos, por exemplo.

https://github.com/BrunoCarvalhoFeitosa/notion-clone/assets/46093815/e814d5d1-fa32-4a5e-b642-4b58655482a2

#### App - Exclusão de documento
Através do Convex foi criada uma rota de exclusão dos documentos, ao criar um documento e em seguida excluí-lo, ele vai diretamente para a lixeira, na lixeira o usuário tem a opção de recuperar o documento ou excluí-lo completamente.

https://github.com/BrunoCarvalhoFeitosa/notion-clone/assets/46093815/16c490db-6ebc-43c8-a961-ffb7f8b46898

#### App - Busca de documento
Através do Convex foi criada uma rota de busca e através de um filter o documento especificado pelo usuário é retornado e ele pode clicá-lo e acessá-lo diretamente.

https://github.com/BrunoCarvalhoFeitosa/notion-clone/assets/46093815/26d340a8-24be-4220-aa52-be606b715cce

### Feito com

* [Next.js](https://nextjs.org)
* [Typescript](https://www.typescriptlang.org)
* [Convex](https://www.convex.dev)
* [Clerk](https://clerk.com)
* [EdgeStore](https://edgestore.dev)
* [ShadcnUI](https://ui.shadcn.com)
* [TailwindCSS](https://tailwindcss.com)
* [Vercel](https://vercel.com)

### Hospedagem

A aplicação está em produção neste link: (https://bruno-carvalho-feiosa-notion-clone.vercel.app).

<!-- GETTING STARTED -->
## Iniciando o projeto

Primeiramente será necessário clonar este projeto em (https://github.com/BrunoCarvalhoFeitosa/notion-clone.git), após o download será necessário abrir este projeto no seu editor e no terminal digitar npm install ou yarn, posteriormente é só rodar em seu terminal o comando npm run dev ou yarn dev, após isso, a página será aberta em seu navegador.

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   https://github.com/BrunoCarvalhoFeitosa/notion-clone.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```   

<!-- LICENSE -->
## License

Distribuído sob a licença MIT.

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)
