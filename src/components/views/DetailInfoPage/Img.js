import React from 'react'
import styled from 'styled-components'

const ImgBox = styled.div`

    width: 170px;
    height: 250px;
    margin : 0 auto;
    object-fit : contain;

    outline : none;
    overflow : hidden;

    margin-top : 50px;
    margin-bottom : 20px;

    
`

export default function Img({children}) {
    return (
        <ImgBox>{children}</ImgBox>

    )
}
