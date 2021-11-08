import React from 'react'
import styled from 'styled-components';

const Text = styled.p`


    font-family: 'Nanum Myeongjo', serif; 
    font-style: normal;
    font-weight: bold;
    font-size: 15px;

    color : #897F65;
    
    & + &{
        margin : 0.1rem;
    }

`;

export default function CommendText({children}) {

    return <Text>{children}</Text>;
 
}
