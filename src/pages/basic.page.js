import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import '../App.css'

export default function BasicPage(props) {
    const {Meta} = Card
    const [stt, setStt] = useState(props)
    useEffect(() => {
        let card = document.getElementsByClassName("ant-card")[0]
        card.animate([
            {
                transform: "rotateY(0)",
            },
            {
                transform: "rotateY(-90deg)",
            }
        ],{
            duration:500,
            iterations: 1
        })
        setTimeout(()=>{
            setStt(props)
            card.animate([
                {
                    transform: "rotateY(90deg)",
                },
                {
                    transform: "rotateY(0)",
                }
            ],{
                duration:500,
                iterations: 1
            })
            
        },470)
      }, [props]);

    return (
        <Card>
            {stt.icon}
            <Meta 
                title={stt.title}
                description = {stt.description}
            />
        </Card>
    )
}