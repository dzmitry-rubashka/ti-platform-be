const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TechFeedback extends Model {
    static associate(models) {
      TechFeedback.belongsTo(models.Technology, {});

      TechFeedback.belongsTo(models.Interview, {});
    }
    toJSON() {
      return { ...this.get() };
    }
  }

  TechFeedback.init(
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        dafaultValue: DataTypes.INTEGER,
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
      },
      feedback: {
        type: DataTypes.STRING,
        allowNul: false,
      },
      interviewId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Interview",
          },
          key: "id",
        },
        allowNul: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "TechFeedback",
      modelName: "TechFeedback",
    }
  );

  return TechFeedback;
};
