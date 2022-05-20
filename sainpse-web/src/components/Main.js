import React from 'react';
import '../styles/Header.css';
import Release from './Release';
import About from './About';





class Main extends React.Component {

    render() {
        return (
            <div>
                <main className="main">
                    <Release />
                    <About />
                    <section className="slider" id="tab-next">
                        <h1>NEXT</h1>
                        <h2>framework
                            for Production</h2>
                    </section>
                    <section className="slider" id="tab-typescript">
                        <h1>TYPESCRIPT</h1>
                        <h2>giving you better tooling at any scale</h2>
                    </section>
                    <section className="slider" id="tab-deno">
                        <h1>DENO</h1>
                        <h2>a modern runtime </h2>
                    </section>
                </main>
                <canvas className="background"></canvas>
            </div>
        )
    }
}

export default Main;