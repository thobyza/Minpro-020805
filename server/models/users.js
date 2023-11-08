"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.UserDetails);
      // Users.belongsTo(models.Referrals);
      Users.hasMany(models.Transaction);
      Users.hasMany(models.Events);
      Users.belongsTo(models.City);
      // Users.hasOne(models.Users);
    }
  }
  Users.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      cellphone: DataTypes.STRING,
      img: DataTypes.STRING,
      city: DataTypes.STRING,
      points: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  Users.afterCreate(async (user) => {
    const generateReferrals = async () => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const codeLength = 6;

      let referralCode = "";

      while (true) {
        for (let i = 0; i < codeLength; i++) {
          const random = Math.floor(Math.random() * characters.length);
          referralCode += characters.charAt(random);
        }
        const existReferral = await sequelize.models.Referrals.findOne({
          where: { referral_code: referralCode },
        });

        if (!existReferral) {
          break;
        }

        referralCode = "";
      }

      return referralCode;
    };
    const referralCode = await generateReferrals();
    const referral = await sequelize.models.Referrals.create({
      UserId: user.id,
      referral_code: referralCode,
    });
  });
  return Users;
};
