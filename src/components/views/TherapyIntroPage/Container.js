import React from 'react'
import styled from 'styled-components'

const Block = styled.div`

    width: 324px;
    height: 600px;
    background: rgba(230, 221, 198, 0.4);

    margin : 0 auto; 
    padding-top : 90px; 

    display : flex;
    flex-direction : column;


    margin-top : 90px;
    margin-bottom:32px;



`


export default function Container({children}) {
    return (
        <Block>
            {children}
        </Block>
    )
}
