"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("InterviewLevel", [
      {
        id: 1,
        levelTitle: "Junior",
      },
      {
        id: 2,
        levelTitle: "Middle",
      },
      {
        id: 3,
        levelTitle: "Senior",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("InterviewLevel", null, {});
  },
};
