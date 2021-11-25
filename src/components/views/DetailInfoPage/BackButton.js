import React from 'react'
import styled from 'styled-components';
import {BiArrowBack} from 'react-icons/bi';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';

const Button = styled.div`

    width: 100px;
    height: 34px;

    background: #D9CFB6;
    //border: 2px solid #D9CFB6;
    border: 3px solid #CFC19F;
    box-sizing: border-box;
    //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    line-height: 34px;

    font-family: 'Nanum Myeongjo', serif; 
    font-weight : bold;
    font-size : 13px;

    margin : 15px;
    
    /버튼 내 텍스트 가운데로 
    
    display : flex;
    justify-content : center;
    //align-items : center;
    text-align : center;

    margin : 0 auto;
    color : #968661;

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
