import React from 'react'
import './Skill.css'
function Skill({skill}) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front">
                <img className="skillImage" src={skill.image} alt="skill"></img>
                <div className="skillName">{skill.title}</div>
            </div>
            <div className="flip-card-back">
            <div className="skillTitle">{skill.title}</div>
            <progress className="skillPercentageBar" value={skill.percentage} max="100"> {skill.percentage} </progress>
            <label className="skillPercentageText" for="percentage">{skill.percentage}%</label>
            </div>
            </div>
      </div>
    )
}

export default Skill
