import React from 'react'
import styled from 'styled-components'
import { Img } from '.';

const Box = styled.div`

width: 328px;
height: 140px;


background: rgba(217, 207, 182, 0.5);
border-radius: 20px;
margin : 0 auto;
margin-top : 18px;

 


display : flex; //텍스트와 사진 가로로 하기 위해
justify-content : center;
padding : 10px;
// align-items : center;

`

export default function MenuBox({children, ...rest}) {
    return (
        <Box {...rest}>
            {children}
        </Box>
    )
}
