import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { fetchUser } from "../actions";

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
        <div>
          <h1>{user.name} ({user.login})</h1>
          <img src={user.avatar_url} />
        </div>
      );
    }

    return (
      <div>
        <div><a href="/auth/login">Login</a></div>
        <div><a href="" onClick={this.validate}>Validate</a></div>
        { userElement }
      </div>
    );
  }

  private validate = (e: React.TouchEvent) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(fetchUser());
  };

}

export const App = connect(
  mapStateToProps
)(AppComponent);
