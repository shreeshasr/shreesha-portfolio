import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import shreesha from "../../images/shreesha2.jpeg"
import "./Reachout.css"
function Reachout() {
    return (
        <section className='reachout' id="contact">
            <div className="reachoutLeft">
                <div className="reachoutHeading">I'm just a ping away.</div>
                <div className="reachoutDetails">Discuss a project or just want to say hi?</div>
                <div className="reachoutService">I'm a Web Developer | React Js Developer | QE Tester</div>
                <a href="https://www.google.com/maps/place/Bengaluru" target="_blank" rel="noreferrer" className="reachoutLocation">Bengaluru, India</a>
                 <SocialMediaIcons/>
            </div>
                <div className="reachoutRight">
                <img src={shreesha} alt="shreesha" title="shreesha"/>
            </div>
        </section>
    )
}

export default Reachout
