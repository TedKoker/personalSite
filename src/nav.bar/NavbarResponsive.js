import React, { useState, useCallback } from 'react'
import { Menu, Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, QuestionOutlined, RiseOutlined, GithubOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import './navbar.css'

export default function NavBarResponsive() {

    const [isCollapsed, setCollapsed] = useState(true)
    const [selected, setSelected] = useState(sessionStorage.getItem("selected") || "about")

    const toggleCollapsed = useCallback(()=>{
        setCollapsed(!isCollapsed)
    })

    const handleSelection = useCallback((e)=> {
        sessionStorage.setItem("selected", e.key)
        setSelected(e.key)
    })

    return (
        <div style={{position:"fixed", zIndex:"9000", top:0, left:0}}>
            <Button type={isCollapsed ?"primary" : "dashed"} onClick={toggleCollapsed} style={{ height: "auto", zIndex: 9001}}>
                {isCollapsed ?  (<MenuUnfoldOutlined/>) : (<MenuFoldOutlined />)}
            </Button>
            <Menu
                mode="inline"
                inlineCollapsed={isCollapsed}
                selectedKeys={[selected]}
                onClick={handleSelection} 
            >
                 <Menu.Item key="about" icon={<QuestionOutlined/>}>
                <Link to="/about" >About</Link>
                </Menu.Item>
                <Menu.Item key="job.experience" icon={<RiseOutlined/>}>
                    <Link to="/experience">Job Experience</Link>
                </Menu.Item>
                <Menu.Item key="projects" icon={<GithubOutlined />}>
                    <Link to="/projects">Projects</Link>
                </Menu.Item>
                <Menu.ItemGroup title="Personal Pages">

                </Menu.ItemGroup>
            </Menu>
        </div>
    )
}