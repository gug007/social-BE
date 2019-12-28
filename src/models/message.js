"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      chatId: DataTypes.INTEGER,
      body: DataTypes.STRING,
      attachments: DataTypes.ARRAY(DataTypes.TEXT),
      deleted: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );
  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Message.belongsTo(models.Chat, {
      foreignKey: "chatId"
    });
  };
  return Message;
};
