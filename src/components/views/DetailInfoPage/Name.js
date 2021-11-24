import React from 'react'
import styled from 'styled-components'

const PlantName = styled.p`

    font-family: 'Nanum Myeongjo', serif; 
    font-style: normal;
    font-weight: bold;
    font-size: 18px;

    color: #968661;

    display : flex;
    justify-content : center;
    align-items : center;

    

`

export default function Name({children}) {
    return <PlantName>{children}</PlantName>
}
