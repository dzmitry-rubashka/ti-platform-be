const { Sequelize, Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: { model: models.UserRole, unique: false },
        foreignKey: "roleId",
      });
    }

    toJSON() {
      return { ...this.get() };
    }
  }

  Role.init(
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
      tableName: "Role",
      modelName: "Role",
    }
  );

  return Role;
};
