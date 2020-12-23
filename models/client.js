'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Client.hasMany(models.Bien);
    }
  };
  Client.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dateBuy: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};