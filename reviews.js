'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: {
      type: DataTypes.TEXT
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Homes' }
    },
    homeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Homes' }
    },
  }, {});
  Reviews.associate = function(models) {
    Reviews.belongsTo(models.Users, { foreignKey: "userId" });
    Reviews.belongsTo(models.Homes, { foreignKey: "homeId" });
  };
  return Reviews;
};