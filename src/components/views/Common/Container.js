import React from 'react'
import styled from 'styled-components'

const Contents = styled.div`

    margin-top : 60px;

    border : 1px solid red; // test

    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;

    
`

export default function Container({children}) {

    console.log("container rendering")

    return (
        <Contents>{children}</Contents> 
    )
}
