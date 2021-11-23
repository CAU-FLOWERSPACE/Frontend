import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 150px;
    height: 40px;

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;

    //background: #D9CFB6;
    background : rgba(217, 207, 182, 0.7);
    border: 3px solid #CFC19F;
    border-radius: 50px;
    box-sizing: border-box;

    color : #897F65;

    display : flex;
    margin : 0 auto;
  
    
    //버튼 내 텍스트 가운데로 
    justify-content : center;
    align-items : center;
  
    &:active{
        

    }



`

export default function SubmitButton({children, ...rest}) {
    return (
        <div style={{margin : "10px"}}>
            <Button {...rest}>{children}</Button>
        </div>
        
    )
}
