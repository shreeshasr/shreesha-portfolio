import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import "./Navbar.css"
import { useState, useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
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

    let isPageNotWide = useMediaQuery('(max-width: 645px)')
    console.log("isPageNotWide "  +isPageNotWide)
    
    return (
        <section className={isPageNotWide ? "navbarMobile" : "navbar"}>
            { isPageNotWide ? <button onClick={() => setIsOpen(!isOpen)} className="btn"><i class="fa fa-bars"></i></button> : ""}
            {
                ((isPageNotWide && isOpen) || !isPageNotWide) ?
                <div className={ (isPageNotWide && isOpen) ?"linksMobile" : "links"}>
                    <div className={ (isPageNotWide && isOpen) ?"navlinksMobile" : "navlinks"}>
                    {
                        links.map( (link) => {
                            return <a className={(isPageNotWide && isOpen) ?"navlinkMobile" : "navlink"} onClick={() => setIsOpen(!isOpen)} href={"#"+ link.linkId}>{link.text}</a>
                        })
                    }
                    </div>
                    <SocialMediaIcons/>
                </div> : ""
            }

        </section>
    )
}


export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default Navbar
