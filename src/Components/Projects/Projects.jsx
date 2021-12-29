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
import bus from '../../images/bus.png'
import password from '../../images/password.png'
function Projects() {
    const projects = [
            {
                name: "Book a bus",
                githubLink: "https://github.com/shreeshasr/book-a-bus",
                image: bus,
                tags: ["HTML", "CSS", "SASS", "React", "Redux", "Media queries", "Responsive"],
                description: "This is a bus booking application for travellers. User can book bus from a city to another city across India",
                liveWebsite: "https://book-bus.herokuapp.com/"
            },
            {
                name: "Cookie Cart",
                githubLink: "https://github.com/shreeshasr/cookiestore",
                image: cookie,
                tags: ["HTML", "CSS", "React", "Redux"],
                description: "This is an ecommerce application for cookies. User can add any amount of cookies to cart, total amount will be calculated",
                liveWebsite: "https://cookiecart.herokuapp.com/"
            },
            {
                name: "Groww Clone",
                githubLink: "https://github.com/shreeshasr/groww-clone",
                image: groww,
                tags: ["HTML", "CSS", "React", "Media queries", "Responsive"],
                description: "This is a clone of official GROWW website front page, which is an online investment platform that allows investors to invest in mutual funds and stocks. Note: Implemented it for learning purpose.",
                liveWebsite: "https://61cc47a98b3f278d6b0aaf07--admiring-ptolemy-601869.netlify.app/"
            },
            {
                name: "Sophos ZTNA Clone",
                githubLink: "https://github.com/shreeshasr/ztna-clone-learning",
                image: ztna,
                tags: ["HTML", "CSS", "React"],
                description: "This is a clone of Sophos ZTNA. This has most of the pure front end functionalities of SOPHOS central ZTNA product. Note: Implemented it for learning purpose.",
                liveWebsite: ""
            },
            {
                name: "Recipe App",
                githubLink: "https://github.com/shreeshasr/recipe-app",
                image: recipe,
                tags: ["HTML", "CSS", "React", "Redux", "Axios", "APIs"],
                description: "This is an app with various recipes with filters option. User can add or remove his favourite recipe. Dark mode and light mode are also available",
                liveWebsite: ""
            },
            {
                name: "Quotes for me",
                githubLink: "https://github.com/shreeshasr/quotesforme",
                image: quotes,
                tags: ["HTML", "CSS", "React", "Redux", "Axios", "APIs"],
                description: "This is a random quotes generator app with the feature to change quote and color. It uses the publically available APIs.",
                liveWebsite: ""
            },
            {
                name: "Password generator",
                githubLink: "https://github.com/shreeshasr/password-generator",
                image: password,
                tags: ["HTML", "CSS", "React", "Redux", "Axios", "APIs"],
                description: "This is a random password generator app with various filters, password strength measurer",
                liveWebsite: ""
            },
            {
                name: "Portfolio",
                githubLink: "",
                image: shreeshaPortfolio,
                tags: ["HTML", "CSS", "React", "Media queries", "Responsive"],
                description: "This is a portfolio web app built to showcase my resume, experience, skills, work experience, contact info etc",
                liveWebsite: "https://shreeshasr.netlify.app/"
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
