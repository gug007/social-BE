import { User } from "../models";

export const isAdmin = async ({ sid, hash }) => {
  return await User.findOne({
    where: {
      id: sid,
      hash
    }
  });
};
