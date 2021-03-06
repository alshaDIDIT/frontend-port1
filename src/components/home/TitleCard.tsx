import React from 'react';

import '../../styles/components/Cards.css'

interface IProps {
    link: string;
    title: string;
    label: string;
    videoUrl: string;
}

const TitleCard = (props: IProps) => {
    return (
        <div id="title-card-container">
            <div id="title-card">
                <div id="title-video">
                    <video autoPlay muted loop id="card-video">
                        <source
                            src={props.videoUrl}
                            type="video/mp4"
                        />
                    </video>
                    <div className="card-link" id="video-link">
                        {/*Don't @ me*/}
                        <h1>{props.title}</h1>
                        <h3>{props.label}</h3>
                    </div>
                </div>
                {/*Don't @ me*/}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos explicabo labore pariatur rerum!
                    Architecto consectetur eaque eveniet hic incidunt iusto laudantium minima modi nihil odio officiis
                    optio, provident quisquam quo rerum, sunt suscipit. Architecto, assumenda optio? A accusantium adipisci
                    autem beatae consequuntur dolorem ea et eveniet exercitationem hic illo illum in, ipsa ipsum itaque
                    iusto, maxime natus nobis quas qui quis quo ratione reiciendis, sint suscipit tenetur vitae. Aliquid
                    cupiditate, debitis deleniti doloremque doloribus eius eligendi enim est excepturi exercitationem fuga
                    iste magni minima non nulla odit officia provident qui quisquam sit tempore ut vel veniam voluptates
                    voluptatibus? Quae, reprehenderit.</p>
            </div>
        </div>
    );
};

export default TitleCard;
