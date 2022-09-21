'use strict';
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: { INTEGER: any; STRING: any; }) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ scores }: any) {
      user.hasMany(scores, {
        foreignKey: "score_id",
        as: "user-scores"
      })
    }
  }
  user.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'users',
    tableName: 'users',
    timestamps: false
  });
  return user;
};