'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tickets.belongsTo(models.Events)
      Tickets.hasOne(models.Transaction)
    }
  }
  Tickets.init({
    ticket_name: DataTypes.STRING,
    ticket_type: DataTypes.STRING,
    ticket_price: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};