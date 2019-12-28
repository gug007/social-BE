"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Gurgen",
          lastName: "Abagyan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Elon",
          lastName: "Mask",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
