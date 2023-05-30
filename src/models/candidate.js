const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate(models) {
      Candidate.belongsTo(models.User, {
        foreignKey: "hrId",
      });

      Candidate.belongsTo(models.User, {
        foreignKey: "managerId",
      });

      Candidate.hasMany(models.Interview, {
        foreignKey: "candidateId",
      });
    }

    toJSON() {
      return { ...this.get() };
    }
  }

  Candidate.init(
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
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cv: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hrId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
        allowNul: false,
      },
      managerId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
        allowNul: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "Candidate",
      modelName: "Candidate",
    }
  );

  return Candidate;
};
