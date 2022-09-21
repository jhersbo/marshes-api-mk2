'use strict';
import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: { INTEGER: any; STRING: any; }) => {
  class scores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
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
  });
  return scores;
};