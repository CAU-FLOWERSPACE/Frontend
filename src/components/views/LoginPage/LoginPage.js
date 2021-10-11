import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

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

        props.history.push('/')

        //서버와 연동시는
        // dispatch(loginUser(body)) //디스패치를 이용해 액션을 취한다 (user_action.js에 있는 loginUser)
        //     .then(response => {
        //         //if(response.payload.loginSuccess) { //로그인 성공하면
        //             props.history.push('/') //페이지 이동(시작페이지로 이동한다)
        //         //} else {
        //           //  alert('Error')
        //         //}
        //     })

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

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <br />
                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    )
}

export default LoginPage