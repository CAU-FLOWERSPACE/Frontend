import React from 'react'
import styled from 'styled-components'

const Image = styled.div`

    width : 150px;
    height: 150px;

    outline : none;
    overflow : hidden;
   
    margin : 0 auto;

    margin-top: 40px;

    display : flex;
    justify-content : center;
    align-items : center;


`
export default function Img({children}) {
    return (
        <Image>{children}</Image>
    )
}
