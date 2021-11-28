import React from 'react'
import styled from 'styled-components'

const ImgBox = styled.div`

    width: 220px;
    height: 250px;

    object-fit : contain;
    // background-size : 100%;
    
    //border : 1px solid red;
    border: 1px solid #CFC19F;
    margin : 0 auto;

    outline : none;
    overflow : hidden;
    display : flex;
    justify-content : center;
    align-items : center;

    
`

export default function Img({children}) {
    return (
        <ImgBox >{children}</ImgBox>
    )
}
