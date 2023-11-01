'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class promo_code extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      promo_code.belongsTo(models.Events)
      promo_code.hasOne(models.Transaction)
    }
  }
  promo_code.init({
    promo_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'promo_code',
  });
  return promo_code;
};