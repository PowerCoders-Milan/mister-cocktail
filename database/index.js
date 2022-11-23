import Sequelize from 'sequelize';
import User from './models/user';
import config from './config/config.json';
import Cocktail from './models/cocktail';

const db = {};
db.User = User;
db.Cocktail = Cocktail;

let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production);
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
