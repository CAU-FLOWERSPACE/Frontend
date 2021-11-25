import React from 'react'
import styled from 'styled-components'

const Contents = styled.div`

    //margin-top : 60px;

    //border : 1px solid red; // test
    padding-top: 55px;

    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
    overflow-y : auto;

    
`

export default function Container({children}) {

    console.log("container rendering")

    return (
        <Contents>{children}</Contents> 
    )
}
