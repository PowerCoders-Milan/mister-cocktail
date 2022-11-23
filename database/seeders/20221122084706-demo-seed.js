'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cocktails', [{
      title: 'martini',
      description: 'martini on the rocks',
      imageUrl: 'https://res.cloudinary.com/dzvox0kev/image/upload/v1669216278/unsigned-uploads/rkkusvcxd4d4xgxzwydr.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
