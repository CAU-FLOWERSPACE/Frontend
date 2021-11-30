import React from 'react'
import styled from 'styled-components'

const Mean = styled.p`

    font-size: 13px;

    color: #9D9D9D;

    display : flex;
    justify-content : center;
    align-items : center;

    padding : 5px;


`
export default function FlowerMean({children}) {
    return (
        <Mean>꽃말 : {children}</Mean>
    )
}
