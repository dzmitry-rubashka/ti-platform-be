const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class InterviewUsers extends Model {
    toJSON() {
      return { ...this.get() };
    }
  }

  InterviewUsers.init(
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
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "User",
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
      tableName: "InterviewUsers",
      modelName: "InterviewUsers",
    }
  );

  return InterviewUsers;
};
