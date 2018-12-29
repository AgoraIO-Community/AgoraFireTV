import React from "react";
import "./live.css";
import AgoraVideoCall from "../agoraVideoChannel/AgoraVideoChannel";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import PictureInPictureIcon from '@material-ui/icons/PictureInPicture';
import liveIcon from '../../../../assets/live .png';
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import Typography from "@material-ui/core/es/Typography/Typography";

export default class Live extends React.Component {
    state = {
        volume: 50,
        volumeEnabled: false
    };

    volumeUp = () => {
        let {volume} = this.state;
        if (volume < 100) {
            this.setState({volume: volume + 1});
        }
    };

    volumeDown = () => {
        let {volume} = this.state;
        if (volume > 0) {
            this.setState({volume: volume - 1});
        }
    };

    showVolume = () => {
        let {volumeEnabled} = this.state;
        this.setState({volumeEnabled: !volumeEnabled});
    };

    render() {
        const {channelId, iconUrl, name, isLive, timeStamp} = this.props.selectedShow;
        const {volume, volumeEnabled} = this.state;
        return (
            <div className="liveContainer">
                <div className="videoContainer">
                    <AgoraVideoCall channelId={channelId}/>
                    <div className="directContainer">
                        <img src={liveIcon} style={{height: 33}}/>
                    </div>
                    {/*{volumeEnabled ? (*/}
                    {/*<div className="volumeBlock">*/}
                    {/*<button*/}
                    {/*className="volumeButton volumeMinus"*/}
                    {/*onClick={this.volumeDown}*/}
                    {/*>*/}
                    {/*-*/}
                    {/*</button>*/}
                    {/*<p className="volumeText">{volume}</p>*/}
                    {/*<button*/}
                    {/*className="volumeButton volumePlus"*/}
                    {/*onClick={this.volumeUp}*/}
                    {/*>*/}
                    {/*+*/}
                    {/*</button>*/}
                    {/*</div>*/}
                    {/*) : null}*/}

                    <div className="volumeIcon">
                        <IconButton color={"secondary"} aria-label="Delete" onClick={() => {
                            this.showVolume()
                        }}>
                            {volumeEnabled ? <VolumeMuteIcon fontSize="small"/> : <VolumeUpIcon fontSize="small"/>}
                        </IconButton>
                    </div>
                    <div className="pictureInPictureIcon">
                        <IconButton color={"secondary"} aria-label="Delete" onClick={() => {
                        }}>
                            <PictureInPictureIcon fontSize="small"/>
                        </IconButton>
                    </div>
                    <div className="arrowIcon">
                        <IconButton color={"secondary"} aria-label="Delete" onClick={() => {
                            this.props.toggleLive({})
                        }}>
                            <ArrowBackIcon fontSize="small"/>
                        </IconButton>
                    </div>
                </div>
                <div>
                    <Grid container direction={"row"} spacing={8} style={{margin: 5}}>
                        <Grid item xs={4}>
                            <img src={iconUrl} className={"videoFooterImg"}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{marginTop: 5, width: 200}} variant="body2" gutterBottom>
                                {`${name} is ${ isLive ? 'live streaming' : 'offline'} ${moment(timeStamp).fromNow()}`}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>

            </div>
        );
    }
}
