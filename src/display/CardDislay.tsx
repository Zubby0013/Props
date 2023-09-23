import React from "react"
import styled from "styled-components"
import Card from "../components/Card"
import data from './data.json'
import Button from "../components/Button"
import {AiFillMail} from "react-icons/ai"


export default function CardDisplay(){
    return(
        <>
        <Container>
          
        {/* {
            data?.map((props)=> (
                <Card 
                free={props.free} 
                desc={props.desc}
                feature={props.feature}
                plan={props.plan}
                price={props.price}
                button={props.button}
                plandesc={props.plandesc}
                />
            ))
        } */}
           
           <Button text="Mail" icon={AiFillMail}/>
           <Button text="Register" icon={AiFillMail}/>
           <Button text="Mail" icon={AiFillMail}/>
           <Button text="Mail" icon={AiFillMail}/>
           <Button text="Mail" icon={AiFillMail}/>
        </Container>
        </>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`