import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from '../../../_actions/user_action';
import styled from 'styled-components';
import {ConfirmButton, Input, AlignedLink, GoogleButton, LogoutBtn} from './';
import { withRouter } from 'react-router-dom';
import {Container} from '../Common';
import axios from 'axios';
import '../../../MainPage.css';

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

    const onSubmitHandler = (event) =>
    {
        event.preventDefault();

        const formData = new FormData();

        formData.append("email", Email);
        formData.append("password", Password);

        console.log("formdata는")
        console.log(formData);

        dispatch(loginUser(formData))
        .then(response=>{
           
            
            // let loginData = {
            //     isLoggedIn: true,
            //     userEmail : Email
            // };

            // console.log(loginData)
            // document.cookie = 'key=' + btoa(JSON.stringify(loginData)); //로그인 데이터를 쿠키에 저장 
            // // console.log(document.cookie);
            // console.log(response.headers.get('set-cookie'))
            props.history.push('/')
        })
        
        
       
    }

    return (
        
        <div style = {{marginTop : '150px'}}>

            <form style={{ display: 'flex', flexDirection: 'column'}} 
            onSubmit={onSubmitHandler}>
                <div style = {{ width : "100px", height : "60px" , margin : "0 auto", overFit : "cover" }}>
                    <img src = "img/logo/flower.png" width = "100%"/>
                </div>
                <Input type="email" value={Email} onChange={onEmailHandler} placeholder = "email" />
                <Input type="password" value={Password} onChange={onPasswordHandler} placeholder = "password" />

                <ConfirmButton type = "submit"> 
                    확인
                </ConfirmButton> 
                <AlignedLink to = "/join">회원가입</AlignedLink>
                

            </form>
        </div>
     
       
    )
}

export default withRouter(LoginPage) //감싸줘야함