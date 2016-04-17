import * as express from "express";
import * as github from "octonode";
import * as qs from "qs";

import { config } from "./config";
import { session } from "./session";

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
  const session = req.session as Assist.Session;
  const values = qs.parse(req.query) as Github.OAuthResponse;
  github.auth.login(values.code, (err, token) => {
    session.github_token = token;
    res.redirect("/");
  });
});

/*
 * Middleware function for determining whether the current session needs to request a token or not.
 * TODO: Add code for hitting Github to check that the token is valid
 */
export function isAuthenticated(req: express.Request, res: express.Response, next: Function) {
  const session = req.session as Assist.Session;
  // token not in session
  if (session.github_token === undefined) {
    res.redirect("/auth/login");
  } else {
    next();
  }
}
