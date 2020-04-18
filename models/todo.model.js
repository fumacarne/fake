'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      text: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        validate: {
          len: [3, 255]
        }
      },
      is_complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    { underscored: true }
  );
  Todo.associate = function(models) {
    Todo.belongsTo(models.List);
  };
  return Todo;
};
