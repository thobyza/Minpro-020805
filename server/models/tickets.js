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
    ticket_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ticket_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ticket_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    promotion_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    promotion_discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Tickets',
  });
  return Tickets;
};