import * as express from "express";
import * as github from "octonode";

import { config } from "./config";
import { session } from "./session";

export const api = express();
api.use(session);

// HACKHACK: Uses existence of error when hitting the User endpoint
// Should be replaced with something else that doesn't incur an API hit ideally
api.get("/authenticated", (req, res) => {
  const session = req.session as Assist.Session;
  github.client(session.github_token).me().info((err, user) => {
    res.json(err == null);
  });
});

api.get("/user", (req, res) => {
  const session = req.session as Assist.Session;
  github.client(session.github_token).me().info((err, user) => {
    res.json(user);
  });
});

api.get("/user/repos", (req, res) => {
  const session = req.session as Assist.Session;
    github.client(session.github_token).me().repos((err, repos) => {
      res.json(repos);
    });
});
