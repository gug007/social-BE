"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Messages",
      [
        {
          body: "Hey Gurgen, how are you?",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: "fine :)",
          userId: 1,
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
