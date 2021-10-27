import React from 'react'
import styled from 'styled-components'
import {Buttons, CommendText} from './';

const Container = styled.div`
    background : #F7F4E3;

    position : absolute;
    border: none;
    outline : none;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export default function RecommendMainPage(props) {

    const onMoveToColorHandler = (event) =>
    {
        props.history.push('/')
    }

    const onMoveToSpaceHandler = (event) =>
    {
        props.history.push('/')
    }

    return (
        <Container>
            <CommendText/>
            <Buttons top = "286px" onClick = {onMoveToColorHandler}>컬러테라피</Buttons>
            <Buttons top = "480px" onClick = {onMoveToSpaceHandler}>공간테라피</Buttons>
        </Container>
    )
}
