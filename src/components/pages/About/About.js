import React from "react";
// import { Link } from 'react-router-dom';


import './About.scss'
import wfh_1 from './../../../images/wfh_1.svg'

const About = () => {

    return (
        <section className='hero' id="about">
            <img src={wfh_1} alt="Fiona-Feng" loading='lazy' className="hero-img" />
            <div className="bio animate__animated animate__shakeX">
                <h1 className='bio-title'>
                    About Me
                </h1>
                <p className='bio-text'>
                    Hi, I'm Fiona. I'm a Business Intelligence Engineer for Amazon. I pursuing my Master of Computer Information Technology at UPenn and working as a Teaching Assistant for 421/521 AI & Maching Learning Algorithm course.
                    I enjoy challenging myself to think differently to equip myself with the continually evolving society.
                    Risk-taker, adventurer, love to explore new cities, design LEGO moc, play strategy games.
                </p>
            </div>
            <div> </div>
        </section>



    );
};

export default About;