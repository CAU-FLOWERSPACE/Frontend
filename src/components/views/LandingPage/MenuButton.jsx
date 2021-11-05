import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    position: absolute;
    width: 100px;
    height: 19px;
    //left: ${props=> props.left};
    top: 35px;

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;

    background:  #F7F4E3;
    border: none;

    color: #8A8168;
`

export default function MenuButton({children, ...rest}) {
    return (
        <div>
            <Button {...rest}>{children}</Button>

        </div>
    )
}
