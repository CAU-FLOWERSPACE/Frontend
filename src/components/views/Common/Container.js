import React from 'react'
import styled from 'styled-components'

const Contents = styled.div`

     padding-top: 55px;
    width: 100vw;
    height: 100vh;

    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    overflow-y : auto;

    border : 2px solid red;

    background : grey;

    
`

export default function Container({children}) {

    console.log("container rendering")

    return (
        <Contents>{children}</Contents> 
    )
}
