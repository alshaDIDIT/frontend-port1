import React from 'react';
import '../../styles/components/VideoComp.css'
import {faMicrochip} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const VideoComp = () => {
    return (
        <div id="video-container">
            <div id="video-bg">
                <video autoPlay muted loop id="myVideo">
                    <source
                        src='https://assets.mixkit.co/videos/preview/mixkit-woman-spins-a-small-world-globe-21319-large.mp4'
                        type="video/mp4"
                    />
                </video>
            </div>
            <div id="video-top">
                <h1>Lorem Ipsum <FontAwesomeIcon icon={faMicrochip} /></h1>
            </div>
            <div id="video-mid">
                <h1>Hello World!</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at deleniti dicta eius eum
                    facere maiores necessitatibus odit provident vero!</h2>
            </div>
            <div id="video-bot">
                <div id="bottom-icon">
                    <h1>{"Scroll down".toUpperCase()}</h1>
                </div>
            </div>
        </div>
    );
};

export default VideoComp;
