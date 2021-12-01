import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    margin : 10px;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : row;
    padding : 10px;
`

export default function ButtonContainer({children}) {
    return (
        <Container>{children}</Container>
    )
}
