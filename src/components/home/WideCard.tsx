import React from 'react';
import '../../styles/components/Cards.css'

interface IProps {
    link: string;
    title: string;
    label:string;
    backImage: string;
}

const WideCard = (props: IProps) => {
    return (
        <div id="wide-card-container">
            <div className="card-link" id="wide-card" style={{backgroundImage: 'url(' + props.backImage + ')'}}>
                <h1>{props.title}</h1>
                <h3>{props.label}</h3>
                {/*Don't @ me*/}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam atque beatae, delectus dolor
                    dolorem ducimus eaque eligendi esse laborum magnam obcaecati quia quis sequi tempore! Eos expedita illo
                    iusto labore nihil. Consectetur culpa dicta iure laboriosam magni molestiae nostrum nulla ratione ullam
                    vel! Animi dolore esse, eveniet ex fugit iure modi nostrum quas rerum, sunt temporibus totam vero
                    voluptas. A alias architecto assumenda at consequatur culpa delectus distinctio dolor doloribus ex
                    facere fuga ipsam ipsum iste iure labore laborum magni nam neque nesciunt, nobis obcaecati officia
                    placeat porro provident, quaerat, quisquam quos sapiente similique sunt veniam vero voluptate
                    voluptates. Distinctio nesciunt nihil nisi perferendis sapiente soluta tempora, tempore? Consectetur
                    consequuntur eos fuga fugit, illum, labore libero magnam natus omnis possimus quasi repellendus! Alias
                    aspernatur consequatur exercitationem, illo libero, mollitia neque non quas repellendus sequi sunt
                    temporibus voluptas voluptatum. Ad aliquam corporis distinctio, ducimus esse id magni molestias nulla
                    possimus!</p>
            </div>
        </div>
    );
};

export default WideCard;
