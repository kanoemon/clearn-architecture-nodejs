'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sizes', [
      {
       name: 'short',
       delete_flg: false,
       createdAt: new Date,
       updatedAt: new Date
      },
      {
       name: 'tall',
       delete_flg: false,
       createdAt: new Date,
       updatedAt: new Date
      }
    ], {});
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
