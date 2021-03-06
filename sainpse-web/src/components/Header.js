import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';
import Card from './Card';





class Header extends React.Component {

    render() {
        return (
            <section className="nav backgroundHeaderIMG noOverlap" id="tab-home">
                <Navigation />
                <h2 className="">SAINPSE INSTITUTE</h2>
                <h4 className="span loader">
                    <span className='m'>of Augmented Intelligence</span>
                </h4>
                <Card text="We're looking for ways make you smarter, more effective and successful. Join us on a journey through the evolution of augmenting our intuition with machine intelligence. We feel that in order to improve the lives of humans and to accelerate the development of new technologies, AI must intelligently complement human intelligence, not work to replace it."
                        cardStyle="card cardAccent"
                        cardContainerStyle="cardcontainer cardContainerAccent"
                        headerStyle="cardHeader"/>
            </section>
        )
    }
}

export default Header;