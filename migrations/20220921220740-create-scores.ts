'use strict';
module.exports = {
  async up(queryInterface: queryInterface_score, Sequelize: Sequelize) {
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
  async down(queryInterface: queryInterface_score, Sequelize: Sequelize) {
    await queryInterface.dropTable('scores');
  }
};