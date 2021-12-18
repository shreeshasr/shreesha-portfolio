import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import "./Navbar.css"
function Navbar() {
    const links = [
        {
            text: "About",
            linkId: "introduction"
        },
        {
            text: "Skills",
            linkId: "skills"
        },
        {
            text: "Experience",
            linkId: "experience"
        },
        {
            text: "Portfolio",
            linkId: "projects"
        },
        {
            text: "Contact",
            linkId: "contact"
        },
    ]
    
    return (
        <section className="navbar">
            <div className="navlinks">
                {
                    links.map( (link) => {
                        return <a className="navlink" href={"#"+ link.linkId}>{link.text}</a>
                    })
                }
            </div>
            <SocialMediaIcons/>
        </section>
    )
}

export default Navbar
