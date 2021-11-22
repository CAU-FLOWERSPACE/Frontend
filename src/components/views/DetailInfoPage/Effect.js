import React from 'react'
import styled from 'styled-components'

const Func = styled.p`

font-style: normal;
font-weight: normal;
font-size: 15px;

color: #968661;

display : flex;
justify-content : center;
align-items : center;

padding : 5px;


`

export default function Effect({children}) {
    return (
        <Func>효과 : {children}</Func>
    )
}
