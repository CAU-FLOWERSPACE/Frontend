import React, { useEffect } from 'react'
import axios from 'axios';
import { Container, IntroductionText, StartButton} from './';
import { withRouter } from 'react-router-dom';

import '../../../MainPage.css';
function LandingPage(props) {

    useEffect(() => {
        axios.get('http://3.36.217.73:8080/api/test')
            .then(response => console.log(response.data))
    }, [])

    const onClickHandler = (event) =>
    {   
        //event.preventDefault();
        props.history.push('/login')
        // axios.get(`api/users/logout`) 
        // .then(reponse => {
        //     //if(reponse.success) 페이지 이동
            
        // })
    }

    const onMoveToLoginHandler = (event) =>
    {
        props.history.push('/login')
    }

    const onMoveToRegisterHandler = (event) =>
    {
        props.history.push('/join')
    }

    return (
   
            <Container>
                <div className = "logoarea">
                    <img src = "img/mainlogo.png" style = {{marginTop : "60px"}}/>
                </div>
                <div className = "textarea"> 
                    <IntroductionText/>
                </div>
                <div className = "buttonarea" onClick={onClickHandler}>
                    <StartButton>시작하기</StartButton>
                </div>
                
            </Container>

        

    )
}

export default withRouter(LandingPage)