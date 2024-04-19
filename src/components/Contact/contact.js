import React, {useRef} from 'react';
import './contact.css';
import ius from '../../assets/ius.png';
import stanford1 from '../../assets/stanford1.png';
import radford from '../../assets/radford.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hu7y04l', 'template_x22ntfr', form.current, 'dcTSiVBhV0NKODy_UXWth')
      .then((result) => {
          console.log(result.text);
          alert('Email sent!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
     return (
      <section id="contactPage">
        <div id="tutors">
        <h1 className="contactPageTitle">Our Tutors</h1>
        <p className="tutorsDesc">At our platform, our tutors are carefully selected from the best universities, ensuring a high standard of expertise.<br></br> We pride ourselves on meticulously matching them with your unique needs to guarantee the delivery of the highest quality knowledge. </p>
        <div className="tutorsImgs">
            <img src={ius} alt="" className="tutorsImg" />
            <img src={stanford1} alt="" className="tutorsImg" />
            <img src={radford} alt="" className="tutorsImg" />

        </div>
        </div>
        <div id="contact">
         <h1 className="contactPageTitle">Contact Us</h1>
         <span className="contactDesc">Join the TutorIN' community today and unlock the doors to personalized education tailored just for you.</span>
         <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name'/>
            <input type="email" className="email" placeholder='Your Email' name='your_email' />
            <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
            <img src={facebook} alt="fb" className="link" />
            <img src={instagram} alt="ig" className="link" />
            <img src={twitter} alt="tw" className="link" /> 
            </div>

         </form>
        </div>
      </section>
    );
}
export default Contact;
