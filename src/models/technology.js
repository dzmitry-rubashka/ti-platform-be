const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Technology extends Model {
    static associate(models) {
      Technology.belongsToMany(models.Interview, {
        through: { model: models.InterviewTechnologies, unique: false },
        foreignKey: "technologyId",
      });

      Technology.hasMany(models.TechFeedback, {
        foreignKey: "technologyId",
      });
    }

    toJSON() {
      return { ...this.get() };
    }
  }

  Technology.init(
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        dafaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "Technology",
      modelName: "Technology",
    }
  );

  return Technology;
};
