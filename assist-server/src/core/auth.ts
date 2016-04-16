import * as express from "express";
import * as github from "octonode";
import * as qs from "qs";

interface IAssistConfig {
  github: {
    id: string;
    secret: string;
  }
}

const config = require("../../config.json") as IAssistConfig;

const auth_url = github.auth.config({
  id: config.github.id,
  secret: config.github.secret
}).login(["user", "repo"]);

export const auth = express();

auth.get("/auth/login", (req, res) => {
  res.redirect(auth_url);
});

auth.get("/auth/redirect", (req, res) => {
  const values = qs.parse(req.query);
  res.json(values);
});
