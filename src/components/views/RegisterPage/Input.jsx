import React from 'react'
import styled from 'styled-components'

const Inputs = styled.input`

    width: 210px;
    height: 40px;

    border: 2px solid #AEC4BA;
    box-sizing: border-box;
    border-radius: 10px;
    margin : 0 auto;

    font-size : 11pt;


    &:focus{
        border : 2px solid #AEC4BA;
    }
    
`

export default function Input({...rest}) {
    return (
        <div>
            <Inputs {...rest} />
        </div>
    )
}
