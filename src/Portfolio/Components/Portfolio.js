import React from 'react';

import NavBar from './NavBar';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import Projects from './Projects';
import Contact from './ContactMe';
import RecentWork from './Recent-Work';
import '../css/one-page-wonder.css';
import '../css/one-page-wonder.min.css';
import '../css/bootsrap.min.css';

const portfolio = () => {
    return (
        <div>
            <div>
                <NavBar />
                <Header />
                <section id="portfolio-desc">
                    <div className="page-wrap">

                        <h1 >PORTFOLIO</h1>
                        <p>Below you can see some technology stacks I've been working on lately. I divide into four follow-up areas: front-end, backend, testing &amp; deployment. This process allows me to create great product with client goals&nbsp;in&nbsp;mind.</p>
                    </div>
                </section>
                <Section />
                <Projects />
                <RecentWork />
                <Contact />
                <Footer />
               
            </div>
        </div>
    )
}
export default portfolio;