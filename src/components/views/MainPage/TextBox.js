import React from 'react'
import styled from 'styled-components';

const Box = styled.div`
    width : 200px;
    //border : 1px solid red;

    font-family: 'Nanum Myeongjo', serif; 
    color : #968661;
    font-size : 11.5pt;
    font-weight : bold;

    padding-top : 18px;
    padding-left : 20px;
    
    line-height : 0.7rem; //텍스트 간격
    

    

`;

export default function TextBox({children}) {
    return (
        <Box>
            {children}
        </Box>
    )
}
