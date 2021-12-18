import React from 'react'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import sophos from "../../images/sophostry.png";
import "./Experience.css"
import SectionHeader from '../SectionHeader/SectionHeader';
function Experience() {
    const experiences = [
        {
            company: "Sophos Technologies",
            designation: "Software Engineer 1",
            duration: "2019 to Present",
            logo: sophos,
            color: "#3944F7",
            details: "Working as QE automation tester of both frontend and backend of various Sophos products",
            place: "Bengaluru"
        }
    ]
    return (
        <section>
            <SectionHeader id={"experience"} heading={"Office Experience"}/>
           {
            experiences.map( (experience) => {
                return <ExperienceCard company={experience.company} place={experience.place} designation={experience.designation} duration={experience.duration} logo={experience.logo} color={experience.color} details={experience.details}/>
            })
           }
        </section>
    )
}

export default Experience
