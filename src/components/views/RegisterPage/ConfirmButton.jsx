import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
width: 210px;
height: 40px;

background: #AEC4BA;
border: none;
box-sizing: border-box;
border-radius: 10px;

border: none;

color : #FFFFFF;
font-size : 13px;

margin : 0 auto;
margin-top : 10px;
margin-bottom : 10px;

&:active{
    background-color : #698F7E;
}
`

export default function ConfirmButton({children, top, ...rest}) {
    return (
        <div>
            <Button top = {top} {...rest}>{children}</Button>
        </div>
    )
}


