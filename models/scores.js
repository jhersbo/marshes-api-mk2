'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users }) {
      this.belongsTo(users, {
        foreignKey: 'user_id',
        as: "users-scores"
      })
    }
  }
  scores.init({
    score_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'scores',
    tableName: 'scores',
    timestamps: false
  });
  return scores;
};