import React from 'react';
import '../styles/Card.css';


class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="cardcontainer">
                    <i className={this.props.icon}></i>
                    <h6 className="cardHeader">{this.props.header}</h6>
                    <p  className="cardText">{this.props.text}</p>
                    <p  className="cardFooter">{this.props.footer}</p>
                </div>
            </div>
        )
    }
}

export default Card;