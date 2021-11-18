import React from 'react'
import styled from 'styled-components';
import {BiArrowBack} from 'react-icons/bi';


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

export default function BackButton({history}) {

    const onClickHandler = () =>
    {
        //뒤로 가게
        console.log("back")
        history.goBack();
    }
    return <Button onClick = {onClickHandler}><BiArrowBack size = "70%"/></Button>
}
