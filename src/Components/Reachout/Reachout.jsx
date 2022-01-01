import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import shreesha from "../../images/shreesha2.jpeg"
import "./Reachout.css"
function Reachout() {
    return (
        <section className='reachout' id="contact">
            <div className="reachoutLeft">
                <div className="reachoutHeading">Discuss a project or Just want to say a Hi?</div>
                <div className="reachoutDetails">I'm just a ping away.</div>
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

export default Reachout
