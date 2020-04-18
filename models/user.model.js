const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('dotenv').config();

('use strict')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        validate: {
          is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i
        }
      }
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        }
      },
      defaultScope: {
        attributes: { exclude: ['password'] }
      },
      underscored: true
    }
  );

  User.associate = function associate(models) {
    User.hasMany(models.List, { as: 'creator', foreignKey: 'creator_id' });
    User.belongsToMany(models.List, { as: 'lists', through: 'list_members' });
  };

  User.prototype.checkPassword = async function(password) {
    const hashedPassword= await bcrypt.hash(password,10);
    return this.password === hashedPassword
  };

  User.prototype.generateToken = function() {
    return jwt.sign(
      {
        id: this.id,
        exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60
      },
      process.env.JWT_SECRET
    );
  };

  return User;
};
