import React from 'react';
import '../styles/components/VideoComp.css'

const VideoComp = () => {
    return (
        <div id="video-container">
            <div id="video-bg">
                <video autoPlay muted loop id="myVideo">
                    <source
                        src='https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/EPYigw0Ux/dj-plays-music-at-a-party-in-a-club_rezoqj2__e3bec7a6c4524ccc9aafd6a80de463a3__P360.mp4'
                        type="video/mp4"
                    />
                </video>
            </div>
            <div id="video-top">
                <h1>logo</h1>
            </div>
            <div id="video-mid">
                <h1>Lorem Ipsum!</h1>
            </div>
            <div id="video-bot">
                <div id="bottom-icon">
                    <h1>{"Scrolla nedåt".toUpperCase()}</h1>
                </div>
            </div>
        </div>
    );
};

export default VideoComp;
