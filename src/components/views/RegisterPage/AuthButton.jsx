import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

//임시 속성
    //position : absolute;
    display : inline;
    right : 10px;
    width: 210px;
    height: 30px;
    float :right;
    text-align : center;
   

    background: #D9CFB6;
    border: 1px solid #D9CFB6;
    box-sizing: border-box;
    border-radius: 10px;

    border: none;

    font-family: 'Nanum Myeongjo', serif; 
    color : #B4846C;s
    font-size : 7px;
   

    margin : 0 auto;
    margin-bottom : 10px;



`

export default function AuthButton({...rest}) {
    return <Button {...rest}>중복확인</Button>
}
