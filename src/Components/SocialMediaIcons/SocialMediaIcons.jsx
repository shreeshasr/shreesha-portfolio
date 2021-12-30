import React from 'react'
import './SocialMediaIcons.css'
function SocialMediaIcons() {
    const socialMedia = [
        {
            name: "call",
            link : "tel:9632512087",
            iconClassName: "fa-phone",
            hoverColor: "#4DD637"
        },
        {
            name: "github",
            link : "https://github.com/shreeshasr",
            iconClassName: "fa-github",
            hoverColor: "#171515"
        },
        {
            name: "linkedin",
            link : "https://www.linkedin.com/in/shreesha-sr-822322100/",
            iconClassName: "fa-linkedin",
            hoverColor: "#0077b5"
        },
        {
            name: "instagram",
            link : "https://www.instagram.com/shreesha_sr/",
            iconClassName: "fa-instagram",
            hoverColor: "#833AB4"
        },
        { 
            name: "facebook",
            link : "https://www.facebook.com/shreesha.sr.5/",
            iconClassName: "fa-facebook",
            hoverColor: "#4267B2"
        },
        // { 
        //     name: "twitter",
        //     link : "https://twitter.com/tweet_shreesha",
        //     iconClassName: "fa-twitter",
        //     hoverColor: "#1DA1F2"
        // }
    ]

    return (
             <div className="social-media-icons">
                {
                    socialMedia.map( (profile) => {
                       return <a href={profile.link} target="_blank" rel="noreferrer"><i title={profile.name} className={"fa "+profile.iconClassName} style={{background: profile.hoverColor}} /></a>
                    })
                }
            </div>
    )
}

export default SocialMediaIcons
