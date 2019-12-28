import express from "express";
import * as messages from "./messages";
import * as chats from "./chats";
import * as auth from "./auth";

const router = express.Router();

router.use((req, res, next) => {
  req.queryAndBody = Object.assign({}, req.body, req.query);
  next();
});

router.use("/auth", auth.number);
router.get("/messages/:id", messages.get);
router.post("/messages", messages.post);
router.get("/chats", chats.get);
router.post("/chats", chats.post);

export default router;
