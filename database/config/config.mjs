
import dotenv from 'dotenv';
dotenv.config();

export default config = {
  "development": {
    "username": "marcochellichecchi",
    "password": null,
    "database": "mister-cocktail",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  production: {
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