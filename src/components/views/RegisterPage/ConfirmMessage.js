import React from 'react'
import styled from 'styled-components'


const Message = styled.p`

    font-size = 11px;

`

export default function ConfirmMessage({children}) {
    return (
        <Message>{children}</Message>
    )
}
