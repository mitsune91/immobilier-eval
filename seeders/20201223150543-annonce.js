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
      name: "Villa sud paris",
      description: "Villa avec vue sur champs de vache, piscine, pas de cuisine",
      createdAt: new Date(),
      updatedAt: new Date()     
    },{
      name: "Ferme sans animaux",
      description: "Ferme toute neuve sans rien pas meme les murs",
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
