import React from 'react'
import './Project.css'
function Project({project}) {
    return (
        <div className="project">
            <img className="projectImage" src={project.image} alt="projectImage"></img>
            <div className="projectTexts">
                <div className="projectName">{project.name}</div>
                <div className="projectDetails">{project.description}</div>
                <div className="projectTags">
                    {
                        project.tags.map( (tag) => {
                            return <span className='tag'>{tag}</span>
                        })
                    }
                </div>
                <div className="Links">
                    <a target="_blank" rel="noopener noreferrer" href={project.githubLink} ><div className="projectGithub">Github : <i className="fa fa-link"></i></div></a>
                    {project.liveWebsite !== "" ? <a target="_blank" rel="noopener noreferrer" href={project.liveWebsite}><div className="projectLink">Live  <i class="fa fa-github-square"></i></div></a>  :""}
                </div>
            </div>
        </div>
    )
}

export default Project
