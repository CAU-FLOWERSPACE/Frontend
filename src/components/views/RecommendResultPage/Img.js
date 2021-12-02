import React from 'react'
import styled from 'styled-components'

const ImgBox = styled.div`

    width: 80px;
    height: 100px;

    object-fit : contain;
    
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
