import React from 'react'
import styled from 'styled-components'

const Inputs = styled.input`

    //position: absolute;
    width: 210px;
    height: 40px;
    //left: 83px;
    //top: ${props=>props.top};

    //background: #E6DDC6;
    border: 2px solid #E6DDC6;
    outline : none;
    box-sizing: border-box;
    border-radius: 10px;

    font-family: 'Nanum Myeongjo', serif; 
    color : #B4846C;
    font-size : 13pt;
    margin : 0 auto;
    //margin-bottom : 10px;

    &:focus{
        border : 2px solid #968661;
    }

    // ::placeholder{
    //     margin-left : 10pt;
    //     font-size : 14px;
    // }
    
`

export default function Input({...rest}) {
    return (
        <div>
            <Inputs {...rest} />
        </div>
    )
}
