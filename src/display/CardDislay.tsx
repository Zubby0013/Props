import React from "react"
import styled from "styled-components"
import Card from "../components/Card"
import data from './data2.json'
import Button from "../components/Button"
import {AiFillMail} from "react-icons/ai"
import CardTwo from "../components/CardTwo"
import img from '../assets/shoe2.png' 

export default function CardDisplay(){
    return(
        <>
        <Container>
          {data?.map((props)=> (
            <CardTwo key={props.id} title={props.title} percentage={props.percentage} cPrice={props.cPrice} oldPrice={props.oldPrice} discount={props.discount} img={props.productImg}/>
          ))}
       
          
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