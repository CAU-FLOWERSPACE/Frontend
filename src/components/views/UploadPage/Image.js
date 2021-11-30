import React from 'react'
import styled from 'styled-components'


const ImgBox = styled.div`
    width : 375px;
    height : 45vh;
    background-color : #DDDDDD;

    color : #828282;
    
    overflow : hidden;

    display : flex;
    justify-content : center;
    align-items : center;
    
`

export default function Image({children}) {
    return (
        <ImgBox>{children}</ImgBox>
    )
}
