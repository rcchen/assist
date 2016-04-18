import * as express from "express";

import { config } from "./config";

export const spa = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (req.accepts("html")) res.sendFile(`${config.server.assets}/index.html`);
  else next();
};
