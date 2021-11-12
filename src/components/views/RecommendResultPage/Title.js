import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

    margin : 15px;

`



export default function Title({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}
