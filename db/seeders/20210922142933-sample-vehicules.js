'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vehicules', [
        {
          make: 'BMW',
          model: '2 Series',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          make: 'Alfa Romeo',
          model: 'Spider',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          make: 'Ford',
          model: 'Fiesta',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          make: 'Volkswagen',
          model: 'Beetle',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          make: 'Audi',
          model: 'A3',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          make: 'Honda',
          model: 'Jazz',
          createdAt: new Date(),
          updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vehicules', null, {});
  }
};
