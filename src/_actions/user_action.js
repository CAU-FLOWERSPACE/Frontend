import axios, { Axios } from 'axios';
import {
    LOGIN_USER, REGISTER_USER, AUTH_USER,COLOR_RECOMMEND, FLOWER_DETAIL, 
    IMAGE_COLOR_SUBMIT, IMAGE_THERAPY_SUBMIT, DUP_CHECK, PLANT_DETAIL
} from './types'; //types.js에서 타입을 가져옴

export function loginUser(dataToSubmit) { //액션함수 정의


    const request = axios.post('http://3.36.217.73:8080/login', dataToSubmit, {withCredentials : true}) //서버에 리퀘스트 날림
        // .then(()=>{console.log("post 완료")})
        .then((response)=> {
            console.log(response.status)
        })

    return {  //리퀘스트를 리듀서에 넘겨줌, 
        type: LOGIN_USER,
        payload: request
    }
 }

export function registerUser(dataToSubmit) {

    const request = axios.post('http://3.36.217.73:8080/api/join', dataToSubmit) //서버에 리퀘스트 날림
         .then(response => response.data) //reponse.data를 받아와서 request에 저장

    return {  //리퀘스트를 리듀서에 넘겨줌
        type: REGISTER_USER,
        payload: request //payload는 서버에게 받은 데이터 뭉텅이
    }
}

export function duplicateEmailCheck(dataToSubmit)
{
    const request = axios.post(`http://3.36.217.73:8080//api/user/check/email/${dataToSubmit}`)
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
    const request = axios.get(`http://3.36.217.73:8080/api/flower/flowerList/${dataToSubmit}`) 
    //dataToSubmit은 color 한개
         .then(response => response.data) //reponse.data를 받아와서 request에 저장

    return {  
        type: COLOR_RECOMMEND,
        payload: request //받은 건 꽃 객체 뭉텅이
    }
}

export function flowerDetail(dataToSubmit)
{
    const request = axios.get(`http://3.36.217.73:8080/api/flower/${dataToSubmit}`)
    .then(response => response.data) //reponse.data를 받아와서 request에 저장

    return {  
        type: FLOWER_DETAIL,
        payload: request //받은 건 꽃 객체 뭉텅이
    }
}

export function plantDetail(dataToSubmit)
{
    const request = axios.get(`http://3.36.217.73:8080/api/place/plant/${dataToSubmit}`)
    .then(response => response.data)

    return {
        type : PLANT_DETAIL,
        payload : request
    }
}

export function imageColorSubmit(dataToSubmit)
{
    const request = axios.post(`http://3.36.217.73:8080/api/place/flower`, dataToSubmit)
    .then(response => response.data)
    return {
        type : IMAGE_COLOR_SUBMIT,
        payload : request
    }
}

export function imageTherapySubmit(dataToSubmit)
{
    const request = axios.post(`http://3.36.217.73:8080/api/place/plant`, dataToSubmit)
    .then(response => response.data)
    return {
        type : IMAGE_THERAPY_SUBMIT,
        payload : request
    }
}

