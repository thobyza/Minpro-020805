'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Users)
      Transaction.belongsTo(models.Tickets)
      Transaction.belongsTo(models.promo_code)
      Transaction.belongsTo(models.Referrals)

    }
  }
  Transaction.init({
    transaction_date: DataTypes.DATE,
    cust_name: DataTypes.STRING,
    cust_email: DataTypes.STRING,
    cust_phone: DataTypes.STRING,
    transaction_status: DataTypes.STRING,
    total_price: DataTypes.INTEGER,
    final_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};