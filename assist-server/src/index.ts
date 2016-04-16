import * as express from "express";
import * as github from "octonode";
import * as qs from "qs";

import { auth } from "./core";

const app = express();

app.use(auth);

const client = github.client();
app.get("/", (req, res) => {
  client.user("rcchen").info((err, user) => {
    res.json(user);
  });
});

app.listen(3000);
