import React from 'react'
import styled from 'styled-components'

const ImgBox = styled.div`

    width: 225px;
    height: 317px;

    //object-fit : cover;
    // background-size : 100%;
    
    border : 1px solid red;
    margin : 0 auto;

    outline : none;
    overflow : hidden;
    display : flex;
    justify-content : center;
    align-items : center;

    
`

export default function Img({children}) {
    return (
        <ImgBox>{children}</ImgBox>

    )
}
