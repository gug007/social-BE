"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Chats",
      [
        {
          title: "Room 1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Room 2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Room 3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Room 4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Room 5",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Room 6",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Room 7",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Room 8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Room 9",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Messages", null, {});
  }
};
