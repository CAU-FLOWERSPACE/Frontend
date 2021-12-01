import React from 'react'
import styled from 'styled-components'

const HeadBlock = styled.div`

  margin-top : 70px;
  text-align : center;
  
  color : #828282;
  font-size : 13px;

`

export default function Option1Title({children}) {
    return (
        <HeadBlock>{children}</HeadBlock>
    )
}

