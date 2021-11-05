import React from 'react'
import styled from 'styled-components'

const Inputs = styled.input`

    //position: absolute;
    width: 210px;
    height: 40px;
    //top: ${props=>props.top};

    background: #E6DDC6;
    border: 1px solid #E6DDC6;
    outline : none;
    box-sizing: border-box;
    bbox-shadow: 0px 4px 4px rgba(150, 134, 97, 0.5);
    border-radius: 10px;
    margin : 0 auto;
    margin-bottom : 10px;

    font-family: 'Nanum Myeongjo', serif; 
    color : #B4846C;
    font-size : 13pt;
    

    &:focus{
        border : 2px solid #968661;
    }

    

    ::placeholder{
        font-size : 13pt;
    }
    
`

export default function Input({top, ...rest}) {
    return (
        <div>
            <Inputs {...rest} />
        </div>
    )
}



