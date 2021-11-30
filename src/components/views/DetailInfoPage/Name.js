import React from 'react'
import styled from 'styled-components'

const PlantName = styled.p`

    font-style: normal;
    font-weight: bold;
    font-size: 15px;

    color: #828282;

    display : flex;
    justify-content : center;
    align-items : center;

    

`

export default function Name({children}) {
    return <PlantName>{children}</PlantName>
}
