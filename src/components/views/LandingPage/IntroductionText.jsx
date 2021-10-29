import React from 'react'
import styled from "styled-components";


const Text = styled.p`

    position: absolute;
    width: 226px;
    height: 161px;
    left: ${props => props.left};
    top: ${props=>props.top};

    font-family: 'Nanum Myeongjo', serif; 
    font-style: normal;
    font-weight: normal;
    font-size: 15px;

    color : #897F65;

    & + & {
       margin-top: 1rem;
    }



`;


export default function IntroductionText() {
    return (
    <>
        <Text left = "108px" top = "406px"> 내 공간에 ~~~~ </Text>
        <Text left = "78px" top = "422px"> 식물 추천 서비스, 꽃간입니다</Text>
    </>
        
    )
}
