'use strict';
const { Model, DataTypes } = require('sequelize')
import connection from '../connection';
const initCocktail = (sequelize, DataTypes) => {
  class Cocktail extends Model {
    static associate(models) {
      Cocktail.belongsTo(models.User)
    }
  }
  Cocktail.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cocktail',
  });
  return Cocktail;
};

export default initCocktail(connection, DataTypes)
