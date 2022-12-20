# ToDoList Project

<div align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo"/>
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="200" alt="Nest Logo"/>
</div>

<div align="center">
  A Web
  <a href="https://nodejs.org/en/" target="blank">Node</a>
  Application written in
  <a href="https://www.typescriptlang.org/" target="blank">Typescript</a>
  and built with
  <a href="http://nestjs.com/" target="blank">NestJs</a>,
  <a href="https://typeorm.io/" target="blank">TypeORM</a>,
  <a href="https://angular.io/" target="blank">Angular</a>,
  <a href="https://docs.docker.com/" target="blank">Docker</a> and
  <a href="https://jwt.io/" target="blank">JWT</a>
</div>
<br/>

> Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul (**IFMS**) Campus Três Lagoas <br/>
> Tecnologia em Análise e Desenvolvimento de Sistemas (**TADS6**) <br/>
> Desenvoltimento Baseado em Frameworks II (**DBF-II**)<br/>
> Professor José Roberto <br/>
> Aluno Mauricio da Silva<br/>

---

## Docker

```bash
# Start the Docker container as a database service
$ docker-compose up

# Execute bash inside the container
$ docker exec -it <container-name> bash

# Exit the container
exit
```

## MySQL

```bash
# Log in MySQL database service with the password
> mysql -u root -p

# Databases
> SHOW DATABASES;
> CREATE DATABASE <database-name>;
> USE <database-name>;

# Tables
> SHOW TABLES;
> DESCRIBE <table-name>;

# Selects
> SELECT * FROM <table-name>;

# Exit
> exit
```

## NestJS

```bash
# Create a new NestJS project
$ nest new <project-name>

# Run
$ npm run start:dev

# Generate schematics:
$ nest g controller <component-name> --no-spec
$ nest g service <component-name> --no-spec
$ nest g module <component-name> --no-spec
$ nest g class <component-name> --no-spec

# Generate a new CRUD resource
$ nest g resource <component-name> --no-spec

# Install TypeORM Framework
$ npm install --save @nestjs/typeorm typeorm mysql2

# Install Validator and Transformer
$ npm install --save class-validator class-transformer

# Install Passport
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local

# Install JWT
$ npm install --save @nestjs/jwt passport-jwt
$ npm install --save-dev @types/passport-jwt

# Alternative
$ npm install --save passport passport-jwt @nestjs/jwt @nestjs/passport
```

## Angular

```bash
# Create a new Angular project
$ ng new <project-name>

# Run
$ ng serve --open

# Generate a new component
$ ng generate component <path|component-name> --skip-tests
$ ng g c <path|component-name> --skip-tests

# Generate a new module
$ ng generate module <path|component-name> --flat
$ ng g m <path|component-name> --flat

# Add a Material:
$ ng add @angular/material

# Add the ESLint
$ ng add @angular-eslint/schematics
```
