declare namespace Github {
  interface User {
    avatar_url: string;
    id: number;
    login: string;
    name: string;
    type: string;
    url: string;
  }
}

declare namespace Octonode {
  interface AppAuthConfig {
    apiUrl?: string;
    id: string;
    secret: string;
    webUrl?: string;
  }

  interface UserAuthConfig {
    username: string;
    password: string;
  }

  class Auth {
    public login(scopes: string[], cb?: (err: string, id: string, token: string) => void): string;
  }

  class Client {
    public me(): Me;
    public user(user: string): User;
    public repo(repo: string): any;
    public org(org: string): any;
    public issue(repo: string, issue: number): any;
    public milestone(repo: string, milestone: number): any;
    public gist(): any;
  }

  class Me {
    public info(cb: (err: any, data: Github.User, headers?: any) => void): void;
  }

  class User {
    public info(cb: (err: any, data: Github.User, headers?: any) => void): void;
  }

  function client(): Client;

  namespace auth {
    function config(config: AppAuthConfig | UserAuthConfig): Auth;
  }
}

declare module "octonode" {
  import octonode = Octonode;
  export = octonode;
}
