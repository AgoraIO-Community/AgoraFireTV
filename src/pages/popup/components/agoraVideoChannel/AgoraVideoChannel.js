import React from 'react'
import {merge} from 'lodash'
import AgoraRTC from "agora-rtc-sdk";
import {settings} from "./Agora.config";
import './canvas.css'

class AgoraCanvas extends React.Component {
    client;
    stream;

    constructor() {
        super();
        this.state = {audioDisabled: false};

    }

    async componentWillMount() {
        const {CODEC, MODE, AGORA_APP_ID} = settings;
        this.client = AgoraRTC.createClient({mode: MODE, codec: CODEC});
        await this.initClient(AGORA_APP_ID);
        this.join(this.props.channelId);
    }

    componentWillUnmount() {
        this.unsubscribeToChannel();
    }

    async initClient(appId) {
        return new Promise(((resolve, reject) => {
            this.client.init(appId, (err) => {
                if (err) reject(err);
                console.log("AgoraRTC client initialized");
                resolve(appId);
            })
        }))
    };

    toggleAudio() {
        this.setState({audioDisabled: !this.state.audioDisabled})
    }


    join(channel) {
        this.client.join(null, channel, null, (uid) => {
            console.log("User " + uid + "Join channel successfully")
            this.client.on('stream-added', async (evt) => {
                this.stream = evt.stream;
                console.log("New stream added: " + this.stream.getId());
                this.client.subscribe(this.stream, (err) => {
                    console.log("Subscribe stream failed", err);
                });
            });
            this.client.on('stream-subscribed', (evt) => {
                console.log("Subscribe remote stream successfully: " + this.stream.getId());
                this.stream.play('ag-canvas');
            })
        })
    }



    unsubscribeToChannel() {
        // this.stream.stop();
        this.client.leave(function () {
            console.log("Leavel channel successfully");
        }, function (err) {
            console.log("Leave channel failed");
        });
    }

    render() {
        return (
            <div id="ag-canvas" />
        )
    }
}

export default AgoraCanvas;
