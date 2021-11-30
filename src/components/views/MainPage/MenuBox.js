import React from 'react'
import styled from 'styled-components'
import { Img } from '.';

const Box = styled.div`

    width: 260px;
    height: 45px;

    border-radius: 50px;
    border : 3px solid #698F7E;
    margin : 0 auto;
    margin : 13px;
    padding : 3px;
    text-align : center;
    display : flex;
    justify-content : center;
    align-items : center;

    font-size : 12px;
    color : #698F7E;

    &:active{
        background-color : #698F7E;
        color : #E8F0EF;
    }

`

export default function MenuBox({children, ...rest}) {
    return (
        <Box {...rest}>
            {children}
        </Box>
    )
}
