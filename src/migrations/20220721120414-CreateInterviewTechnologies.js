"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("InterviewTechnologies", {
      interviewId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Interview",
          },
          key: "id",
        },
        allowNul: false,
        primaryKey: true,
      },
      technologyId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Technology",
          },
          key: "id",
        },
        allowNul: false,
        primaryKey: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("InterviewTechnologies");
  },
};
