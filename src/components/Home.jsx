import React from 'react';
import './Home.css';
import arrow from './Images/arrow.svg'

const Home = () => {
    return (
        <>
            <section className="home" name="home" id="home">
                <h1>Hello, I'm Weston Isheim.</h1>
                <h1>I'm a full-stack web developer.</h1>
                <h1 className="work-bellow">Check out some of my work down bellow!</h1>
                <a href='#projects'><img className="arrow" src={arrow} alt="view projects" /></a>
            </section>
        </>
    )
}

export default Home
