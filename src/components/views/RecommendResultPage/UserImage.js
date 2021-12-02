import React from 'react'
import styled from 'styled-components'

const Img = styled.div`
    width : 180px;
    height: 200px;

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
