import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    margin : 20px;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : row;
    padding : 10px;
`


export default function ButtonConainer({children}) {
    return (
        <Container>{children}</Container>
    )
}
