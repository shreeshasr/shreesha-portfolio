import React from 'react'
import html from "../../images/html.png"
import css from "../../images/css.png"
import javascript from "../../images/javascript.png"
import react from "../../images/react.png"
import redux from "../../images/redux.png"
import selenium from "../../images/selenium.png"
import Skill from '../Skill/Skill'
import './Skills.css'
import SectionHeader from '../SectionHeader/SectionHeader'
function Skills() {
    const skills = [
        {
            image: html,
            title: "HTML",
            percentage: "85"
        },
        {
            image: css,
            title: "CSS",
            percentage: "80"
        },
        {
            image: javascript,
            title: "JAVASCRIPT",
            percentage: "80"
        },
        {
            image: react,
            title: "REACT",
            percentage: "85"
        },
        {
            image: redux,
            title: "REDUX",
            percentage: "75"
        },
        {
            image: selenium,
            title: "SELENIUM",
            percentage: "90"
        },

    ]
    return (
        <section className='skillss'>
            <SectionHeader id={"skills"} heading={"Skills"}/>
            <div className="skills">
            {
                skills.map( (skill) => {
                    return <Skill skill={skill}/>
                })
            }
            </div>
        </section>
    )
}

export default Skills
