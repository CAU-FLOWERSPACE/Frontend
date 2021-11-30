import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    width: 277px;

    border-top : 1px solid #AEC4BA;

    font-size : 13px;

    color: #828282;
    padding : 10px;
    margin : 0 auto;
    overflow-y : auto;

`

export default function Feature({children}) {
    return (
        <Container>{children}</Container>
    )
}
