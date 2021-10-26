'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        access_type: 'create,read,update,delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        access_type: 'create,read,update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        access_type: 'create,read',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        access_type: 'read',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        access_type: 'read,update',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        access_type: 'read,delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        access_type: 'create,read,delete',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    await queryInterface.bulkInsert('Accesses', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Accesses', null, {});
  }
};
