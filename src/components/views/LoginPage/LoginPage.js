import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import styled from 'styled-components';
import {ConfirmButton, Input, AlignedLink} from './';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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

    // const testHandler = () =>
    // {
    //     axios(
    //         {
    //           url: '/login',
    //           method: 'post',
    //           data: {
    //             email:Email, password : Password
    //           } , 
             
    //           baseURL: 'http://localhost:8080',
    //         withCredentials: true,
    //         }
    //       ).then(function (response) {
    //         console.log(response.data)
    //       });


    // }    

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
            alert("환영합니다!")
            props.history.push('/')
        })
        
       
    }

    return (
        <div>

            <form style={{ display: 'flex', flexDirection: 'column' }} 
            onSubmit={onSubmitHandler2}>
                <Input type="email" value={Email} onChange={onEmailHandler} top = "300px" placeholder = "email" />
                <Input type="password" value={Password} onChange={onPasswordHandler} top = "355px" placeholder = "password" />

                <AlignedLink to = "/join">회원가입</AlignedLink>
                <ConfirmButton type = "submit" top = "410px"> 
                    확인
                </ConfirmButton> 
                

            </form>
        </div>
       
    )
}

export default withRouter(LoginPage) //감싸줘야함