import React from 'react'
import styled from 'styled-components';

const Text = styled.p`

    position: absolute;
    width: 226px;
    height: 161px;
    
    margin : 10px;

    font-family: 'Nanum Myeongjo', serif; 
    font-style: normal;
    font-weight: normal;
    font-size: 15px;

    color : #897F65;
    justify-content : center;




`;

export default function CommendText({children}) {

    return <Text>{children}</Text>;
 
}
