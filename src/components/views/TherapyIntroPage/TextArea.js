import React from 'react'
import styled from 'styled-components'

const Block = styled.div`

    //border : 1px solid red; //

    padding : 40px;

    //display : flex; 이거 하지말기
    justify-content : center;
    align-items : center;
    margin : 0 auto;

    font-family: 'Nanum Myeongjo', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    text-align : center;

    color : #897F65;

`


export default function TextArea({children}) {
    return (
        <Block>
            {children}
        </Block>
    )
}
