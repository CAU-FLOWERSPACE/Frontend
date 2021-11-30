import React from 'react'
import styled from 'styled-components'

const Text = styled.div`

    margin-top : 50px;
    margin-bottom : 30px;

    color : #828282;
    font-size: 13px;
    line-height: 15px;

`

export default function Title({children}) {
    return (
        <Text>{children}</Text>
    )
}
