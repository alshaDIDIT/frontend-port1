import React from 'react';
import {Link} from "react-router-dom";
import '../../styles/components/Cards.css'

interface IProps {
    link: string;
    title: string;
    label:string;
    backImage: string;
}

const Card = (props: IProps) => {
    return (
            <div id="card" style={{backgroundImage: 'url(' + props.backImage + ')'}}>
                <Link className="card-link" to={props.link} >
                {/*Don't @ me*/}
                    <h1>{props.title}</h1>
                    <h3>{props.label}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aut beatae culpa dolores enim
                    harum id, illum ipsa nemo nesciunt odio quia recusandae rerum soluta. Accusantium cumque dolorem ea
                    id ipsam magni nam officia quas? Id quos ullam vero voluptatibus. Aspernatur ex incidunt minima
                    obcaecati quisquam rerum? Distinctio, quis.</p>
                </Link>
            </div>

    );
};

export default Card;
