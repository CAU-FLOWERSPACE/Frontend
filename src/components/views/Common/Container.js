import React from 'react'
import styled from 'styled-components'

const Contents = styled.div`

    margin-top: 55px;

    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    overflow-y : auto;

    border : 2px solid red;

    
`

export default function Container({children}) {

    console.log("container rendering")

    return (
        <Contents>{children}</Contents> 
    )
}
