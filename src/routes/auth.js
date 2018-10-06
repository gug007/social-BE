import * as auth from "../storage/auth";

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
