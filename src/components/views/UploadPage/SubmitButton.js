import React from 'react'
import styled from 'styled-components'

const Button = styled.button`

    width: 100px;
    height: 30px;

    font-size: 13px;
    line-height: 15px;
    background : #698F7E;
    border : none;
    border-radius: 5px;
    box-sizing: border-box;

    background : ${props => props.color};
    color : #E8F0EF;
    display : flex;
    margin : 0 auto;

    
    //버튼 내 텍스트 가운데로 
    justify-content : center;
    align-items : center;

`

export default function SubmitButton({children, props, ...rest}) {
    return (
        <div style={{margin : "10px"}}>
            <Button {...rest}>{children}</Button>
        </div>
        
    )
}
