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
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
    imageUrl: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cocktail',
  });
  return Cocktail;
};

export default initCocktail(connection, DataTypes)
