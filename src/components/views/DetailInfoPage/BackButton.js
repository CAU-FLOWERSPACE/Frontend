import React from 'react'
import styled from 'styled-components';
import {BiArrowBack} from 'react-icons/bi';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';

const Button = styled.div`

    width: 90px;
    height: 30px;


    background: #AEC4BA;
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    line-height: 34px;

    font-size : 12px;

    margin : 0 auto;
    margin : 15px;
    
    /버튼 내 텍스트 가운데로 
    
    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;

    
    color : #E8F0EF;

    &:active{
        background-color : #698F7E;
    }

`
function BackButton(props) {


    const history = useHistory();

    const onClickHandler = (event) =>
    {
        history.goBack();
    }

    return <Button onClick = {onClickHandler}>뒤로가기</Button>
}


export default withRouter(BackButton)
