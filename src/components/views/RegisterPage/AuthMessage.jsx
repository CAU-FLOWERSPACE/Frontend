import React from 'react'
import styled from 'styled-components'

const Message = styled.p`

    font-family: 'Nanum Myeongjo', serif; 
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    
`

export default function AuthMessage({children}) {
    return <Message>{children}</Message>
}
