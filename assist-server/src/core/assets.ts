import * as express from "express";

import { config } from "./config";

export const assets = express.static(config.server.assets);
