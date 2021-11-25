import React from 'react'
import styled from 'styled-components'

const HeadBlock = styled.div`

  margin-top : 40px;
  //padding-top : 30px;
  //border : 1px solid red;
  text-align : center;
  
  font-color : #968661;
  font-weight : bold;
  font-family: 'Nanum Myeongjo', serif; 
  color : #897F65;

  // h1 {
  //   margin: 0;
  //   font-size: 15px;
  //   color: #7D5A50;
  // }
  

`

export default function Title({children}) {
    return (
        <HeadBlock>
            {children}
        </HeadBlock>
    )
}
