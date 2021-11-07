import React from 'react'
import styled from 'styled-components'

const Block = styled.div`

    width: 324px;
    height: 600px;

    position : relative; //하위 컴포넌트들 배치 위해서 
    background: rgba(230, 221, 198, 0.4);

    margin : 0 auto; 

    margin-top : 90px; //컨테이너의 위치
    margin-bottom:32px;


`


export default function Container({children}) {
    return (
        <Block>
            {children}
        </Block>
    )
}
