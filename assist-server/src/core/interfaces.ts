interface IAssistConfig {
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

interface IAssistSession extends Express.Session {
  github_token: string;
}
