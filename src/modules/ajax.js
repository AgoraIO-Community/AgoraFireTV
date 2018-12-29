import * as userActions from '../shared/actions/usersActions'
import * as showsActions from '../shared/actions/showsActions'
import * as _ from 'lodash'
import {firestore, snapShotToList} from "../shared/firebase";

export async function fetchUsers(dispatch) {
  dispatch( async (dispatch) => {
    dispatch(userActions.refreshStart())
    try  {
        const usersSnap = await firestore.collection('users').get();
        dispatch(userActions.refreshFulfilled(snapShotToList(usersSnap).map( user => user.data)))
    }
    catch (err) {
        dispatch(userActions.refreshErrored(err))
    }
  })
}

/**
 * checks for changes in the shows list
 * @param currentShows
 * @param updatedShows
 * @returns {*}
 */
function findNewShow(currentShows, updatedShows) {
    console.log(currentShows,updatedShows)
    if(currentShows.length >= updatedShows.length) {
        return _.differenceWith( updatedShows,currentShows, _.isEqual);
    }
    else {
        return [];
    }
}

/**
 *
 * @param name
 * @param description
 * @param iconUrl
 */
function showNotification(name, timeStamp, iconUrl, isLive) {
    const options = {
        type: "basic",
        title: name,
        message: `${ isLive ? 'live streaming' : 'offline'} ${moment(timeStamp).fromNow()}`,
        iconUrl: iconUrl
    }
    chrome.notifications.create("notify", options, id => {console.log(id)});
}

/**
 * query shows and listen for updates
 * @param dispatch
 * @param getState
 * @returns {Promise<void>}
 */
export async function fetchShows(dispatch,getState) {
    dispatch( async (dispatch) => {
        const {activeShows, firstVisit} = getState().shows;
        dispatch(userActions.refreshStart())
        try  {
            firestore.collection('shows').onSnapshot((showsSnap) => {
                const shows = snapShotToList(showsSnap)
                const newShows = findNewShow(activeShows, shows);
                dispatch(showsActions.refreshFulfilled(shows))
                if  ( newShows.length > 0 && !firstVisit) {
                    const {name, timeStamp, iconUrl, isLive} = newShows[0].data;
                   showNotification(name, timeStamp, iconUrl, isLive);
                }
            })
        }
        catch (err) {
            dispatch(showsActions.refreshErrored(err))
        }

    })
}
