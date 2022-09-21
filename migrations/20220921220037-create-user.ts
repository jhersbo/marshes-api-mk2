'use strict';
module.exports = {
  async up(queryInterface: queryInterface_user, Sequelize: Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },
  async down(queryInterface: queryInterface_score, Sequelize: Sequelize) {
    await queryInterface.dropTable('users');
  }
};