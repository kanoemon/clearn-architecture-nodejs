'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('categories', { 
      category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      delete_flg: { 
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });

    await queryInterface.createTable('sizes', { 
      size_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      delete_flg: { 
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });

    await queryInterface.createTable('menus', { 
      menu_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      description: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      category_id: { 
        type: Sequelize.INTEGER,
        allowNull: false
      },
      size_id: { 
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: { 
        type: Sequelize.INTEGER,
        allowNull: false
      },
      delete_flg: { 
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
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
