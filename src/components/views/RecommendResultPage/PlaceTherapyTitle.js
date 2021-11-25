import React from 'react'
import styled from 'styled-components'

const Title = styled.div`

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    color: #968661;

    margin : 15px;
    padding : 3px;

`

export default function PlaceTherapyTitle({children}) {
    return (
        <Title>당신의 {children} 속</Title>
    )
}
