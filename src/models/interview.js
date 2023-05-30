const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Interview extends Model {
    static associate(models) {
      Interview.belongsToMany(models.Technology, {
        through: { model: models.InterviewTechnologies, unique: false },
        foreignKey: "interviewId",
        as: "technologies",
      });

      Interview.belongsToMany(models.User, {
        through: { model: models.InterviewUsers, unique: false },
        foreignKey: "interviewId",
        as: "interviewers",
      });

      Interview.belongsTo(models.Feedback, {});

      Interview.belongsTo(models.InterviewLevel, {});

      Interview.hasMany(models.TechFeedback, {
        foreignKey: "interviewId",
      });

      Interview.belongsTo(models.User);

      Interview.belongsTo(models.Candidate, {});
    }

    toJSON() {
      return { ...this.get() };
    }
  }

  Interview.init(
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      candidateId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Candidate",
          },
          key: "id",
        },
        allowNul: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNul: true,
      },
      interviewLevelId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "InterviewLevel",
          },
          key: "id",
        },
        allowNul: false,
      },
      feedbackId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Feedback",
          },
          key: "id",
        },
        allowNul: true,
      },
      hrId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
        allowNul: true,
      },
      managerId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "User",
          },
          key: "id",
        },
        allowNul: true,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "Interview",
      modelName: "Interview",
    }
  );

  return Interview;
};
