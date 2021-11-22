import React from 'react'
import styled from 'styled-components'

const Image = styled.div`

    width : 230px;
    height: 230px;

    border : 1px solid green;

    outline : none;
    position : relative;
    overflow : hidden;
   
   margin : 0 auto;

    display : flex;
    justify-content : center;
    align-items : center;


`
export default function Img({children}) {
    return (
        <Image>{children}</Image>
    )
}
