import React from 'react'
import styled from 'styled-components';

const Text = styled.p`

    position: absolute;
    width: 220px;
    height: 161px;

    font-family: 'Nanum Myeongjo', serif; 
    font-style: normal;
    font-weight: bold;
    font-size: 15px;

    color : #897F65;

`;

export default function CommendText({children}) {

    return <Text>{children}</Text>;
 
}
