'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgentImmobilier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AgentImmobilier.belongsTo(models.Agent);
      AgentImmobilier.belongsTo(models.Bien);
      AgentImmobilier.belongsTo(models.Annonce);
      AgentImmobilier.belongsTo(models.Client);
    }
  };
  AgentImmobilier.init({

  }, {
    sequelize,
    modelName: 'AgentImmobilier',
  });
  return AgentImmobilier;
};