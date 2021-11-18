import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    width: 277px;
    height: 221px;

    border-top : 1px solid red;

    // display : flex;
    // justify-content : center;
    // align-items : center;

    padding : 10px;
    margin : 0 auto;

`

export default function Feature({children}) {
    return (
        <Container>{children}</Container>
    )
}
