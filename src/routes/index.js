import express from "express";
import * as messages from "./messages";
import * as chats from "./chats";

const router = express.Router();

router.use((req, res, next) => {
  req.queryAndBody = Object.assign({}, req.body, req.query);
  next();
});

router.get("/messages", messages.get); // public
router.post("/messages", messages.post); // private
router.get("/chats", chats.get); // public
router.post("/chats", chats.post); // private

export default router;
