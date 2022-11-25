import dotenv from 'dotenv';
dotenv.config();

const config = {
  "development": {
    // TODO change the username
    "username": "marco",
    // TODO change the password
    "password": null,
    "database": "mister-cocktail",
    "host": "127.0.0.1",
    // if youre not using the port 5432 you need to specify "port": "port_number"
    "dialect": "postgres"
  },
  production: {
    // this setup is for Heroku
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: false,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    },
  },
}
export default config
