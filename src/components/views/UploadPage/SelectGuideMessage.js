import React from 'react'
import styled from 'styled-components'

const Message = styled.div`

    //border : 1px solid red;
    padding-top : 20px;
    padding-bottom : 10px;

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
`

export default function SelectGuideMessage({children}) {
    return (
        <Message>{children}</Message>
    )
}
