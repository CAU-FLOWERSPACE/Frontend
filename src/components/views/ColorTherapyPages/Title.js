import React from 'react'
import styled from 'styled-components'

const HeadBlock = styled.div`

  padding-top: 35px;
  padding-left: 85px;
  padding-right: 50px;
  padding-bottom : 24px;
  
  font-family: 'Nanum Myeongjo', serif; 

  h1 {
    margin: 0;
    font-size: 15px;
    color: #7D5A50;
  }
  

`

export default function Title({children}) {
    return (
        <HeadBlock>
            <h1>{children}</h1>
        </HeadBlock>
    )
}
