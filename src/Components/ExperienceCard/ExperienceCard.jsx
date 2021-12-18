import React from 'react'
import "./ExperienceCard.css"
function ExperienceCard(props) {
    return (
        <div className="experienceCard" style={{color:props.color}}>
            <div className="company" style={{backgroundColor:props.color, color:"white"}}>{props.company}</div>
            <img src={props.logo} alt="companylogo" className="companyLogo"/>
            <div className="designation" style={{color:"white"}}>{props.designation}</div>
            <div className="duration" style={{color:"white"}}>{props.duration}</div>
            <p className="place" style={{color:"white"}}>{props.place}</p>
            <p className="details" style={{color:"white"}}>{props.details}</p>
        </div>
    )
}

export default ExperienceCard
