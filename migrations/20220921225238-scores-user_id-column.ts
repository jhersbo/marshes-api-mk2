'use strict';

module.exports = {
  async up (queryInterface: queryInterface_user_id, Sequelize: Sequelize) {
    await queryInterface.addColumn('scores', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
          schema: 'public'
        },
        key: 'user_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  async down (queryInterface: queryInterface_user_id, Sequelize: Sequelize) {
    return await queryInterface.removeColumn('scores', 'user_id', {})
  }
};
