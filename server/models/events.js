'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Events.belongsTo (models.Organizer)
      Events.belongsTo(models.Category)
      Events.belongsTo(models.City)
      Events.hasMany(models.Tickets)
      Events.hasOne(models.Transaction)
      Events.hasOne(models.promo_code)
    }
  }
  Events.init({
    img: DataTypes.STRING,
    event_title: DataTypes.STRING,
    description: DataTypes.TEXT,
    venue: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};