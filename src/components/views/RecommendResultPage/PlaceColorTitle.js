import React from 'react'
import styled from 'styled-components'

const Title = styled.div`

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

    margin : 15px;

`

export default function PlaceColorTitle({children}) {
    return (
        <Title>당신의 {children}에 어울리는 꽃은 ..</Title>
    )
}
