"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Interview", {
      id: {
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      candidateId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Candidate",
          },
          key: "id",
        },
        allowNul: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNul: true,
      },
      interviewLevelId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "InterviewLevel",
          },
          key: "id",
        },
        allowNul: false,
      },
      feedbackId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Feedback",
          },
          key: "id",
        },
        allowNul: true,
      },
      hrId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
        allowNul: true,
      },
      managerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
        allowNul: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Interview");
  },
};
