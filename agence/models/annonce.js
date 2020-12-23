'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Annonce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Annonce.hasOne(models.Bien)
    }
  };
  Annonce.init({
    bien: DataTypes.STRING,
    agent: DataTypes.STRING,
    datedebut: DataTypes.DATE,
    datefin: DataTypes.DATE,
    statut: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Annonce',
  });
  return Annonce;
};