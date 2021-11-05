import React, { useEffect } from 'react'
import axios from 'axios';
import { Container, IntroductionText, StartButton, MenuButton} from './';
import { withRouter } from 'react-router-dom';

import '../../../MainPage.css';
function LandingPage(props) {

    useEffect(() => {
        axios.get('http://localhost:8080/api/test')
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


        // <div style={{
        //     display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        // }}>
        //     <h2>시작 페이지</h2>

        //     <button onClick = {onClickHandler}>
        //         로그아웃
        //     </button>
        // </div>
        
        
            <Container className = "containerarea">
                <div className = "logoarea">
                    <img src = "img/mainlogo.png" style = {{ marginTop : "30px", margin : "0 auto", marginLeft : "19px", weigtht: "100%"}} />
                </div>
                <div classname = "textarea"> 
                    <IntroductionText/>
                </div>
                <div classname = "buttonarea" onClick={onClickHandler}>
                    <StartButton>시작하기</StartButton>
                </div>
                
            </Container>

        

    )
}

export default withRouter(LandingPage)