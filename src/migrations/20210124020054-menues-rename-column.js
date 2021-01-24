'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.renameColumn('Menus', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Menus', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('Sizes', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Sizes', 'updatedAt', 'updated_at');
    await queryInterface.renameColumn('Categories', 'createdAt', 'created_at');
    await queryInterface.renameColumn('Categories', 'updatedAt', 'updated_at');
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
