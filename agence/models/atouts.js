'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atouts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Atouts.belongsToMany(models.Bien, {through: models.BienAtout})
      Atouts.hasMany(models.BienAtout)
    }
  };
  Atouts.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Atouts',
  });
  return Atouts;
};