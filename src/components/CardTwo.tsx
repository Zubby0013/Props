import React from 'react'
import { styled } from 'styled-components'


interface IProps {
    img: string
    title: string
    cPrice: number
    oldPrice: number
    percentage: number
    discount: number
}
export default function CardTwo({img, title, cPrice, oldPrice, percentage, discount}:IProps){
    return<>
    <Container>
        <Wrapper>
        <ImageWrap>
    <img src={img} alt='image'/>
</ImageWrap>
<ContentWrap>
<Title>{title}</Title>
<PriceWrap>
    <Current>₦{cPrice}</Current>
    <Old>₦{oldPrice}</Old>
    <Percentage>{percentage}%</Percentage>
</PriceWrap>
<Discount>You saved ₦{discount}</Discount>
</ContentWrap>
        </Wrapper>

    </Container>
    </>
}

const Container = styled.div`
    width: 400px;
    height: 180px;
    display: flex;
    margin: 20px 10px 10px 10px;
  
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 0 6px 2px rgba(0,0,0,0.1);
transition: all 350ms;
&:hover{
    box-shadow: 0 2px 6px 2px rgba(0,0,0,0.26); 
}
`
const ImageWrap = styled.div`
    height: 160px;
    width: 150px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const ContentWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 250px;
height: 160px;
padding: 10px 5px;
`
const Title = styled.div`
    font-size: 18px;

`
const PriceWrap = styled.div`
display: flex;
align-items: center;
margin: 10px 0;

`
const Current = styled.div`
    font-weight: 800;
    font-size: 22px;
`
const Old = styled.div`
font-weight: 400;
font-size: 12px;
padding: 4px;
color: #00000060;
text-decoration: line-through;
margin: 0 10px;
`
const Percentage = styled.div`
font-weight: 400;
font-size: 12px;
background-color: #ff000030;
padding: 5px 10px;
border-radius: 5px;
border: none;
color: #ff0000;
`
const Discount = styled.div`
color: #00ff00;
font-weight: 500;
font-size: 15px;
`