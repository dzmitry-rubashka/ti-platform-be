"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Technology", {
      id: {
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        dafaultValue: Sequelize.INTEGER,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Technology");
  },
};
