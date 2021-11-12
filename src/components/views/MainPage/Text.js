import React from 'react'
import styled from 'styled-components'

const IntroText = styled.p`

    font-family: 'Nanum Myeongjo', serif; 
    font-size : 12pt;
    font-weight : bold;

    //border : 1px solid red;

    padding : 12px;

    & + & {
        margin : 1px;
    }

   
2

`

export default function Text({children,...rest}) {
    return <IntroText {...rest}>{children}</IntroText>
}
