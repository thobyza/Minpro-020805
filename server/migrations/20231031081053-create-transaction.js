'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_date: {
        type: Sequelize.DATE
      },
      cust_name: {
        type: Sequelize.STRING
      },
      cust_email: {
        type: Sequelize.STRING
      },
      cust_phone: {
        type: Sequelize.STRING
      },
      transaction_status: {
        type: Sequelize.STRING
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      final_price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};