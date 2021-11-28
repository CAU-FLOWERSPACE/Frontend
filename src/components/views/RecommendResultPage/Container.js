import React from 'react'
import styled from 'styled-components'

const Block = styled.div`

    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;

    overflow-y : auto;


`

export default function Container({children}) {
    return (
        <Block>
            {children}
        </Block>

    )
}
