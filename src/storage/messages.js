// import { Message } from "../models";

// TODO: connect db model
const list = new Array(190).fill().map((v, i) => ({
  id: i,
  user: { id: 1, firstName: 'Gurgen',  lastName: 'Abagyan' },
  message: "hey dude.. how's it going? check out my new messenger app",
  date: new Date()
}));

export const get = async ({ id }) => {
  return await Promise.resolve(list);
};

export const post = async data => {
  list.push({
    id: new Date(),
    user: { id: 1, firstName: 'Gurgen',  lastName: 'Abagyan' },
    message: data.message,
    date: new Date()
  });
  return await Promise.resolve(list);
};
