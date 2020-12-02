'use strict';

const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Reviews, { foreignKey: "userId" });
    Users.hasMany(models.Homes, { foreignKey: "userId" });
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }
  return Users;
};