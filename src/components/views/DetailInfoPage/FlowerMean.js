import React from 'react'
import styled from 'styled-components'

const Mean = styled.p`

font-style: normal;
font-weight: normal;
font-size: 15px;

color: #968661;

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
