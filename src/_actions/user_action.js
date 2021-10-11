import axios, { Axios } from 'axios';
import {
    LOGIN_USER, REGISTER_USER
} from './types'; //types.js에서 타입을 가져옴

export function loginUser(dataToSubmit) { //액션함수 정의

    const request = axios.post('/api/users/login', dataToSubmit) //서버에 리퀘스트 날림
        .then(response => response.data)

    return {  //리퀘스트를 리듀서에 넘겨줌, 리듀서에 반영해줘야하니까
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit) //서버에 리퀘스트 날림
        .then(response => response.data)

    return {  //리퀘스트를 리듀서에 넘겨줌, 리듀서에 반영해줘야하니까
        type: REGISTER_USER,
        payload: request
    }
}

