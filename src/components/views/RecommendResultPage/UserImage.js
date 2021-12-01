import React from 'react'
import styled from 'styled-components'

const Img = styled.div`
    width : 220px;
    height: 250px;

    outline : none;
    overflow : hidden;
   
    margin : 0 auto;

    display : flex;
    justify-content : center;
    align-items : center;

`

export default function UserImage({children}) {
    return (
        <Img>{children}</Img>
    )
}
