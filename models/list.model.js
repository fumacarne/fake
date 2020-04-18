'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    'List',
    {
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        validate: {
          len: [3, 255]
        }
      }
    },
    { underscored: true }
  );
  List.associate = function(models) {
    List.belongsTo(models.User, {
      as: 'creator',
      foreignKey: 'creator_id'
    });
    List.belongsToMany(models.User, { as: 'members', through: 'list_members' });
    List.hasMany(models.Todo);
  };
  return List;
};
