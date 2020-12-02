'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservations = sequelize.define('Reservations', {
    homeId: {
      allowNull: false,
     type: DataTypes.INTEGER,
      references: { model: 'Homes' }
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    numPeople:{
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    startDate:{
      allowNull: false,
      type: DataTypes.DATE,
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {});
  Reservations.associate = function(models) {
    Reservations.belongsTo(models.Homes, { foreignKey: "homeId" });
    Reservations.belongsTo(models.Users, { foreignKey: "userId" });
  };
  return Reservations;
};