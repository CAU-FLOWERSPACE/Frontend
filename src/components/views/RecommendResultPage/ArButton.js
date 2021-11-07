import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    position: absolute;
    right : 20px;
    width: 100px;
    height: 30px;
    // left: 175px;
    // top: ${props=>props.top};

    background: #D9CFB6;
    border: 1px solid #D9CFB6;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    color : #897F65;

    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;
    
    margin-bottom : 10px;

    & : active {
        background: #CFC19F;
        font-weight : normal;
    
        color : #F7F4E3;

    }

`

export default function ArButton({...rest}) {
    return (
        <Button {...rest}>
            AR 바로가기
        </Button>
    )
}
