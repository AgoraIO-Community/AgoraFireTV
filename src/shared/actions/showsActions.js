export function refreshStart() {
    return {
        type: "SHOWS_REFRESH_START",
    }
}

export function refreshFulfilled(data) {
    return {
        type: "SHOWS_REFRESH_FULFILLED",
        payload: data,
    }
}

export function refreshErrored(error) {
    return {
        type: "SHOWS_REFRESH_ERRORED",
        payload: error,
    }
}

export function requestRefresh() {
    return {
        type: "SHOWS_REFRESH_REQUESTED",
    }
}

export function toggleNotification() {
    return {
        type: "TOGGLE_NOTIFICATION",
    }
}

export function changeVolume() {
    return {
        type: "CHANGE_VOLUME",
    }
}