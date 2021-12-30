import React, { useState } from 'react'
import shreesha from "../../images/shreesha.jpg"
import resume from "../../images/ShreeshaResume.pdf"
import "./Introduction.css"
import Typewriter from 'typewriter-effect';

function Introduction() {

    const [copyPhoneNumber, setCopyPhoneNumber] = useState(false);

    const setTheCopyButtonText = () => {
        return copyPhoneNumber ?  "Copied " : "Phone number "
    }
    const copyMyPhoneNumber = async () => {
        await navigator.clipboard.writeText(9632512087)
        setCopyPhoneNumber(true)
    }
    return (
        <section className="introduction" id={"introduction"}>
          <img src={shreesha} alt="shreesha" title="shreesha"/>
          <div class="introduction-info">
                <span><strong>Hi, I'm <span className="introduction-name">Shreesha</span> </strong></span>
                <p>I'm</p>
                <Typewriter
                    options={{
                        strings: ['a Self taught Web Developer', 'a Passionate React Developer', 'a Javascript Enthusiast', 'a Professional QE Tester', 'an Automation Tester'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <div className="introductionButtons">
                    <a href={resume} download><button className="introduction-resume">Resume <i className="fa fa-download" aria-hidden="true"></i></button></a>
                    <a href="mailto:shreesha.sr92@gmail.com"><button className="introduction-mail">Mail <i className="fa fa-envelope" aria-hidden="true"></i></button></a>
                    <button className="copyMyPhoneNumber" onClick={ () => copyMyPhoneNumber()}>{setTheCopyButtonText()} <i className="fa fa-copy" aria-hidden="true"></i></button>
                </div>
                
        </div>
        
        </section>
    )
}

export default Introduction
