import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    font-size: 15px;
    line-height: 15px;
    color : #828282;
    text-align : center;
    margin-top : 40px;

`



export default function Title({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}
