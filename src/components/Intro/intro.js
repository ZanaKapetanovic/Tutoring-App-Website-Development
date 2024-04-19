import React from 'react';
import './intro.css';
import bg3 from '../../assets/bg3.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
    <div className="introContent">
    {/* <span className="hello">Elevate Your Learning Experience</span> */}
     <span className="introText">We're <span className="introName"> TutorIN'</span><br />your path to success!</span>
     <p className="introPara">Our mission is to provide a platform where learning meets innovation, and students embark on a<br></br>journey of academic excellence.</p>
     <Link><button className="btn" onClick= {() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'}); //it will find that element and scroll to it
     }}>Join Us</button></Link>
    </div>
    <img src={bg3} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;