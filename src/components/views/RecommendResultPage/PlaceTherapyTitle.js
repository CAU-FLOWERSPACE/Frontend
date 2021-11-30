import React from 'react'
import styled from 'styled-components'

const Title = styled.div`

    margin-top : 40px;
    font-size: 13px;
    line-height: 15px;
    color: #828282;
`

export default function PlaceTherapyTitle({children}) {
    return (
        <Title>회원님의 {children}에 추천드리는 식물입니다.</Title>
    )
}
