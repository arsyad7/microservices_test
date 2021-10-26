'use strict';
const { encode } = require('../helpers/bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        username: 'superadmin',
        email: 'superadmin@mail.com',
        password: encode('12345'),
        AccessId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'admin',
        email: 'admin@mail.com',
        password: encode('12345'),
        AccessId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'premium',
        email: 'premium@mail.com',
        password: encode('12345'),
        AccessId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user',
        email: 'user@mail.com',
        password: encode('12345'),
        AccessId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
