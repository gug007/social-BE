import * as auth from "../../storage/auth";
import fetch from "node-fetch";

export const isAdmin = async (req, res, next) => {
  const { sid, hash } = req.queryAndBody;
  try {
    const auth = await auth.isAdmin({ sid, hash });
    if (auth) {
      next();
    } else {
      next({ error: "Authorization failed" });
    }
  } catch (e) {
    next({ error: "Authorization failed" });
  }
};

export const number = async (req, res) => {
  const { to } = req.body;
  const secretCode = Math.floor(Math.random() * 999999);
  try {
    fetch("https://gate.smsclub.mobi/token/", {
      method: "POST",
      body: JSON.stringify({
        username: "380930151811",
        token: "K7p0cmdkE66uywX",
        from: "Social",
        to,
        text: `code: ${secretCode}`,
        lifetime: "1"
      }),
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => res.text())
      .then(r => {
        console.log(r);
        res.send({ r });
      });
  } catch (e) {
    res.status(500).send({ error: "Error" });
  }
};
