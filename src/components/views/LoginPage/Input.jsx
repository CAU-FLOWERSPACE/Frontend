import React from 'react'
import styled from 'styled-components'

const Inputs = styled.input`

    width: 210px;
    height: 40px;

    border: 2px solid #AEC4BA;
    // outline : none;
    box-sizing: border-box;
    border-radius: 10px;
    margin : 0 auto;
    margin-bottom : 10px;
    
    font-size : 11pt;
    

    &:focus{
        border : 2px solid #AEC4BA;
    }

    
    ::placeholder{
        font-size : 11pt;
        color : #C4C4C4;
    }
    
`

export default function Input({top, ...rest}) {
    return (
        <div>
            <Inputs {...rest} />
        </div>
    )
}



