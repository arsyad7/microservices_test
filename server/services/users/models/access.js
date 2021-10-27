'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Access extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Access.hasMany(models.User, { foreignKey: 'AccessId' })
    }
  };
  Access.init({
    access_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Access',
  });
  return Access;
};