import React from 'react';
import { useLocation, withRouter } from 'react-router';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import './ARpage.css';
import { ButtonContainer } from '../Common';
import {Button} from './';



function ARpage() {

    const location = useLocation();
    const code = location.state.response;

    const history = useHistory();

    const onGoBack = (event) =>
    {
        history.goBack();
    }

    const onGoToMain = (event) =>
    {
        history.push('/');
    }

    return (
        <>
            <div id ="area"> 
                <iframe id = "ar" srcdoc = {code}>
                    대체정보
                </iframe>
            </div>
            <ButtonContainer>
                <Button onClick = {onGoBack}>뒤로가기</Button>
                <Button onClick = {onGoToMain}>메인으로</Button>
            </ButtonContainer>

        </>
    )
}

export default withRouter(ARpage)
