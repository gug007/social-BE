// import { Message } from "../models";

// TODO: connect db model
const list = [];

export const get = async ({ id }) => {
  return await Promise.resolve(list);
};

export const post = async data => {
  list.push(data);
  return await Promise.resolve(list);
};
