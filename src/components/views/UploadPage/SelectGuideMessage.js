import React from 'react'
import styled from 'styled-components'

const Message = styled.div`

    padding : 20px;
    color : #828282;
    padding-bottom : 10px;
    font-style: normal;
    font-size: 13px;
    line-height: 15px;
`

export default function SelectGuideMessage({children}) {
    return (
        <Message>{children}</Message>
    )
}
