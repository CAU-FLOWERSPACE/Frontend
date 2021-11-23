import React from 'react'
import styled from 'styled-components'


const ImgBox = styled.div`
    width : 300px;
    height : 400px;
    background-color : #C4C4C4;

    color : grey;
    
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
