const jwt = require("jsonwebtoken");
const passport = require("passport");
import { SECRET_KEY } from "./passport";

export const auth = (...params) =>
  passport.authenticate("jwt", { session: false })(...params);

export const signup = (req, res, next) => {
  passport.authenticate("signup", { session: false }, (err, response, info) => {
    res.json(response);
  })(req, res);
};

export const login = async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    console.log(err, user);
    try {
      if (err || !user) {
        return res.json({ error: "user.wrongAuthData" });
      }
      req.login(user, { session: false }, async error => {
        if (error) return next(error);
        const body = { id: user.id, email: user.email };
        const token = jwt.sign({ user: body }, SECRET_KEY);
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
