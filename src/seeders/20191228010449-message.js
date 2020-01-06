"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Messages",
      [
        {
          body: "Hey Gurgen",
          userId: 2,
          chatId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body: "😃👋",
          userId: 1,
          chatId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          body: "😅",
          userId: 2,
          chatId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body:
            "It's happened for peos for me in the past I believe. I'd be crap at explaining it",
          userId: 1,
          chatId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          body:
            "Just been listening to some Dash people who think that all those sock puppets are in the top 21 running on one server. Similar misinformed fudding in a medium article. Throwing mud as a tactic works - eventually enough of it sticks. But I guess we do deserve it if the network can't protect itself from sock puppets, shared infra or single entities running multiple nodes. Eosio suffers from it, not just mainnet",
          userId: 1,
          chatId: 3,
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
