import * as expressSession from "express-session";

const config = require("../../config.json") as Assist.Config;

const MAX_COOKIE_AGE = 60000;

export const session = expressSession({
  cookie: {
    maxAge: MAX_COOKIE_AGE
  },
  resave: false,
  saveUninitialized: true,
  secret: config.server.session.secret
});
