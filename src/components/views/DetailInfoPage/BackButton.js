import React from 'react'
import styled from 'styled-components';
import {BiArrowBack} from 'react-icons/bi';
import { withRouter } from 'react-router-dom'

const Button = styled.div`

    width: 45px;
    height: 34px;

    background: #D9CFB6;
    border: 1px solid #D9CFB6;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    margin : 15px;
    padding : 2px 0;

    color : #968661;

`
function BackButton(props) {

    const onClickHandler = (event) =>
    {
        //뒤로 가기 또는 다른거 추천받기
    
        props.history.push('/');
    }
    return <Button onClick = {onClickHandler}><BiArrowBack size = "70%"/></Button>
}


export default withRouter(BackButton)
