export const REQUEST_REPOS = "REQUEST_REPOS";
export function requestRepos() {
  return {
    type: REQUEST_REPOS
  }
}

export const RECEIVE_REPOS = "RECEIVE_REPOS";
export function receiveRepos(repos: Github.Repo[]) {
  return {
    type: RECEIVE_REPOS,
    repos
  }
}

export function fetchRepos() {
  return (dispatch: any) => {
    dispatch(requestRepos())
    return fetch("/api/user", {
        credentials: 'same-origin'
      })
      .then(response => response.text())
      .then(repos => {
        dispatch(receiveRepos(JSON.parse(repos)))
      });
  }
}
