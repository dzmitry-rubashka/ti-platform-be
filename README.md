# ti-platform-be

## How to use

- ### Configure .env variables:

  > - Before starting server and connecting it to the database, create in the root folder _`.env`_ file with variables definiton  
  >   according this example file [Link to .env.example](./.env.example). You can copy the content of this file to your own .env file  
  >   and enter the variables values. After this the server will be able start with your own local variables.

- ### How to run server in development mode:
  > - Install all dependencies by runing _`yarn`_ command from root folder
  > - To run the server use command _`yarn start:dev`_ and after the server will be started on [http://localhost:3000](http://localhost:3000)
- ### How to create database in development mode
  > - To create database run _`yarn db:create`_ from root folder and this script will create local database
  > - To create tables in the database run _`yarn db:migrate`_ from root folder and this script will create tables
  > - To add data in the database run _`yarn db:seed`_ from root folder and this script will create some data from seeds files
  > - To check if tables with data and associations beteen them are well go [Get all users](http://localhost:3000/users) in browsers and the server will give you JSON response with all users from database
- ### Current endpoints
  > For getting available technologies from DB user next GET request http://localhost:3000/technologies
  ```
    Expected response:
    [{  id: 1, value: 'JavaScript' }]
  ```
- ### Swagger:
  >   For testing endpoints run the server (using port 3001) and visit [Swagger](http://localhost:3001/swagger/).
## List of dependencies

1. [Express](https://expressjs.com/)
2. [Nodemon](https://www.npmjs.com/package/nodemon)
3. [Typescipt](https://yarnpkg.com/package/typescript)
4. Node version - 16.16.0 LTS
   > to browse between node versions use [NVM](https://github.com/coreybutler/nvm-windows)
5. [Sequelize](https://sequelize.org/)
