import React from 'react'
import styled from 'styled-components';



const Container = styled.div`

width: 260px;
height: 350px;

margin : 20px;


background: #E6DDC6;
border-radius: 15px;

//border : 1px solid red;
padding : 10px;


`
export default function Card({children}) {
    return (
        <Container>
            {children}
        </Container>

    )
}
