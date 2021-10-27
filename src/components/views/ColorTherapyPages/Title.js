import React from 'react'
import styled from 'styled-components'

const HeadBlock = styled.div`

  padding-top: 35px;
  padding-left: 85px;
  padding-right: 50px;
  padding-bottom : 24px;
  

  h1 {
    margin: 0;
    font-size: 15px;
    color: #7D5A50;
  }
  

`

export default function Title() {
    return (
        <HeadBlock>
            <h1>요즘 당신은 어떤가요?</h1>
        </HeadBlock>
    )
}
