import React from 'react'
import styled from 'styled-components'

const Inputs = styled.input`

    position: absolute;
    width: 210px;
    height: 40px;
    left: 83px;
    top: ${props=>props.top};

    background: #E6DDC6;
    border: 1px solid #E6DDC6;
    outline : none;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    font-family: 'Nanum Myeongjo', serif; 
    color : #B4846C;
    font-size : 20px;

    &:focus{
        border : 2px solid #B4846C;
    }

    ::placeholder{
        font-size : 13px;
    }
    
`

export default function Input({top, ...rest}) {
    return (
        <div>
            <Inputs top = {top} {...rest} />
        </div>
    )
}



