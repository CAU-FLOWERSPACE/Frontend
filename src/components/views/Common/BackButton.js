import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const Button = styled.button`

    width: 80px;
    height: 25px;

    font-size: 12px;
    line-height: 15px;
    background : #E5E5E5;
    border : none;
    border-radius: 5px;
    box-sizing: border-box;

    color : #828282;
    display : flex;
    margin : 0 auto;
    margin-bottom : 20px;

    
    //버튼 내 텍스트 가운데로 
    justify-content : center;
    align-items : center;

`

export default function BackButton({children, ...rest}) {

    const history = useHistory();

    const onClickHandler = (event) =>
    {
        history.goBack();
    }
    return (
        <Button {...rest} onClick = {onClickHandler}>{children}</Button>
    )
}
