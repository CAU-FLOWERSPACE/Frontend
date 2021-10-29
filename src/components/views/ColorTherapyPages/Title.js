import React from 'react'
import styled from 'styled-components'

const HeadBlock = styled.div`

  padding-top: 45px;
  padding-left: 65px;
  padding-right: 50px;
  padding-bottom : 20px;
  
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
