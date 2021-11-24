import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    //border : 1px solid red;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : row;

`

export default function ButtonContainer({children}) {
    return (
        <Container>{children}</Container>
    )
}
