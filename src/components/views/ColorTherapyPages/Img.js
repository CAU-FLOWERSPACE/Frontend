import React from 'react'
import styled from 'styled-components'

const Image = styled.div`

    width : 250px;
    height: 250px;

    outline : none;
    //position : relative;
    overflow : hidden;
    //border : 1px solid red;
   
   margin : 0 auto;
   margin-top : 60px;

    display : flex;
    justify-content : center;
    align-items : center;


`
export default function Img({children}) {
    return (
        <Image>{children}</Image>
    )
}
