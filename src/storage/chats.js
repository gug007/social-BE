import { Chat, Message } from "../models";

const includeMessage = [
  {
    model: Message,
    order: [["id", "DESC"]],
    limit: 1
  }
];

export const get = async () => {
  return await Chat.findAll({
    include: includeMessage
  });
};

export const post = async ({ title }) => {
  return await Chat.create(
    { title },
    {
      include: includeMessage
    }
  );
};
