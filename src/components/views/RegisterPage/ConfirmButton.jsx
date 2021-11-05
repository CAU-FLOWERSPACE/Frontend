import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    //position: absolute;
    width: 210px;
    height: 40px;
    //left: 83px;
    //top: ${props => props.top};

    background: #D9CFB6;
    border: 1px solid #D9CFB6;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(150, 134, 97, 0.5);
    border-radius: 10px;

    border: none;

    font-family: 'Nanum Myeongjo', serif; 
    color : #B4846C;
    font-size : 15px;

    margin : 0 auto;
    margin-top : 10px;
    margin-bottom : 10px;
`

export default function ConfirmButton({children, top, ...rest}) {
    return (
        <div>
            <Button top = {top} {...rest}>{children}</Button>
        </div>
    )
}


