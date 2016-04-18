import * as express from "express";
import * as github from "octonode";
import * as path from "path";
import * as qs from "qs";

import { api, assets, auth, isAuthenticated, session, spa } from "./core";

const app = express();

app.use("/", assets);
app.use("/api", api);
app.use(auth);
app.use(session);
app.use(spa);

app.get("/authenticated", isAuthenticated, (req, res) => {
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
