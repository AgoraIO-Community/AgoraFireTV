import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import MainAppBar from '../appBar/MainAppar'
import agorafireTV from '../../../../assets/agorafire-tv-128-128.png';
import Grid from "@material-ui/core/Grid";
import liveIcon from '../../../../assets/live .png';
import moment from "moment/moment";
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
    text: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: 0,
    },
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});

class BottomAppBar extends React.Component {
    state = {showSearch: false}
    render() {
        const { classes, activeShows } = this.props;
        const {showSearch} = this.state;
        {
            return (
                <div onMouseLeave={() => {this.setState({showSearch: true})}} onMouseEnter={() => {this.setState({showSearch: true})} }>
                    <CssBaseline />
                    <Paper square className={classes.paper} >
                        <Grid container direction={"row"}>
                            <Grid item sm={3} xs={3}>
                                <img src={agorafireTV} style={{height: 60, marginLeft: 6}}/>
                            </Grid>
                            <Grid item sm={3} xs={9}>
                                <Typography className={classes.text} variant="h5" gutterBottom>
                                    AgorafireTV 0.0.1
                                </Typography>
                            </Grid>
                        </Grid>
                        <List className={classes.list}>
                            {activeShows.map(({ id, data}) => {
                                const {iconUrl, name, isLive, timeStamp} = data;
                                return (
                                    <Fragment key={id}>
                                        {/*{id === 1 && <ListSubheader className={classes.subHeader}>Todadsfqy</ListSubheader>}*/}
                                        {/*{id === 3 && <ListSubheader className={classes.subHeader}>sdqfqsdf</ListSubheader>}*/}
                                        <ListItem button onClick={() => {this.props.toggleLive(data)}}>
                                            <Avatar alt="iconUrl" src={iconUrl} />
                                            <ListItemText primary={name} secondary={
                                                <Grid container direction={"row"} spacing={8}>
                                                    <Grid item sm={3} ><img style={{height: 32}} src={liveIcon} /></Grid>
                                                    <Grid item sm={9}>
                                                        <Typography style={{ marginTop: 5, width: 200}} variant="body2" gutterBottom>
                                                            {`${ isLive ? 'live streaming' : 'offline'} ${moment(timeStamp).fromNow()}`}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            } />

                                        </ListItem>
                                    </Fragment>
                                )
                            })}
                        </List>
                    </Paper>
                    {/*{*/}
                     {/*showSearch &&*/}
                     {/*<Slide direction="up" in={showSearch} mountOnEnter unmountOnExit>*/}
                     {/*<AppBar position="fixed" color="primary" className={classes.appBar}>*/}
                        {/*<MainAppBar/>*/}
                    {/*</AppBar>*/}
                     {/*</Slide>*/}
                    {/*}*/}
                </div>
            );
        }
    }
}


export default withStyles(styles)(BottomAppBar);