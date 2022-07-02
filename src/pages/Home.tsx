import React from 'react';
import VideoComp from "../components/home/VideoComp";
import TallCard from "../components/home/TallCard";

import '../styles/pages/Home.css'
import WideCard from "../components/home/WideCard";
import Card from "../components/home/Card";
import TitleCard from "../components/home/TitleCard";

const Home = () => {
    return (
        <div id="home-container">
            <VideoComp/>


            <div className="center-content">
                <div className="container gap-sm">
                    <div className="d-flex">
                        <TallCard />
                        <div className="d-flex flex-col gap-sm">
                            <WideCard />
                            <div className="d-flex">
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                    <TitleCard />
                </div>
            </div>

        </div>
    );
};

export default Home;
