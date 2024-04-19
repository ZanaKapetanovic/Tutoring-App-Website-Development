import React from 'react';
import './steps.css';
import contact from '../../assets/contact.avif';
import tutor from '../../assets/tutor.jpg';
import lesson from '../../assets/lesson.jpg';

const Steps = () => {
  return (
    <section id='works'>
      <h2 className="stepstitle"><span style={{ color: 'red' }}>Join us</span> and find your tutor in 3 simple steps!</h2>
      <span className="stepsDesc">Effortlessly discover your perfect tutor in just three simple steps. Unleash the power of personalized education tailored to your needs, and let the path to academic success unfold effortlessly. Your ideal tutor is just a few clicks away!</span>
      <div className="stepsImgs">
        <div className="worksImgContainer">
          <img src={contact} alt="contactimg" className="worksImg" />
          <div className="imgText">Contact Us</div>
        </div>
        <div className="worksImgContainer">
          <img src={tutor} alt="tutor" className="worksImg" />
          <div className="imgText">Tutor Matching</div>
        </div>
        <div className="worksImgContainer">
          <img src={lesson} alt="lesson" className="worksImg" />
          <div className="imgText">Ready For Lesson</div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
