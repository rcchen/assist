import * as React from "react";
import { Router, Route, browserHistory } from "react-router"

import { App, Repos } from "./views";

export class AppRouter extends React.Component<{}, {}> {
  public render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/repos" component={Repos} />
        </Route>
      </Router>
    )
  }
}
