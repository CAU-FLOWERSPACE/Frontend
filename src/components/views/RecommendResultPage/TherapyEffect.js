import React from 'react';
import styled from 'styled-components';

const Effect = styled.p`

    font-family: 'Nanum Myeongjo', serif; 
    font-style: normal;
    font-weight: bold;
    font-size: 15px;

    color: #968661;
    display : flex;
    justify-content : center;
    align-items : center;

    padding : 5px;
`
export default function TherapyEffect({children}) {
    return (
        <Effect>{children}에 탁월한 식물들</Effect>
    )
}
