import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    font-size: 14px;
    font-size :${props => props.fontSize};
    line-height: 15px;
    color : #828282;
    text-align : center;
    margin-top : 50px;

`



export default function Title({children, ...rest}) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}
