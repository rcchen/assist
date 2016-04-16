/// <reference path="../../main/ambient/express-session/index.d.ts" />

declare namespace Assist {
  export interface Config {
    github: {
      id: string;
      secret: string;
    },
    server: {
      session: {
        secret: string;
      }
    }
  }

  interface Session extends Express.Session {
    github_token: string;
  }
}
