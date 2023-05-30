"use strict";

const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    toJSON() {
      return { ...this.get() };
    }
  }

  UserRole.init(
    {
      userId: {
        type: DataTypes.UUID,
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
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: "Role",
          },
          key: "id",
        },
        allowNul: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "UserRole",
      modelName: "UserRole",
    }
  );

  return UserRole;
};
