'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bien.belongsTo(models.Annonce);
      Bien.belongsTo(models.Client);
    }
  };
  Bien.init({
    name: DataTypes.STRING,
    adresse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bien',
  });
  return Bien;
};