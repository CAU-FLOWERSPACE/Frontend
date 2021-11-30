import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    width : 80px;
    height: 65px;

    outline : none;
    // border : 1px solid red;
    
   
    margin : 0 auto;
    margin-top : 100px;
    margin-bottom : 35px;
    display : flex;
    justify-content : center;
    align-items : center;

`

export default function Logo() {
    return (
        <Container><img src = "img/logo/logo_v3.png" style={{width : "100%", height : "100%",overFit: "cover"}} /></Container>
    )
}
