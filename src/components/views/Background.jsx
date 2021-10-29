import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background : #F7F4E3;

    position : absolute;
    border: none;
    outline : none;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

`;

export default function Background() {
    return (
        <Container/>
    )
}
