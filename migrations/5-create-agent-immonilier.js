'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AgentImmobiliers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AgentId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Agents',
          key: 'id'
        },
        unique: 'AgentImmobilier'
      },
      ClientId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Clients',
          key: 'id'
        },
        unique: 'AgentImmobilier'
      },
      AnnonceId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Annonces',
          key: 'id'
        },
        unique: 'AgentImmobilier'
      },
      BienId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Biens',
          key: 'id'
        },
        unique: 'AgentImmobilier'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => {
      return queryInterface.sequelize.query(
        'ALTER TABLE `AgentImmobiliers` ADD UNIQUE `unique_index`(`AgentId`,`ClientId`,`AnnonceId`,`BienId`)'
      );
    });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AgentImmobiliers');
  }
};