import React from 'react'
import styled from 'styled-components'

const Block = styled.div`


    // justify-contents : center;
    // align-items : center;
    margin : 0 auto; 
    margin-top : 55px;
    // margin-top : 10px; //변경 가능성 있음

   color : #968661;




`


export default function Container({children}) {
    return (
        <Block>
            {children}
        </Block>
    )
}


