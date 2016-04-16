import * as express from "express";
import * as github from "octonode";
import * as qs from "qs";

import { session } from "./session";

const config = require("../../config.json") as IAssistConfig;

const auth_url = github.auth.config({
  id: config.github.id,
  secret: config.github.secret
}).login(["user", "repo"]);

export const auth = express();
auth.use(session);

auth.get("/auth/login", (req, res) => {
  res.redirect(auth_url);
});

auth.get("/auth/redirect", (req, res) => {
  const session = req.session as IAssistSession;
  const values = qs.parse(req.query) as Github.OAuthResponse;
  github.auth.login(values.code, (err, token) => {
      session.github_token = token;
      res.json(token);
  });
});
