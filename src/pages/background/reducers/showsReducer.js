

export default function showsReducer(state={ activeShows: [], loadingShows: false, firstVisit: true, notificationsEnabled: true, volume: 50}, action) {
    switch(action.type) {
        case "SHOWS_REFRESH_FULFILLED":
            state =  {...state, activeShows: action.payload, firstVisit: false}
            break
        case "SHOWS_REFRESH_START":
            state =  {...state, loadingShows: true}
            break
        case "SHOWS_REFRESH_ERRORED":
            state =  {...state, loadingShows: false}
            break
        case "NOTIFICATION_ENABLED":
            state =  {...state, notificationsEnabled: !state.notificationsEnabled}
            break
        case "TOGGLE_NOTIFICATION":
            state = {...state, volume:  action.payload}
    }
    return state
}
