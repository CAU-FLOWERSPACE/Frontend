import React from 'react'
import styled from 'styled-components'

const Btn = styled.div`

width: 80px;
    height: 25px;

    background: #698F7E;
    border: none;
    box-sizing: border-box;
    border-radius: 5px;

    font-size: 12px;
    line-height: 15px;
    color : #E8F0EF;

    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;

    margin : 10px;
    
    margin-bottom : 10px;

    & : active {
        background: #CFC19F;
        font-weight : normal;
    
        color : #F7F4E3;

    }


`

export default function Button({children, ...rest}) {
    return (
        <Btn {...rest}>{children}</Btn>
    )
}
