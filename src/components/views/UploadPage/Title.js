import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    margin : 30px;

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

`

export default function Title({children}) {
    return (
        <Text>{children}</Text>
    )
}
