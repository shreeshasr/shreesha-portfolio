import React from 'react'
import Experience from '../Experience/Experience'
import Introduction from '../Introduction/Introduction'
import Navbar from '../Navbar/Navbar'
import Projects from '../Projects/Projects'
import Reachout from '../Reachout/Reachout'
import Skills from '../Skills/Skills'
import Testimonials from '../Testimonials/Testimonials'
import './Home.css'
import Education from '../Education/Education'
import Certificates from '../Cerificates/Certificates'
function Home() {
    
    return (
        <div>
            <div className="firstPage">
                <Navbar/>
                <Introduction/>
            </div>
            <div className="experienceAndEducation">
                <Experience/>
                <Education/>
            </div>
            <Projects/>
            <Skills/>
            <Certificates/>
            <Testimonials/>
            <Reachout/>
        </div>
    )
}

export default Home
