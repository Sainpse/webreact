
import React from 'react';
import '../styles/Card.css';
import {card, cardTrans} from '../animation/card.js';
import { motion } from "framer-motion"


class Card extends React.Component {

    render() {
        return (
            <motion.div initial="hidden" animate="visible" variants={card} transition={cardTrans}  className={this.props.cardStyle}>
                <div className={this.props.cardContainerStyle}>
                    <i className={this.props.icon}></i>
                    <h6 className={this.props.headerStyle}>{this.props.header}</h6>
                    <p  className="cardText generalFont">{this.props.text}</p>
                    <p  className="cardFooter generalFont">{this.props.footer}</p>
                </div>
            </motion.div>
        )
    }
}

export default Card;