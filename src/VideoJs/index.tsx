import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";

interface IVideoPlayerProps {
    link: string
}

const initialOptions: videojs.PlayerOptions = {
    autoplay: false,
    preload: "auto",
    controls: true,
    poster: "",
    playbackRates: [0.50, 0.75, 1, 1.5, 2],
    height: 500,
    controlBar: {
        currentTimeDisplay: true,
        descriptionsButton: true,
        volumePanel: {
            inline: false,
        },
        timeDivider: true
    },
    liveui: false,


};
const VideoJS: React.FC<IVideoPlayerProps> = ({ link }) => {
    
    const videoNode = useRef<HTMLVideoElement | null>(null);
    const player = useRef<videojs.Player>();
    let controls = true;

    useEffect(() => {
        player.current = videojs(videoNode.current || "", {
            ...initialOptions,
            sources: [{
                src: link,
                type: 'application/x-mpegURL',
            }]
        }).ready(function () {
            if (controls) {
                this.hlsQualitySelector({
                    displayCurrentQuality: true,
                })
                controls = false;
            }
        })

        if (player.current) {
            player.current.dispose();
        }

    }, [link]);

    return (
        <div data-vjs-player>
            <video
                ref={videoNode}
                className="video-js vjs-default-skin vjs-big-play-centered"
            ></video>
        </div>
    )
};

export default VideoJS;