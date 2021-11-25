import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import styled from 'styled-components';
import {ConfirmButton, Input, AlignedLink, GoogleButton} from './';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import '../../../MainPage.css';

const Container = styled.div`

    background : #F7F4E3;

    //position : absolute;
    border: none;
    outline : none;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

`

function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("") //서버에게 보내고자 하는 값

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        
        try{
        dispatch(loginUser(body)) //디스패치를 이용해 액션을 취한다 (user_action.js에 있는 loginUser)
            .then(response => {
                console.log(response)
                // if(response.payload.loginSuccess) { //로그인 성공하면
                //     console.log(response)
                //     console.log("success")
                //     props.history.push('/') //페이지 이동(시작페이지로 이동한다)
                // } else {
                //    alert('Error')
                // }
            })
        }catch (e) {
            console.log('코드의 실행 흐름이 catch 블록으로 옮겨집니다.');
            alert(`다음과 같은 에러가 발생했습니다: ${e.name}: ${e.message}`);
          }
        // Axios.post('/api/users/login', body)
        //     .then(response => {

        // })
    }

    const onSubmitHandler2 = (event) =>
    {
        event.preventDefault();

        const formData = new FormData();

        formData.append("email", Email);
        formData.append("password", Password);

        console.log("formdata는")
        console.log(formData);

        dispatch(loginUser(formData))
        .then(()=>{
            console.log(document.cookie) // 로그인 서세스 
            alert("환영합니다!")
            props.history.push('/')
        })
        
        
       
    }

    return (
        <div style = {{display : 'flex', justifyContent : 'center', alignContent : 'center', marginTop : '200px'}}>

            <form style={{ display: 'flex', flexDirection: 'column'}} 
            onSubmit={onSubmitHandler2}>
                <div style = {{ margin : "0 auto" }}>
                    <img src = "img/login.png" style ={{margin : "12px"}}/>
                </div>
                <Input type="email" value={Email} onChange={onEmailHandler} placeholder = "email" />
                <Input type="password" value={Password} onChange={onPasswordHandler} placeholder = "password" />

                <ConfirmButton type = "submit"> 
                    확인
                </ConfirmButton> 
                <AlignedLink to = "/join">회원가입</AlignedLink>

                {/* <GoogleButton/> */}
                {/* 구글버튼 */}
                

            </form>
        </div>
       
    )
}

export default withRouter(LoginPage) //감싸줘야함