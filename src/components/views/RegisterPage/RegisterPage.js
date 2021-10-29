import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import {Input, ConfirmButton} from './';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {

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

        let body = { //원랜 따옴표 x, 있어도 없어도 통한다
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body)) //디스패치를 이용해 액션을 취한다 
            .then(response => 
            {
                if(response.payload.id) 
                { 
                    console.log(response.payload.id) //id 출력해보기
                    alert("회원가입이 완료되었습니다")
                    props.history.push("/recommend") //추천페이지
                }
                else{
                    alert("failed to join")
                }
            })

        // Axios.post('/api/users/login', body)
        //     .then(response => {

        // }) //이걸 액션함수에서 대신 해줌
    }


    return (
        <div>

            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                
                <Input type="email" value={Email} onChange={onEmailHandler} top = "225px" placeholder = "이메일"/> 
                <Input type="text" value={Name} onChange={onNameHandler} top = "280px" placeholder = "이름" />
                <Input type="password" value={Password} onChange={onPasswordHandler} top = "335px" placeholder = "비밀번호"/>
                <Input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} top = "390px" placeholder ="비밀번호 확인"/>

                <ConfirmButton type="submit" top = "475px">
                    가입하기
                </ConfirmButton>

            </form>
        </div>
      

    )
}

export default withRouter(RegisterPage)
