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
  await queryInterface.bulkInsert('Annonces', [{
      name: "première annonce",
      description: "Villa avec piscine",
      createdAt: new Date(),
      updatedAt: new Date()     
    },{
      name: "Deuxième annonce",
      description: "Villa avec balcon",
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
