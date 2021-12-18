import React from 'react'
import Project from '../../Project/Project'
import './Projects.css'
import recipe from '../../images/recipe.png'
import cookie from '../../images/cookie.png'
import quotes from '../../images/quotes.png'
import groww from '../../images/groww.png'
import ztna from '../../images/ztna.png'
import shreeshaPortfolio from '../../images/shreeshaPortfolio.png'
import SectionHeader from '../SectionHeader/SectionHeader'
function Projects() {
    const projects = [
            {
                name: "Cookie Cart",
                githubLink: "",
                image: cookie,
                tags: "HTML, CSS, React, Redux",
                description: "This is a ecommerce application for cookies. User can add any amount of cookies to cart, total amount will be calculated",
                liveWebsite: ""
            },
            {
                name: "Groww Clone",
                githubLink: "",
                image: groww,
                tags: "HTML, CSS, React",
                description: "This is a clone of GROWW website",
                liveWebsite: ""
            },
            {
                name: "Sophos ZTNA Clone",
                githubLink: "",
                image: ztna,
                tags: "HTML, CSS, React",
                description: "This is a clone of Sophos ZTNA",
                liveWebsite: ""
            },
            {
                name: "Recipe App",
                githubLink: "",
                image: recipe,
                tags: "HTML, CSS, React, Redux, React-Router, Axios, APIS",
                description: "This is an app with various recipes with filters option. User can add or remove his favourite recipe. Dark mode and light mode are also available",
            },
            {
                name: "Quotes for me",
                githubLink: "",
                image: quotes,
                tags: "HTML, CSS, React, Redux, Axios, APIS",
                description: "This is a random quotes generator app with the feature to chnage quote and color",
                liveWebsite: ""
            },
            {
                name: "Portfolio",
                githubLink: "",
                image: shreeshaPortfolio,
                tags: "HTML, CSS, React",
                description: "This is a portfolio app",
                liveWebsite: ""
            },
        ]
    return (
        <section className="projects">
            <SectionHeader id={"projects"} heading={"Projects"}/>
            <div className="allProjects">
                {
                    projects.map( (project) => {
                        return <Project project={project}/>
                    })
                }
            </div>
            
        </section>
    )
}

export default Projects
