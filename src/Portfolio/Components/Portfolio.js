import React from 'react';

import NavBar from './NavBar';
import Header from './Header';
import Section from './Section';
import '../css/one-page-wonder.css';
import '../css/one-page-wonder.min.css';
import '../css/bootsrap.min.css';

const portfolio = () => {
    return (
        <div>
            <div>
                {/* <NavBar /> */}
                <Header />
                <section id="portfolio-desc">

                    <div className="page-wrap">
                        <h2 >Portfolio</h2>
                        <p>Below you can see some projects I've been working on lately. I divide each project into four follow-up areas: comprehensive research, wireframing, design &amp; development. This process allows me to create great product with client goals&nbsp;in&nbsp;mind.</p>
                    </div>
                </section>
                <Section />

                <footer className="py-5 bg-black">
                    <div className="container">
                        <p className="m-0 text-center text-white small">Copyright &copy; Manu Kapoor 2018</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default portfolio;