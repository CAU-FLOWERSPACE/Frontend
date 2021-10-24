import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import {Input, ConfirmButton} from './';
import styled from 'styled-components';

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


export default function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("") //서버에게 보내고자 하는 값
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword)
        {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email: Email,
            name : Name,
            password: Password        
        }

        dispatch(registerUser(body)) //디스패치를 이용해 액션을 취한다 (user_action.js에 있는 loginUser)
            .then(response => 
            {
                if(response.payload.success) 
                { //로그인 성공하면
                    props.history.push("/login")
                }
                else{
                    alert("failed to join")
                }
            })

        // Axios.post('/api/users/login', body)
        //     .then(response => {

        // })
    }


    return (
        <Container>

            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                
                <Input type="email" value={Email} onChange={onEmailHandler} top = "205px" placeholder = "이메일"/> 
                <Input type="text" value={Name} onChange={onNameHandler} top = "260px" placeholder = "이름" />
                <Input type="password" value={Password} onChange={onPasswordHandler} top = "315px" placeholder = "비밀번호"/>
                <Input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} top = "370px" placeholder ="비밀번호 확인"/>

                <ConfirmButton type="submit" top = "455px">
                    가입하기
                </ConfirmButton>

            </form>
        </Container>
      

    )
}
