import axios, { Axios } from 'axios';
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from './types'; //types.js에서 타입을 가져옴

export function loginUser(dataToSubmit) { //액션함수 정의

    const request = axios.post('http://localhost:8080/login', dataToSubmit) //서버에 리퀘스트 날림
        .then(response => response.data)

    return {  //리퀘스트를 리듀서에 넘겨줌, 
        type: LOGIN_USER,
        payload: request
    }
 }

export function registerUser(dataToSubmit) {

    const request = axios.post('http://localhost:8080/join', dataToSubmit) //서버에 리퀘스트 날림
         .then(response => response.data)

    return {  //리퀘스트를 리듀서에 넘겨줌
        type: REGISTER_USER,
        payload: request //payload는 서버에게 받은 데이터 뭉텅이
    }
}

export function auth() {

    // const request = axios.get('/api/users/auth') //서버에 리퀘스트 날림
    //     .then(response => response.data)
    
    // return {  //리퀘스트를 리듀서에 넘겨줌
    //     type: AUTH_USER,
    //     payload: request
    // }
}

export function toggle()
{

}

