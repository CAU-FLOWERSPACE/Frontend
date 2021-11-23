import React from 'react'
import styled from 'styled-components'

const Message = styled.p`
    font-size : 10px;
    color : #B4846C;
`

export default function AuthenMessage({children}) {
    return (
        <Message>{children}</Message>
    )
}
