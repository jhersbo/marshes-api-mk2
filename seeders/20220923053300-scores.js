'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('scores', [
      {
        score_id: 0,
        time: "36",
        user_id: 0
      },
      {
        score_id: 1,
        time: "38",
        user_id: 0
      }
    ])
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('scores', [])
  }
};
