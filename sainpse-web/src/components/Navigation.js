import React from 'react';


class Navigation extends React.Component {

    render() {
        return (
            <div className="nav-container">
                <img src="./img/logolight.png" className="logo" alt=""/>
                <a className="nav-tab" href="#tab-home">Home</a>
                <a className="nav-tab" href="#tab-pwa">Solutions</a>
                <a className="nav-tab" href="#tab-graphql">About</a>
                <a className="nav-tab" href="#tab-typescript">Resources</a>
                <a className="nav-tab" href="#tab-deno">Contact</a>
                <span className="nav-tab-slider"></span>
            </div>

        )
    }
}

export default Navigation;