import React from 'react'
import styled from 'styled-components';



const Container = styled.div`

width: 170px;
// height: 250px;

// margin : 20px;

// border-radius : 2px;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
