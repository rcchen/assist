import * as express from "express";
import * as github from "octonode";
import * as qs from "qs";

import { auth, session } from "./core";

const app = express();

app.use(auth);
app.use(session);

app.get("/", (req, res) => {
  const session = req.session as Assist.Session;
  const client = github.client(session.github_token);
  client.me().info((err, user) => {
    res.json({
      err,
      user,
      session
    });
  });
});

app.listen(3000);
