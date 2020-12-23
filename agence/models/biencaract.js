'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biencaract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Biencaract.belongsTo(models.Bien);
      Biencaract.belongsTo(models.Caract);
    }
  };
  Biencaract.init({
  }, {
    sequelize,
    modelName: 'Biencaract',
  });
  return Biencaract;
};