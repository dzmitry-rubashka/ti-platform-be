"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("UserRole", [
      {
        userId: "1",
        roleId: "2",
      },
      {
        userId: "2",
        roleId: "1",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserRole", null, {});
  },
};
