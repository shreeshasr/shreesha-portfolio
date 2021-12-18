import React from 'react'
import './Project.css'
function Project({project}) {
    return (
        <div className="project">
            <img className="projectImage" src={project.image}></img>
            <div className="projectTexts">
                <div className="projectName">{project.name}</div>
                <div className="projectDetails">{project.description}</div>
                <div className="projectTags">Technologies used : {project.tags}</div>
            </div>
        </div>
    )
}

export default Project
