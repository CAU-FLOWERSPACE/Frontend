import React from 'react'
import styled from 'styled-components'


const Message = styled.p`

    font-size : 11.5px;
    color : #9D9D9D;
    padding : 3px;
    margin-bottom : 2px;

`

export default function ConfirmMessage({children}) {
    return (
        <Message>{children}</Message>
    )
}
