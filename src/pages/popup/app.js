import React from 'react'
import {connect} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import * as usersActions from '../../shared/actions/usersActions'
import * as showsActions from '../../shared/actions/showsActions'
import Live from "./components/live/Live";
import './app.css'
import Feed from "./components/feed/Feed";
import Slide from "@material-ui/core/Slide";

@connect((store) => {
    return {
        shows: store.shows,
    }
})
export default class App extends React.Component {

    state = {notificationsEnabled: this.props.shows.notificationsEnabled, showLive: false, selectedShow: {}}

    toggleLive = (selectedShow) => {
        const {showLive} = this.state;
        this.setState({showLive: !showLive, selectedShow});
    };

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(usersActions.requestRefresh())
        dispatch(showsActions.requestRefresh())
    }

    toggleNotifications() {
        const {notificationsEnabled} = this.props.shows;
        this.setState({notificationsEnabled: !notificationsEnabled})
        this.props.dispatch(showsActions.toggleNotification())
    }

    render() {
        const {activeShows} = this.props.shows;
        const {notificationsEnabled, showLive, selectedShow} = this.state;
        return (
            <div className={"scroll feedScroll"}>
                {showLive ? ( <Slide direction={`${ showLive? 'left': 'right'}`} in={showLive} mountOnEnter unmountOnExit><Live selectedShow={selectedShow} toggleLive={this.toggleLive}/></Slide>) : (<Feed toggleLive={(selectedShow) => {this.toggleLive(selectedShow)}} activeShows={activeShows}/>)}
            </div>
        )
    }
}
