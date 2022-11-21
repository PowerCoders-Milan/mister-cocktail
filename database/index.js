// models/index.js
import Sequelize from 'sequelize';

import config from './config/config.json';
const db = {};


let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production);
} else if (process.env.NODE_ENV === 'staging') {
  sequelize = new Sequelize(config.staging);
} else if (process.env.NODE_ENV === 'test') {
  sequelize = new Sequelize(config.test);
} else {
  sequelize = new Sequelize(config.development);
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
