import { Message, User } from "../models";

export const get = async ({ id }) => {
  return await Message.findAll({
    where: { chatId: id },
    include: [
      {
        model: User
      }
    ]
  });
};

export const post = async data => {
  return await Promise.resolve([]);
};
