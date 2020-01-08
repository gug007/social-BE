import express from "express";
import * as messages from "./messages";
import * as chats from "./chats";
import * as user from "./user";
import * as location from "./location";
import "./user/passport";

const router = express.Router();

router.use((req, res, next) => {
  req.queryAndBody = Object.assign({}, req.body, req.query);
  next();
});

router.post("/signup", user.signup);
router.post("/login", user.login);
router.get("/auth", user.auth, user.get);
router.get("/messages/:id", messages.get);
router.post("/messages", messages.post);
router.get("/chats", user.auth, chats.get);
router.post("/chats", chats.post);
router.get("/location/cities/:countryId", location.getCities);

export default router;
