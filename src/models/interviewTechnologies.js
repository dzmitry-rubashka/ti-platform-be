const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class InterviewTechnologies extends Model {
    toJSON() {
      return { ...this.get() };
    }
  }

  InterviewTechnologies.init(
    {
      interviewId: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Technology",
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
      tableName: "InterviewTechnologies",
      modelName: "InterviewTechnologies",
    }
  );

  return InterviewTechnologies;
};
