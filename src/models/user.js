"use strict";

const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: { model: models.UserRole, unique: false },
        foreignKey: "userId",
      });

      User.belongsToMany(models.Interview, {
        through: { model: models.InterviewUsers, unique: false },
        foreignKey: "userId",
      });

      User.hasMany(models.Candidate, {
        foreignKey: "hrId",
        as: "hrCandidates",
      });

      User.hasMany(models.Candidate, {
        foreignKey: "managerId",
        as: "managerCandidates",
      });

      User.hasMany(models.Interview, {
        foreignKey: "hrId",
        as: "hrInterwiews",
      });

      User.hasMany(models.Interview, {
        foreignKey: "managerId",
        as: "managerInterwiews",
      });
    }

    toJSON() {
      return { ...this.get() };
    }
  }

  User.init(
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        dafaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "User",
      modelName: "User",
    }
  );

  return User;
};
