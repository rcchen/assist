export const REQUEST_USER = "REQUEST_USER";
export function requestUser() {
  return {
    type: REQUEST_USER
  }
}

export const RECEIVE_USER = "RECEIVE_USER";
export function receiveUser(user: Github.User) {
  return {
    type: RECEIVE_USER,
    user
  }
}

export function isAuthenticated() {
  return (dispatch: any) => {
    return fetch("/api/authenticated", {
        credentials: "same-origin"
      })
      .then(response => response.json())
      .then(status => {
        if (status) dispatch(fetchUser());
      });
  }
}

export function fetchUser() {
  return (dispatch: any) => {
    dispatch(requestUser())
    return fetch("/api/user", {
        credentials: "same-origin"
      })
      .then(response => response.json())
      .then(user => {
        dispatch(receiveUser(user))
      });
  }
}
