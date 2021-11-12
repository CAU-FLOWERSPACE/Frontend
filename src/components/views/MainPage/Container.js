import React from 'react'
import styled from 'styled-components'

const Block = styled.div`

    top : 65px; //상단 로고 때문에


    position : relative; //하위 컴포넌트들 배치 위해서 

    // justify-contents : center;
    // align-items : center;
    margin : 0 auto; 
    padding : 10px;
    margin-top : 50px; //변경 가능성 있음

   color : #968661;




`


export default function Container({children}) {
    return (
        <Block>
            {children}
        </Block>
    )
}


