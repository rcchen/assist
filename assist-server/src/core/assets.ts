import * as express from "express";

const config = require("../../config.json") as Assist.Config;

export const assets = express.static(config.server.assets);
