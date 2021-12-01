import React from 'react'
import styled from 'styled-components'

const Message = styled.div`

    font-size: 11.5px;
    line-height: 15px;
    color : #828282;
    text-align : center;
    margin-top : 20px;

`

export default function InfoMessage({children}) {
    return (
        <Message>{children}</Message>
    )
}
