import React from 'react'
import { Menu, PageHeader } from 'antd'
import 'antd/dist/antd.css'
import './navbar.css'
import {QuestionOutlined, RiseOutlined, GithubOutlined, LinkedinOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <Menu theme="light" mode="horizontal">
            <Menu.Item disabled key="title">
                <PageHeader
                    className="site-page-header"
                    title="Ted Kolker"
                    tags={[<em key="subTitle">Frontend Developer</em>]}
                />
            </Menu.Item>
            <Menu.Item key="about" icon={<QuestionOutlined/>}>
                <Link to="/about" >About</Link>
            </Menu.Item>
            <Menu.Item key="job.experience" icon={<RiseOutlined/>}>
                <Link to="/experience">Job Experience</Link>
            </Menu.Item>
            <Menu.Item key="projects" icon={<GithubOutlined />}>
                <Link to="/projects">Projects</Link>
            </Menu.Item>
            <Menu.Item className="ant-side-menu" disabled key="sideIcons">
                <PageHeader
                    //className="menu-side-links"
                    tags={[<GithubOutlined key="githubIcon" onClick={()=>{window.open("https://github.com/TedKoker", "_blank")}}/>]}
                />
                <PageHeader
                    //className="menu-side-links"
                    tags={[<LinkedinOutlined key="linkedinIcon" onClick={()=>{window.open("https://www.linkedin.com/in/ted-kollker-449917192/", "_blank")}}/>]}
                />
            </Menu.Item>
        </Menu>
    )
}