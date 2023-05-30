const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    static associate(models) {
      Feedback.hasOne(models.Interview, {
        foreignKey: "feedbackId",
      });
    }

    toJSON() {
      return { ...this.get() };
    }
  }

  Feedback.init(
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        dafaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "Feedback",
      modelName: "Feedback",
    }
  );

  return Feedback;
};
