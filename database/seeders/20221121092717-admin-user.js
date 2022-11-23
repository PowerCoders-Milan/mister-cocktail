'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      firstName: 'Marco',
      lastName: 'black',
      email: 'marco@gmail.com',
      phoneNumber: 12932191,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Luca',
      lastName: 'black',
      email: 'marco@gmail.com',
      phoneNumber: 12932191,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
