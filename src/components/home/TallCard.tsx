import React from 'react';
import '../../styles/components/Cards.css'
import {Link} from "react-router-dom";

interface IProps {
    link: string;
    title: string;
    label:string;
    backImage: string;
}

const TallCard = (props: IProps) => {
    return (
        <Link to={props.link}>
            <div id="tall-card-container">
                <div className="card-link" id="tall-card" style={{backgroundImage: 'url(' + props.backImage + ')'}}>
                    <h1>{props.title}</h1>
                    <h3>{props.label}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam, aut autem beatae culpa dolore,
                        dolorem eligendi excepturi id in incidunt iusto laborum laudantium nostrum numquam perspiciatis quo
                        sapiente sed sit unde. Aliquam consectetur consequuntur deleniti exercitationem expedita hic impedit
                        obcaecati perferendis provident, quaerat quibusdam reprehenderit sint vel vitae voluptatem?</p>
                </div>
            </div>
        </Link>
    );
};

export default TallCard;
