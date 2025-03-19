# ⚽ TFC - Futebol Club

O **TFC** é um site informativo sobre partidas e classificações de futebol! No desenvolvimento deste projeto, foi necessário criar uma **API utilizando TDD** e integrar os serviços com um **banco de dados MySQL** através do `docker-compose`.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Sequelize** (ORM para modelagem de banco de dados)
- **TypeScript**
- **Docker & Docker Compose**
- **MySQL**
- **Jest & Mocha** (para testes)
- **JWT** (para autenticação)

## 🎯 Funcionalidades

- Desenvolvimento de uma API RESTful para gerenciamento de partidas e classificação de times.
- Implementação de regras de negócio para cálculo da tabela de classificação.
- Aplicação de **Test-Driven Development (TDD)**.
- Integração com um **banco de dados MySQL**.
- Configuração de **containers Docker** para back-end e banco de dados.

## 🏗️ Estrutura do Projeto

### 📂 Banco de Dados (MySQL)
- Serviço definido como `db` no `docker-compose`.
- Configurado para rodar na porta `3306`.
- Conectável via ferramentas como MySQL Workbench, Beekeeper ou DBeaver.

### 🔙 Back-end (Node.js + Express)
- Principal ambiente de desenvolvimento.
- Rodando na porta `3001`, consumido pelo front-end.
- Implementação de autenticação e autorização via JWT.

### 🎨 Front-end (React)
- Já finalizado e consumindo a API do back-end.
- Simulação de usuários via **Puppeteer** para testes de interface.

### 🐳 Docker
- Orquestração dos serviços via `docker-compose`.
- Configuração de `Dockerfile` para back-end e front-end.
- Inicialização do projeto com `npm run compose:up`.

## 🚵 Habilidades Desenvolvidas

- Modelagem e manipulação de banco de dados com **Sequelize**.
- Escrita de testes utilizando **Jest e Mocha**.
- Utilização de **Docker** para ambientes conteinerizados.
- Implementação de API seguindo princípios **RESTful**.
- Aplicação de **TDD** para garantir qualidade do código.

## 📜 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

Desenvolvido por Pedro Nunes 🚀



