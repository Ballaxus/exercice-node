'use strict';
const {
  Model
} = require('sequelize');
const biencaract = require('./biencaract');
module.exports = (sequelize, DataTypes) => {
  class Bien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bien.belongsToMany(models.Atouts, {through: models.BienAtout})
      Bien.hasMany(models.BienAtout)
      Bien.belongsToMany(models.Caracteristique, {through: models.BienCaract})
      Bien.hasMany(models.BienCaract)
      Bien.hasOne(models.Annonce)
    }
  };
  Bien.init({
    description: DataTypes.STRING,
    prix: DataTypes.FLOAT,
    surface: DataTypes.FLOAT,
    atout: DataTypes.STRING,
    caracteristique: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bien',
  });
  return Bien;
};