import { Chat, Message } from "../models";

export const get = async () => {
  return await Chat.findAll({
    include: [
      {
        model: Message,
        order: [["id", "DESC"]],
        limit: 1
      }
    ]
  });
};

export const post = async data => {
  return await Promise.resolve(data);
};
