'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserDetails.belongsTo(models.City)
      UserDetails.hasOne(models.Users)

    }
  }
  UserDetails.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    img: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'UserDetails',
  });
  return UserDetails;
};