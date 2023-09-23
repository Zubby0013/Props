import { features } from "process"
import React,{FC} from "react"
import styled from "styled-components"

type Props = {
    free?: string
    desc: string
    plan: string
    price: string
    feature: string
    button: string
    plandesc: string
}

export default function Card({free, desc, plan, price,plandesc, button, feature}:Props){
    return(
        <>
        <Container>
            <Content>
                <Title>{free}</Title>
                <Desc>{desc}</Desc>
                <Plan><span>{price}</span> {plan}</Plan>
                <PlanDesc>{plandesc}</PlanDesc>
                <Feature>{feature}</Feature>
            </Content>
            <Content>
                <Button>{button}</Button>
            </Content>
            
        </Container>
        </>
    )
}

const Container = styled.div`
width: 320px;
height: 380px;
display: flex;
border-radius: 10px;
padding: 20px;
flex-direction: column;
margin: 20px 10px;
border: 1px solid gray;
`

const Content = styled.div`
    margin-bottom: 10px;
`
const Title = styled.div`
    font-weight: 700;
    font-size: 35px;
    color: blue;
`
const Desc = styled.div`
font-weight: 400;
font-size: 18px;
color: gray;
margin: 15px;
`
const Plan = styled.div`
display: flex;
align-items: baseline;
    span{
        font-weight: 700;
        font-size: 35px;
        color: blue; 
        margin-right: 4px;
    }
    font-weight: 600;
font-size: 18px;
color: gray;
`
const PlanDesc = styled.div`
font-weight: 400;
font-size: 14px;
color: gray;
margin: 15px;
`
const Feature = styled.div`
font-weight: 600;
font-size: 14px;
color: gray;
`
const Button = styled.button`
    padding: 10px 20px;
    background-color: blue;
    color: #ffffff;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
    border: none;
    margin-top: 15px;
`