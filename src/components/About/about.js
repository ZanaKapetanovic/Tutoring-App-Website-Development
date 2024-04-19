import React from 'react';
import './about.css';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';

const About = () => {
    return (
        <section id='about'>
            <span className="skillTitle">About Us</span>
            <span className="skillDesc">Our process for pairing tutors is relied upon by students and their parents. We handle the task of connecting you with a top-notch local tutor, saving you the time and effort of sifting through countless tutor profiles!</span>
            <div className="skillBars">
            <div className="skillBar">
                <img src={img1} alt="Efficient Tutor Matching" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Efficient Tutor Matching</h2>
                    <p> We understand the value of your time and ensure that you are connected with an exceptional local tutor without the hassle of navigating through extensive tutor profiles.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={img2} alt="Personalized Education Experience" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Personalized Education Experience</h2>
                    <p>We recognize that every learner is unique, and our dedicated tutors are committed to tailoring their approach to meet individual needs. </p>
                </div>
            </div>
            <div className="skillBar">
                <img src={img3} alt="Parent and Student Trust" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Parent and Student Trust</h2>
                    <p>We take pride in the trust bestowed upon us by both students and their parents. Our commitment to quality tutoring services has earned us a reputation for reliability and excellence. </p>
                </div>
            </div>
            </div>
        </section>
    );
}
export default About;