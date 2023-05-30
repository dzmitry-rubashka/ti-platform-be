"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserRole", {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
        allowNul: false,
        primaryKey: true,
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Role",
          },
          key: "id",
        },
        allowNul: false,
        primaryKey: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserRole");
  },
};
