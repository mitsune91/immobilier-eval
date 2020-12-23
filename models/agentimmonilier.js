'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentImmonilier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AgentImmonilier.belongsTo(models.Agent);
      AgentImmonilier.belongsTo(models.Bien);
      AgentImmonilier.belongsTo(models.Annonce);
      AgentImmonilier.belongsTo(models.Client);
    }
  };
  AgentImmonilier.init({

  }, {
    sequelize,
    modelName: 'AgentImmonilier',
  });
  return AgentImmonilier;
};