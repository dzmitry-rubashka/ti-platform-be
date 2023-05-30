"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("User", [
      {
        id: "1",
        firstName: "Siarhei",
        lastName: "Korbut",
        email: "Siarhei.Korbut@itechart.com",
      },
      {
        id: "2",
        firstName: "Dzianis",
        lastName: "Pryshchep",
        email: "Dzianis.Pryshchep@itechart.com",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
