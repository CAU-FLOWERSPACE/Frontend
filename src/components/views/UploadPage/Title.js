import React from 'react'
import styled from 'styled-components'

const Text = styled.div`

    //border : 1px solid red;
    padding-top : 30px;
    padding-bottom : 20px;

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
