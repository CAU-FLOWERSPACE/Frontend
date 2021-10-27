// //hoc는 어떤 컴포넌트를 받은 뒤 새로운 컴포넌트를 리턴한다, 
// //안에 하위 컴포넌트를 넣어야한다.
// //백엔드에 리케스트 날려서 백엔드에게 상태정보 받아온다(자격이 있는지에 관한 정보),
// import { Axios } from 'axios';
// import { responseInterceptor } from 'http-proxy-middleware';
// import React, {useEffect} from 'react';
// import { useDispatch } from 'react-redux';
// import {auth } from '../_actions/user_action'; //액션을 가져옴

// export default function(SpecificComponent, option, adminRoute = null) //auth는 함수다
// {
    
//     //null => 아무나 출입가능
//     //true => 로그인한 유저만 출입가능
//     //false => 로그인한 유저는 출입불가
//     //adminRoute는 adimin에 관한값, 안쓰면 default로 0임, 일단신경쓰지마!
//     function AuthenticationCheck(props) //막아주는 분기처리해야함
//     {
//         const dispatch = useDispatch();

//         useEffect(()=>{

//             dispatch(auth())// 리퀘스트 우회하여 날리기
//             .then(response=> {
//                 console.log(response) //콘솔로 찍어보기 

//                 // if(!response.payload.isAuth)//로그인 안 한 상태면
//                 // {
//                 //     if(option == true) //그런데 로그인해야만 들어갈수있는 페이지를 접근하면
//                 //     {
//                 //         props.history.push('/login') //로그인하도록 로그인페이지로 보내버린다

//                 //     }

//                 // }

//                 // else //로그인한 상태면
//                 // {
//                 //     // if(adminRoute && !response.payload.isAdmin) //로그인하긴 햇는데 어드민은 아니라면 
//                 //     // {
//                 //     //     props.history.push('/')//랜딩페이지로 보낸다
//                 //     // }

//                 //     // else(option == false) // 로그인한 유저가 출입불가능한 페이지(로그인이나 회원가입 페이지)가려고 하면
//                 //     // {
//                 //     //     props.history.push('/')//랜딩페이지로 보내버림
//                 //     // }
//                 // }
//             })
          
//         })

//         return ( //새로운 컴포넌트 리턴
//             <SpecificComponent />
//         )
//     }

//     return AuthenticationCheck
// }