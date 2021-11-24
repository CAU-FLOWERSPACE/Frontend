import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    width: 277px;
    height: 221px;

    border-top : 1px solid #968661;

    font-family: 'Nanum Myeongjo', serif; 
    font-size : 15px;
    // display : flex;
    // justify-content : center;
    // align-items : center;

    color: #968661;
    padding : 10px;
    margin : 0 auto;
    overflow-y : auto;

`

export default function Feature({children}) {
    return (
        <Container>{children}</Container>
    )
}
