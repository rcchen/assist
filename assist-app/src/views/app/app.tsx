import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { fetchUser, isAuthenticated } from "../../actions";

// inlining these local to components for now, we'll see how it goes
require("./app.less");

const mapStateToProps = (state: any) => {
  return {
    user: state.user
  }
}

interface IAppProps {
  user: Github.User,
  dispatch: Dispatch
}

class AppComponent extends React.Component<IAppProps, {}> {
  public render() {
    let userElement: JSX.Element;

    const user = this.props.user
    if (Object.keys(user).length > 0) {
      userElement = (
        <div className="at-sidebar-user at-hoverable">
          <div className="at-sidebar-user-image">
            <img src={user.avatar_url} />
          </div>
          <div className="at-sidebar-user-info">
            <div>{user.name}</div>
            <div>@{user.login}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="at-sidebar">
        <a href="/auth/login">Login</a>
        <a href="" onClick={this.validate}>Validate</a>
        { userElement }
      </div>
    );
  }

  public componentDidMount() {
    this.props.dispatch(isAuthenticated());
  }

  private validate = (e: React.TouchEvent) => {
    e.preventDefault();
    this.props.dispatch(fetchUser());
  };

}

export const App = connect(
  mapStateToProps
)(AppComponent);
