import React from 'react'
import styled from 'styled-components'

const PlantName = styled.p`

font-style: normal;
font-weight: bold;
font-size: 18px;

color: #968661;

display : flex;
justify-content : center;
align-items : center;

padding-top : 20px;


`

export default function Name({children}) {
    return <PlantName>{children}</PlantName>
}
