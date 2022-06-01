import React from 'react';
import '../styles/Header.css';
import Release from './Release';
import About from './About';
import Resources from './Resources'







class Main extends React.Component {

    render() {
        return (
            <div>
                <main className="main">
                    <Release />
                    <About />
                    <Resources />
                </main>
                <canvas className="background"></canvas>
            </div>
        )
    }
}

export default Main;