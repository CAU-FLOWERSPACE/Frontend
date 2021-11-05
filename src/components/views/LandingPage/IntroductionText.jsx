import React from 'react'
import styled from "styled-components";


const Text = styled.p`

    font-family: 'Nanum Myeongjo', serif; 
    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    color : #7E714B;

     margin : 0 auto;
     margin-top : 10px;
     margin-bottom : 20px;
    // margin-left : 10px;

    display : flex;
    justify-content : center;

    

    & + & {
        margin : 1.5rem;
    }

`;


export default function IntroductionText() {
    return (
    <>
        <Text>꽃과 식물이 가져다 주는 </Text>
        <Text>일상 속 작은 변화,</Text>
        <Text>곁에 두는 것만으로도 느낄 수 있는</Text>
        <Text>소소하지만 힐링이 되는 테라피,</Text>
        <Text>'꽃간'을 통해 누려보세요 !</Text>

    </>

        
    )
}
