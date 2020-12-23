'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AgentImmoniliers', {
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
        unique: 'AgentImmonilier'
      },
      ClientId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Clients',
          key: 'id'
        },
        unique: 'AgentImmonilier'
      },
      AnnonceId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Annonces',
          key: 'id'
        },
        unique: 'AgentImmonilier'
      },
      BienId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Biens',
          key: 'id'
        },
        unique: 'AgentImmonilier'
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
        'ALTER TABLE `AgentImmoniliers` ADD UNIQUE `unique_index`(`AgentId`,`ClientId`,`AnnonceId`,`BienId`)'
      );
    });

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AgentImmoniliers');
  }
};