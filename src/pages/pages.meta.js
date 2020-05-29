import React from 'react'
import {QuestionOutlined, RiseOutlined, GithubOutlined} from '@ant-design/icons'

export const aboutPage = {
    icon: (<QuestionOutlined/>),
    title: "About",
    description: (
        <div>
            <hr/>
            <p>
                I am a frontend developer (mostly self-taught). <br/>
                I have professional knowledge and experience in the following technologies: JavaScript, CSS3, HTML5 as well as Angular and React.
            </p>
            <p>
                In 2018 I started a new job in tech support. <br/>
                After some time at that job, I discovered that I can be very good with computers. <br/>
                Long story short, I decided to take a course in full-stack programming.<br/>
                I found myself extremely interested in frontend technologies and by now most of my professional knowledge is self taught.
            </p>
            <p>
                A while later I got my first job as a frontend developer, which unfortunately terminated due to the Corona Virus Crisis.
            </p>
            <p>
                I am now seeking a new opportunity 
            </p>
        </div>
    )
}

export const jobExperiencePage = {
    icon: (<RiseOutlined />),
    title: "Job Experience",
    description: (
        <div>
            <hr/>
            <strong>Frontend Developer</strong><br/>
            <em>Signature-it</em><br/><br/>
            <p>
                Ended due ​Corona Virus​ Crisis.
            </p>
            <p>
                Software development company with 100+ employees and clients Like ​Ace​, ​Ikea​, ​Carolina​, etc…
                I was working with a team of 9 developers on a new store and Web site for Ace compony, as a Frontend developer​, in charge of some parts in the Web site.
            </p>
            <ul>
                <li>Developing in JavaScript, CSS3, and HTML5 and implementing responsive design</li>
                <li>Self-learn of new technologies</li>
                <li>Working with JavaScript frameworks</li>
            </ul>
            <hr/>
            <strong>Tier two tech support</strong><br/>
            <em>Matrix</em><br/><br/>
            <p>
                Large worldwide corporation, with more than 10,000 employees. I was the representative on behalf of the company in the Ministry Of Health when the company implemented a new system among 30 cannabis doctors
            </p>
            <ul>
                <li>Self-learning of new technologies</li>
                <li>Researching problems and bugs</li>
                <li>Working within a large team</li>
            </ul>
        </div>
    )
}

export const projectsPage = {
    icon: (<GithubOutlined/>),
    title: "Projects",
    description:(<div> <hr/>
        <p>
            I developed some projects independently, in some of them I used Angular, and in some of them I used React.
            In my recent projects I have used React.
        </p>
        <p>
            All of the projects are available on my <a href="https://github.com/TedKoker" target="_blank">GitHub page</a>
        </p>
    </div>)
}