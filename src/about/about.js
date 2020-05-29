import React from 'react'
import { Card, Avatar } from 'antd'
import {QuestionOutlined} from '@ant-design/icons'
import '../App.css'

export default function About() {
    const {Meta} = Card
    return (
        <Card>
            <QuestionOutlined style={{fontSize: "5rem"}} />
            <Meta
                title="About"
                description= {
                    <div>
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
                }
            />
        </Card>
    )
}

/**
 * <p>
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
 */