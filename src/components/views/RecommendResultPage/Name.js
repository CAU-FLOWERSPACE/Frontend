import React from 'react'
import styled from 'styled-components'

const NameContainer = styled.div`

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

    //border : 1px solid red;

    display : flex;
    // margin : 0 auto;
    margin-top : 10px;
    margin-bottom : 10px;
  
    color : #897F65;
    justify-content : center;
    align-items : center;

`

export default function Name({children}) {
    return (
        <NameContainer>
            {children}
        </NameContainer>
    )
}
