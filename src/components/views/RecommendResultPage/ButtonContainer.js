import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    margin : 10x;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : row;
    padding : 10px;
    // border : 1px solid red;
`

export default function ButtonContainer({children}) {
    return (
        <Container>{children}</Container>
    )
}
