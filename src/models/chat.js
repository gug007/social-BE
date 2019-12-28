"use strict";
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "Chat",
    {
      title: DataTypes.STRING
    },
    {}
  );
  Chat.associate = function(models) {
    Chat.hasMany(models.Message, {
      foreignKey: "chatId"
    });
  };
  return Chat;
};
