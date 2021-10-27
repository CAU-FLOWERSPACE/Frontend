import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
position: absolute;
width: 140px;
height: 38px;
left: 175px;
top: ${props=>props.top};

background: #D9CFB6;
border: 1px solid #D9CFB6;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;

font-family: 'Nanum Myeongjo', serif;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 15px;
color : #897F65;


`


export default function Buttons({children, top, ...rest}) {
    return (
        <div>
            <Button top = {top} {...rest}>
                {children}
            </Button>
        </div>
    )
}
