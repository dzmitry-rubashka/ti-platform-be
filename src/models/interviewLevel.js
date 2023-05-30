const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class InterviewLevel extends Model {
    static associate(models) {
      InterviewLevel.hasMany(models.Interview, {
        foreignKey: "interviewLevelId",
      });
    }

    toJSON() {
      return { ...this.get() };
    }
  }

  InterviewLevel.init(
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        dafaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },
      levelTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "InterviewLevel",
      modelName: "InterviewLevel",
    }
  );

  return InterviewLevel;
};
