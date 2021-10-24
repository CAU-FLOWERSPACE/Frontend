import React from 'react'
import styled from "styled-components";

const Button = styled.button`

    position: absolute;
    width: 189px;
    height: 40px;
    left: 88px;
    top : ${props=> props.top};

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;

    background: #D9CFB6;
    border: 1px solid #D9CFB6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    color : #897F65;

`

export default function StartButton({children, top, ...rest}) {
    return (
        <div>
            <Button top = {top} {...rest}>{children}</Button>
        </div>
    )
}

