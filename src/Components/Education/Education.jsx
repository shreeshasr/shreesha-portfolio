import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import "./Education.css"
function Education() {
    return (
        <section className='education'>
            <SectionHeader id={"education"} heading={"Education"}/>
            <div className="collegeName">Malnad College of Engineering, Hassan</div>
            <div className="courseName">B.E in Computer Science & Engineering</div>
            <div className="batch">2015 - 2019</div>
        </section>
    )
}

export default Education
