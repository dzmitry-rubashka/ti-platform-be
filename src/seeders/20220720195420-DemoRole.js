"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Role", [
      {
        id: "1",
        title: "Manager",
      },
      {
        id: "2",
        title: "HR",
      },
      {
        id: "3",
        title: "Tech interviewer",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Role", null, {});
  },
};
