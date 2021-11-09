import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import {Input, ConfirmButton, AuthMessage, AuthButton} from './';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("") //서버에게 보내고자 하는 값
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const [Auth, setAuth] = useState(false) //서버에게  받아올 t/f값
    // const [Message, setMessage] = useState() //서버값에 따라 달라질 .. 
   
    

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
                    props.history.push("/") //추천페이지
                }
                else{
                    alert("failed to join")
                }
            })

        // Axios.post('/api/users/login', body)
        //     .then(response => {

        // }) //이걸 액션함수에서 대신 해줌
    }

    const onClickHandler = (event) =>
    {
        //백엔드에게 요청(dispatch 구현 필요)
        //true면 메시지를 가능으로 바꾸고
        //false면 메시지를 불가능으로 바꿔서 출력

        /*임시 로직*/ 
        setAuth(!Auth) //현재 상태의 반대로 
        Auth ? alert("사용가능한 이메일") : alert("이미 가입된 이메일입니다")
        //안하면 못넘어가게 해야됨 !! 이건 여기다 삽입하는지는 모르겠지만


    }

    
    return (
        <div style = {{display : 'flex', justifyContent : 'center', alignContent : 'center', marginTop : '230px'}}>

            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <div style = {{ margin : "0 auto" }}>
                <img src = "img/login.png" style ={{marginBottom : "12px"}}/>
                </div>
                
                    <Input type="email" value={Email} onChange={onEmailHandler} placeholder = "이메일"/> 
                    <AuthButton onClick={onClickHandler}/> 
                
                
                <Input type="text" value={Name} onChange={onNameHandler} placeholder = "이름" />
                <Input type="password" value={Password} onChange={onPasswordHandler} placeholder = "비밀번호"/>
                <Input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder ="비밀번호 확인"/>

                <ConfirmButton type="submit" top = "475px">
                    가입하기
                </ConfirmButton>

            </form>
        </div>
      

    )
}

export default withRouter(RegisterPage)
