"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TechFeedback", {
      id: {
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        dafaultValue: Sequelize.INTEGER,
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
      },
      feedback: {
        type: Sequelize.STRING,
        allowNul: false,
      },
      interviewId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Interview",
          },
          key: "id",
        },
        allowNul: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("TechFeedback");
  },
};
