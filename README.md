# LOGIN PAGE

O projeto consiste em um sistema de login funcional, onde você pode cagastrar um usuário e fazer o login. Logando na aplicação, sera gerado um token para validação de futuras requisições.

OBS: A aplicação é apenas um exemplar para treino.


## 🚀 Começando


Para poder testar a aplicação localmente, você devera fazer o clone deste repositório na sua maquina:

— Crie uma nova pasta no seu computador;
— Abra o terminal dentro dela;
— Rode o comando: git clone git@github.com:DanielCavalcantih/new-login-page.git

Uma nova pasta chamada "new-login-page" deverá ser gerada na pasta que você criou.

— Rode cd new-login-page/ para entrar no diretório raiz do projeto.


### 📋 Pré-requisitos


As dependências para este projeto são:

  Back-End:
    — dotenv;
    — express;
    — cors;
    — joi;
    — jsonwebtoken;
    — mysql2;
    — nodemon;
    — sequelize;
    — sequelize-cli;

  Front-End:
    — axios;
    — react;
    — react-dom;
    — react-router-dom;
    — react-scripts;


### 🔧 Instalação


Para instalar todas as dependências do projeto, a partir do diretório raiz:

— Entre na pasta "back-end": cd app/back-end/ ;

— Rode o comando npm install ; Para instalar as dependencias do back-end do projeto;

— Entre na pasta "front-end": cd ../front-end/ ;

— Rode o comando npm install ; Para instalar as dependencias do front-end do projeto;

— Volte para pasta "back-end": cd ../back-end/ ;

— Certifique-se que as portas 3000, 3001 e 3306 não estejam sendo usadas;

— Rode o comando docker-compose up -d ; para criar os containers docker e estabelecer  uma compatibilidade de versões;

— Rode o comando npx sequelize db:create ;

— Para facilitar a visualização do banco de dados, instale uma extensão do VsCode chamada MySQL, criada por Weijan Chen;

— Após instalar e extensão, clique no ícone criado na barra lateral do seu VsCode e crie uma connection com a Port: 3306 e a Password: "password", e clique em +Connect. Você pode observar que o banco de dados já foi criado;

— Após criar o banco, rode o comando npx sequelize db:migrate ; para criar as tabelas do banco;

— Rode npx sequelize db:seed:all ; para popular as tabelas com os dados iniciais;

— Com o banco de dados criado e populado, entre no terminal do container docker: docker exec -it login bash;

— No terminal do container rode o comando npm run debug ; para rodar o back-end da aplicação;

— Aplicação rodando, abra um novo terminal, entre na pasta front-end: cd app/front-end/ e rode o comando npm start para iniciar a aplicação;


## 🛠️ Construído com


* [MySQL](https://dev.mysql.com/doc/) - O Banco de dados utilizado
* [React](https://pt-br.reactjs.org/docs/getting-started.html) - Biblioteca do Java-Script utilizada
* [useContext](https://reactjs.org/docs/context.html) - Para gerenciamento do estado global
* [joi](https://joi.dev/api/?v=17.7.0) - Para validação de requisições http (Middlewares)
* [Express](https://expressjs.com/pt-br/starter/installing.html) - Framework para aplicativo da web do Node.js
* [Sequelize](https://sequelize.org/docs/v6/getting-started/) - ORM - Interface da aplicação com o banco de dados


---
⌨️ Por [Daniel Cavalcanti](https://github.com/DanielCavalcantih) 😊