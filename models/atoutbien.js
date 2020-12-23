'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AtoutBien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AtoutBien.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AtoutBien',
  });
  return AtoutBien;
};