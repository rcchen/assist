import * as expressSession from "express-session";

import { config } from "./config";

const MAX_COOKIE_AGE = 60000;

export const session = expressSession({
  cookie: {
    maxAge: MAX_COOKIE_AGE
  },
  resave: false,
  saveUninitialized: true,
  secret: config.server.session.secret
});
