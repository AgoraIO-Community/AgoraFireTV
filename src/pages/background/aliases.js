
import { fetchShows } from '../../modules/ajax'

const showsRefreshRequestedAlias = (originalAction) => {
    return (dispatch, getState) => {
        fetchShows(dispatch, getState)
    }
}



export default {
  'SHOWS_REFRESH_REQUESTED': showsRefreshRequestedAlias,
}
