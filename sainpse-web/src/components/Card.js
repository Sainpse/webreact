import React from 'react';
import '../styles/Card.css';


class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="cardcontainer">
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Card;