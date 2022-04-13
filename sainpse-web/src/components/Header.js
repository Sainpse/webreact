import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';
import Card from './Card';
import Main from './Main';




class Header extends React.Component {

    render() {
        return (
            <div>
                <section className="nav" id="tab-home">
                    <Navigation />
                    <h2 className="">SAINPSE INSTITUTE</h2>
                    <h4 className="span loader">
                        <span className='m'>of Augmented Intelligence</span>
                    </h4>
                    <Card text="We're looking for ways make you smarter, more effective and successful. Join us on a journey through the evolution of augmenting our intuition with machine intelligence."/>
                </section>
                <Main />
                <canvas className="background"></canvas>
            </div>
        )
    }
}

export default Header;