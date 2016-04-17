import * as express from "express";
import * as github from "octonode";

import { session } from "./session";

export const api = express();
api.use(session);

api.get("/user", (req, res) => {
  const session = req.session as Assist.Session;
  github.client(session.github_token).me().info((err, user) => {
    res.json(user);
  });
});
