import React from 'react';
import '../../styles/components/FootContainer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrochip} from "@fortawesome/free-solid-svg-icons";

const FootContainer = () => {
    return (
        <div id="foot-container">
            <div id="foot-content">
                <div id="foot-logo">
                    <h1>Lorem Ipsum <FontAwesomeIcon icon={faMicrochip}/></h1>
                </div>
                <div className="social-tab">
                    <a href="#"><img className="logo" src={require("../../assets/img/facebook.png")}
                                     alt="iconsout.com"/></a>
                    <a href="#"><img className="logo" src={require("../../assets/img/instagram.png")}
                                     alt="Instagram Icon by Juraj Sedlák - iconsout.com"/></a>
                    <a href="#"><img className="logo" src={require("../../assets/img/twitter.png")} alt="iconsout.com"/></a>
                </div>
                <div id="info-tab">
                    <div id="info">
                        <a href=""><h3 className="foot-info">Lorem Ipsum 1</h3></a>
                        <a href=""><h3 className="foot-info">lorem@ipsum.com</h3></a>
                        <a href=""><h3 className="foot-info">+00 00 000 00</h3></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FootContainer;
