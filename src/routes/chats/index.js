import * as storage from "../../storage/chats";

export const get = async (req, res) => {
  const { id } = req.queryAndBody;
  try {
    res.send(await storage.get({ id }));
  } catch (e) {
    res.status(500).send({ error: "Error" });
  }
};

export const post = async (req, res) => {
  const { data } = req.queryAndBody;
  try {
    res.send(await storage.post(data));
  } catch (e) {
    res.status(500).send({ error: "Error" });
  }
};
