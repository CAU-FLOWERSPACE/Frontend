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
    
    color : #E8F0EF;
    font-size : 13px;

    margin : 0 auto;
    margin-top : 10px;
    margin-bottom : 10px;

    &:active{
        background-color : #698F7E;
    }
`

export default function ConfirmButton({children, top, ...rest}) { 
    // 지정한 프롭스와 아닌 프롭스 구분
    return (
        <div>
            <Button {...rest}>{children}</Button>
        </div>

        
    )
}
