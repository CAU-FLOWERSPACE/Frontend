import React from 'react'
import styled from "styled-components";
import "../../../MainPage.css";

const Button = styled.button`

    // position: absolute;
    width: 150px;
    height: 40px;
    // //left: 88px;
    // top : ${props=> props.top};

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

    background: #D9CFB6;
    border: 1px solid #D9CFB6;
    box-shadow: 0px 4px 4px rgba(150, 134, 97, 0.5);
    border-radius: 50px;

    color : #897F65;

    display : flex;
    margin : 0 auto;
    align-items : center;
    justify-content : center;
    //float: center;

    &:active{
        background: #CFC19F;
        font-weight : normal;
    
        // color : #F7F4E3;
        //color :rgba(230, 221, 198, 0.9);
        color : #FFFBE1;

    }

`

export default function StartButton({children}) {
    return (
        <div className = "buttonarea">
            <Button>{children}</Button>
       </div>
    )
}

