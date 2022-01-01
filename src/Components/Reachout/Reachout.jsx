import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import shreesha from "../../images/shreesha2.jpeg"
import "./Reachout.css"
import emailjs from "emailjs-com"
import apikeys from "../../apikeys"
function Reachout() {
    return (
        <section className='reachout' id="contact">
            <div className="reachoutLeft">
                <div className="reachoutHeading">Discuss a project or Just want to say a Hi?</div>
                <div className="reachoutDetails">I'm just a ping away.</div>
                <form className="contactForm" onSubmit={onSubmit}>
                    <input name="name" type="text" autoComplete='false' placeholder="Your Name" className="formName" />
                    <input name="contactMedium" type="text" autoComplete='false' placeholder="Your email/mobileno/profile link" className="formContactMedium" />
                    <textarea name="message" type="text" placeholder="Your message to me" className="formMessage" ></textarea>
                    <button className="formInputButton">Send Message</button>
                </form>
                <div className="reachoutService">I'm a Web Developer | React Js Developer | QE Tester</div>
                <a href="https://www.google.com/maps/place/Bengaluru" target="_blank" rel="noreferrer" className="reachoutLocation">Bengaluru, India</a>
                 <SocialMediaIcons/>
            </div>
                <div className="reachoutRight">
                <img src={shreesha} alt="shreesha" title="shreesha"/>
            </div>
            <div className="goTopIcon">
               <div onClick={ () => scrollTo("introduction")} title="Go to top"><i className="fa fa-arrow-up"></i></div>
            </div>
        </section>
    )
}

const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if(element){
        element.scrollIntoView({
            behavior: "smooth",
        })
    }
}

const onSubmit=(e)=>{
    e.preventDefault()// Prevents default refresh by the browser
    emailjs.sendForm(apikeys.SERVICE_ID, apikeys.TEMPLATE_ID, e.target, apikeys.USER_ID)
    .then(result => {
    alert('Message Sent, I\'ll get back to you shortly', result.text);
    },
    error => {
    alert( 'An error occured, Plese try again', error.text)
    })
}

export default Reachout
