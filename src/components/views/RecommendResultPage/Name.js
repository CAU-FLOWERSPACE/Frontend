import React from 'react'
import styled from 'styled-components'

const NameContainer = styled.div`

    font-size: 13px;
    line-height: 15px;

    display : flex;
    margin-top : 10px;
  
    color : #828282;
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
