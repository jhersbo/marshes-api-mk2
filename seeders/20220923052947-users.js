'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: 0,
        username: "jhersbo",
        password: "1234"
      },
      {
        user_id: 1,
        username: "amanda",
        password: "1234"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', [])
  }
};
