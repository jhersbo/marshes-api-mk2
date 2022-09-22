'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('scores', {
      score_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      time: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('scores');
  }
};