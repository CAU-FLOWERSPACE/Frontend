import React from 'react'
import styled from 'styled-components'


const ImgBox = styled.div`

width: 130px;
height: 117px;
//border : 1px solid red;

right : 10px;

outline : none;
overflow : hidden;
display : flex;
justify-content : center;
align-items : center;

`;

export default function Img({children}) {
    return (
        <ImgBox>
            {children}
        </ImgBox>
    )
}
