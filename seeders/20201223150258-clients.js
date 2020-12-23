'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Clients', [{
        firstname: "Client",
        lastname: "1",
        dateBuy: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstname: "Client",
        lastname: "2",
        dateBuy: new Date(),
        createdAt: new Date(),
       updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
