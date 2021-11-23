import React from 'react'
import styled from 'styled-components'
import './Upload.css';

const Button = styled.button`
    width: 270px;
    height: 30px;

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

    background: rgba(217, 207, 182, 0.4);
    border: 0.1px solid #D9CFB6;
    border-radius: 5px;

    //color : #897F65;
    color : rgba(137, 127, 101, 0.7);
    
    display : flex;
    margin : 0 auto;
    margin : 10px;
    
    //버튼 내 텍스트 가운데로 
    justify-content : center;
    align-items : center;

`

export default function SelectButton({children, id, choice, ...rest}) {

    console.log(choice);


    return (
        <Button choice = {choice} className = {id === choice ? "choice" : "nchoice" } {...rest}>{children}</Button>
    )
}
 
    