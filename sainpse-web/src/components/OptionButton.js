import React from 'react';
import '../styles/OptionButton.css';

class OptionButton extends React.Component {

    render() {
        return (
            <div className="optionButtonDiv">
                <button className="optionButton" onClick={this.props.onClick}>{this.props.text}</button>
                <p className="ButtonTip">{this.props.tip}</p>
            </div>
        )
    }
}

export default OptionButton;