import React from 'react'
import styled from 'styled-components'

const Block = styled.div`


    height: 600px;
   // border : 1px solid red;

    margin : 0 auto; 

    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;

    margin-top : 90px;
    margin-bottom:32px;
    overflow-y : auto;


`

export default function Container({children}) {
    return (
        <Block>
            {children}
        </Block>

    )
}
