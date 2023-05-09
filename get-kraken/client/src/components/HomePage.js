import React from "react";
import './HomePage.css'

const HomePage = () => {

    const seed = async () => {
        try {
            const res = await fetch("http://localhost:9000/seed")
            console.log(res.json())
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <section id='section-body'>
            <div id='home-page-body'>
                <h2>WATER WE GOING TO DO ABOUT MARINE CONSERVATION?!</h2>
                <p>We all know it’s very important to look after the planet. <b>We do, don’t we?!</b></p>
                <p>Our oceans are vital to the health of our world. <b>But what can you do to help?</b></p>
                <p>Use this website to <b>learn more about our oceans </b> and what lives in them.</p>
                <br></br>
                <h2>HOW TO PLAY</h2>
                <ul id='home-list'>
                    <li>1. <b> Read each bubble of information </b> to learn about each topic.</li>
                    <li>2.When you feel you have learned it all, <b>tick the box </b> to mark it as 'done'.</li>
                    <li>3.Once all the bubbles are 'done', <b>test your knowledge with a quiz</b></li>
                </ul>
                <p>🐠 🐠 There are also links to follow to find out more, and learn how you can get involved! 🐠 🐠 </p>
            </div>
        </section>

    )
}

export default HomePage
