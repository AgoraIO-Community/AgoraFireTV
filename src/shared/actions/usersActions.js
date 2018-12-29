
export function setActive(listId) {
  return {
    type: "USERS_SET_ACTIVE",
    payload: listId,
  }
}

export function refreshStart() {
  return {
    type: "USERS_REFRESH_START",
  }
}

export function refreshFulfilled(data) {
  return {
    type: "USERS_REFRESH_FULFILLED",
    payload: data,
  }
}

export function refreshErrored(error) {
  return {
    type: "USERS_REFRESH_ERRORED",
    payload: error,
  }
}

export function requestRefresh() {
  return {
    type: "USERS_REFRESH_REQUESTED",
  }
}

export function urlSubmitStart() {
  return {
    type: "URL_SUBMIT_START",
  }
}

export function urlSubmitFulfilled(data) {
  return {
    type: "URL_SUBMIT_FULFILLED",
    payload: data,
  }
}

export function urlSubmitErrored(error) {
  return {
    type: "URL_SUBMIT_ERRORED",
    payload: error,
  }
}

export function requestURLSubmit(listId, url, title) {
  return {
    type: "URL_SUBMIT_REQUESTED",
    payload: {
      listId: listId,
      url: url,
      title: title,
    }
  }
}
