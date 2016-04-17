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

export function fetchUser() {
  return (dispatch: any) => {
    dispatch(requestUser())
    return fetch("/api/user", {
        credentials: 'same-origin'
      })
      .then(response => response.text())
      .then(user => {
        dispatch(receiveUser(JSON.parse(user)))
      });
  }
}
