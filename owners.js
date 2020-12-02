'use strict';
module.exports = (sequelize, DataTypes) => {
  const Osers = sequelize.define('Owners', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100)
    },
  }, {});
  Osers.associate = function(models) {
    User.hasMany(models.Homes, { foreignKey: "ownerId" });
  };
  return Osers;
};