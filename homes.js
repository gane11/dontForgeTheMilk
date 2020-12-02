'use strict';
module.exports = (sequelize, DataTypes) => {
  const Homes = sequelize.define('Homes', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    lat: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    lng: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    isAvailable: {
      allowNull: false,
      defaultValue: true,
      type: DataTypes.BOOLEAN
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId:  DataTypes.INTEGER,
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Owners' }
    } 
  }, {});
  Homes.associate = function(models) {
    Homes.belongsTo(models.Owners, { foreignKey: "ownerId" });
    Homes.hasMany(models.Reviews, { foreignKey: "homeId" });
  };
  return Homes;
};