import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';


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
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} /> 
                {/* input 타입에 따라 원하는 정보 주어짐!! */}

                <label>name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />


                <br />
                <button type="submit">
                    Join
                </button>

            </form>
        </div>
    )
}
//리덕스를 사용하면 axios.post 필요없고 대신 디스패치