import React from 'react'
import styled from 'styled-components';



const Container = styled.div`

width: 130px;
padding : 8px;


`
export default function Card({children}) {
    return (
        <Container>
            {children}
        </Container>

    )
}
