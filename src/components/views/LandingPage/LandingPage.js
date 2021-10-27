import React, { useEffect } from 'react'
import axios from 'axios';
import { IntroductionText, StartButton, MenuButton} from './';
import { withRouter } from 'react-router-dom';
function LandingPage(props) {

    useEffect(() => {
        axios.get('http://localhost:8080/api/test')
            .then(response => console.log(response.data))
    }, [])

    const onClickHandler = (event) =>
    {   
        //event.preventDefault();
        props.history.push('/recommend')
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
        
        <div>
            <IntroductionText/>
            <MenuButton onClick={onMoveToRegisterHandler} left = "194px">회원가입</MenuButton>
            <MenuButton onClick={onMoveToLoginHandler} left = "278px">로그인</MenuButton>
            
            <StartButton top = "475px" onClick = {onClickHandler}>시작하기</StartButton>

        </div>


    )
}

export default withRouter(LandingPage)