import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import styled from 'styled-components';
import {ConfirmButton, Input, AlignedLink} from './';
import { withRouter } from 'react-router-dom';

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

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        

        dispatch(loginUser(body)) //디스패치를 이용해 액션을 취한다 (user_action.js에 있는 loginUser)
            .then(response => {
                if(response.payload.loginSuccess) { //로그인 성공하면
                    console.log(response)
                    console.log("success")
                    props.history.push('/') //페이지 이동(시작페이지로 이동한다)
                } else {
                   alert('Error')
                }
            })

        // Axios.post('/api/users/login', body)
        //     .then(response => {

        // })
    }

    return (
        <Container>

            <form style={{ display: 'flex', flexDirection: 'column' }} 
            onSubmit={onSubmitHandler}>
                <Input type="email" value={Email} onChange={onEmailHandler} top = "260px" placeholder = "email" />
                <Input type="password" value={Password} onChange={onPasswordHandler} top = "315px" placeholder = "password" />

                <AlignedLink to = "/join">회원가입</AlignedLink>
                <ConfirmButton type = "submit" top = "370px"> 
                    확인
                </ConfirmButton> 
                

            </form>
        </Container>
       
    )
}

export default withRouter(LoginPage) //감싸줘야함