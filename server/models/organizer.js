'use strict';
const {
  Model
} = require('sequelize');
const city = require('./city');
module.exports = (sequelize, DataTypes) => {
  class Organizer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organizer.hasOne(models.Events)
      Organizer.belongsTo(models.City)
    }
  }
  Organizer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    img: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organizer',
  });
  return Organizer;
};