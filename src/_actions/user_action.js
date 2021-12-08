import axios, { Axios } from 'axios';
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER, AUTH_LOGIN_SUCCESS, COLOR_RECOMMEND, FLOWER_DETAIL, 
    IMAGE_COLOR_SUBMIT, IMAGE_THERAPY_SUBMIT, DUP_CHECK, PLANT_DETAIL, AR_SUBMIT, LOGOUT_USER
} from './types'; //types.js에서 타입을 가져옴

import { useDispatch } from 'react-redux';

export function loginUser(dataToSubmit) { //액션함수 정의

    

    const request = axios.post('https://capstone.choicloudlab.com/login', dataToSubmit, {withCredentials : true}) //서버에 리퀘스트 날림
        // .then(()=>{console.log("post 완료")})
        .then((response)=> {
            console.log(`response : ${response.status}`) //response.status로 바꿔서 request에 200 저장
            // dispatchEvent(loginSuccess(response.status));
        })

    return {  //리퀘스트를 리듀서에 넘겨줌, 
        type: LOGIN_USER,
        payload: request
    }

    // return(dispatch) => {
    //     return axios.post('https://capstone.choicloudlab.com/login', dataToSubmit, {withCredentials : true}) 
    //     .then((response) => {
    //         // SUCCEED
    //         // dispatch(loginSuccess(response.status));
    //         console.log(response);
    //     }).catch((error) => {
    //         // FAILED
    //         console.log("Fail");
    //     });
    // };
 }

 export function loginSuccess(status) {

    console.log(`status : ${status}`);

    return {
        type: AUTH_LOGIN_SUCCESS,
        status : status
    };
}
 
export function registerUser(dataToSubmit) {

    const request = axios.post('https://capstone.choicloudlab.com/api/join', dataToSubmit) //서버에 리퀘스트 날림
         .then(response => response.data) //reponse.data를 받아와서 request에 저장

    return {  //리퀘스트를 리듀서에 넘겨줌
        type: REGISTER_USER,
        payload: request //payload는 서버에게 받은 데이터 뭉텅이
    }
}

export function duplicateEmailCheck(dataToSubmit)
{
    const request = axios.post(`https://capstone.choicloudlab.com/api/user/check/email/${dataToSubmit}`)
        .then(response => response.data)

    return {
        type : DUP_CHECK,
        payload : request
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

export function colorRecommend(dataToSubmit) //dataToSubmit
{
    const request = axios.get(`https://capstone.choicloudlab.com/api/flower/flowerList/${dataToSubmit}`) 
    //dataToSubmit은 color 한개
         .then(response => response.data) //reponse.data를 받아와서 request에 저장

    return {  
        type: COLOR_RECOMMEND,
        payload: request //받은 건 꽃 객체 뭉텅이
    }
}

export function flowerDetail(dataToSubmit)
{
    const request = axios.get(`https://capstone.choicloudlab.com/api/flower/${dataToSubmit}`)
    .then(response => response.data) //reponse.data를 받아와서 request에 저장

    return {  
        type: FLOWER_DETAIL,
        payload: request //받은 건 꽃 객체 뭉텅이
    }
}

export function plantDetail(dataToSubmit)
{
    const request = axios.get(`https://capstone.choicloudlab.com/api/place/plant/${dataToSubmit}`)
    .then(response => response.data)

    return {
        type : PLANT_DETAIL,
        payload : request
    }
}

export function imageColorSubmit(dataToSubmit)
{
    const request = axios.post(`https://capstone.choicloudlab.com/api/place/flower`, dataToSubmit)
    .then(response => response.data)
    return {
        type : IMAGE_COLOR_SUBMIT,
        payload : request
    }
}

export function imageTherapySubmit(dataToSubmit)
{
    const request = axios.post(`https://capstone.choicloudlab.com/api/place/plant`, dataToSubmit)
    .then(response => response.data)
    return {
        type : IMAGE_THERAPY_SUBMIT,
        payload : request
    }
}

export function arSubmit(dataToSubmit)
{
    const request = axios.post(`https://capstone.choicloudlab.com/api/ar`, dataToSubmit)
     .then(response => response.data)
     
    
    return {
        type : AR_SUBMIT,
        payload : request
    }
    
}

export function logoutUser()
{
    const request = axios.post(`https://capstone.choicloudlab.com/logout`)
    .then(response => {
        console.log("로그아웃됨")
    })
    return {
        type : LOGOUT_USER,
        payload : request
    }
}
