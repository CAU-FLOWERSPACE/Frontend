import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { duplicateEmailCheck, registerUser } from '../../../_actions/user_action';
import {Input, ConfirmButton, AuthButton, AuthenMessage, ConfirmMessage} from './';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import './Register.css';
function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("") //서버에게 보내고자 하는 값
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const [emailMessage, setEmailMessage] = useState("이메일을 입력하세요")
    const [nameMessage, setNameMessage] = useState("이름을 입력하세요")
    const [passwordMessage, setPasswordMessage] = useState("비밀번호를 입력하세요")
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("")

    const [isName, setIsName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

    const [Auth, setAuth] = useState(false) //서버에게  받아올 이메일 중복 t/f값
    const [Message, setMessage] = useState("사용불가능 이메일") //서버값에 따라 달라질 .. 
   
    

    const onEmailHandler = (event) => {

        const emailRegex = //올바른 이메일 형식
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        const emailCurrent = event.currentTarget.value
        setEmail(emailCurrent)

        if(!emailRegex.test(emailCurrent))//test는 내장함수
        {
            setEmailMessage('이메일 형식이 올바르지 않음')
            setIsEmail(false)
        }

        else
        {
            setEmailMessage('올바른 이메일 형식입니다')
            setIsEmail(true)
        }

        console.log(isEmail)
    }


    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
        if(event.currentTarget.value.length < 2 || event.currentTarget.value.length >10)
        {
            setNameMessage('10자 미만으로 입력 필수')
            setIsName(false)
        }

        else
        {
            setNameMessage('올바른 이름 형식입니다')
            setIsName(true)
        }

        console.log(isName)
    }

    const onPasswordHandler = (event) => {
        const passwordRegex = 
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = event.target.value
        setPassword(passwordCurrent)

        if(!passwordRegex.test(passwordCurrent))
        {
            setPasswordMessage('숫자+영문자+특수문자 조합 8자리 이상')
            setIsPassword(false)
        }

        else
        {
            setPasswordMessage('안전한 비밀번호입니다')
            setIsPassword(true)
        }

        console.log(isPassword)

    }

    const onConfirmPasswordHandler = (event) => {

        const passwordConfirmCurrent = event.target.value
        setConfirmPassword(passwordConfirmCurrent)

        if(Password === passwordConfirmCurrent)
        {
            setPasswordConfirmMessage('비밀번호가 같습니다')
            setIsPasswordConfirm(true)
        }
        else
        {
            setPasswordConfirmMessage('비밀번호가 위와 다릅니다')
            setIsPasswordConfirm(false)
        }
    
        console.log(isPasswordConfirm)

    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        // if(Password !== ConfirmPassword)
        // {
        //     return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        // }

        console.log(`n : ${isName}`)
        console.log(`e : ${isEmail}`)
        console.log(`p : ${isPassword}`)
        console.log(`cp : ${isPasswordConfirm}`)

        let body = { //원랜 따옴표 x, 있어도 없어도 통한다
            email: Email,
            password: Password,
            name: Name
        }


//4개 값 모두 있고 true 받은 경우에만 dispatch

        
        dispatch(registerUser(body)) //디스패치를 이용해 액션을 취한다 
            .then(response =>  //여기한번 register.id로 출력해보기 
            {
                if(response.payload.id) //뭉텅이를 풀어서!
                { 
                    console.log(response.payload.id) //id 출력해보기
                    alert("회원가입이 완료되었습니다")
                    props.history.push("/") //메인페이지로 가기
                }
                else{
                    alert("failed to join")
                }
            })

    }

    const onClickHandler = (event) =>
    {
        console.log('이메일 중복체크')

        dispatch(duplicateEmailCheck(Email))
            .then(response => 
                {
                    console.log(response.payload) //출력해보기

                    if(response.payload)
                    {
                        setAuth(true)
                        setMessage("사용 가능한 이메일")
                    }
                }
            )
               
    
    }

    
    return (
        <div style = {{marginTop : '50px', marginBottom : "50px"}}>

            <form style={{display: 'flex', flexDirection: 'column', margin : "0 auto"}} 
                onSubmit={onSubmitHandler}
            >
                <div style = {{ width : "100px", margin : "0 auto", borderBottom : "0.5px solid #698F7E", 
                paddingBottom : "1px", textAlign : "center", marginBottom : "25px", color : "#698F7E", 
                fontSize : " 14px" }}>
                    회원가입
                </div>
                
                <label className = "join_label">이메일</label>
                <Input type="email" value={Email} onChange={onEmailHandler}/> 
                <ConfirmMessage>{emailMessage}</ConfirmMessage>
                    {/* <AuthButton onClick={onClickHandler}/>  */}
                    {/* <AuthenMessage>{Message}</AuthenMessage> */}
                
                 <label className = "join_label">이름</label>
                <Input type="text" value={Name} onChange={onNameHandler} />
                <ConfirmMessage>{nameMessage}</ConfirmMessage>

                <label className = "join_label">비밀번호</label>
                <Input type="password" value={Password} onChange={onPasswordHandler}/>
                <ConfirmMessage>{passwordMessage}</ConfirmMessage>

                <label className = "join_label">비밀번호 확인</label>
                <Input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>
                <ConfirmMessage>{passwordConfirmMessage}</ConfirmMessage>

                <ConfirmButton type="submit" disabled = {!(isName && isEmail && isPassword && isPasswordConfirm)} > 
                    가입하기
                </ConfirmButton>

            </form>
        </div>
      

    )
}

export default withRouter(RegisterPage)
