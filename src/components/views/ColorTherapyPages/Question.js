import React from 'react'
import styled from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md';
import { css } from 'styled-components';
import {useHistory} from 'react-router-dom';

//질문 한개
const QuestionBlock = styled.div`

   display : flex;
   flex-direction : column;
   
`

const TextBlock = styled.div`

  //font-family: 'Nanum Myeongjo', serif; 
  font-size: 16px;
  //font-weight : bold;
  color : #83744F;

  margin-bottom : 5px;
`

const ImoticonButton = styled.div`

  //flex: 1;
  font-size: 13px;
  width : 80px;
  height : 80px;

  border-radius : 15px;

  border : 5px solid rgba(217, 207, 182, 0.5);
  
  outline : none;
  //overflow : hidden;

  display : inline-block;
  justify-content : center;
  align-items : center;
  
  margin : 5px;
  

`




export default function Question({id, comment, children,...rest}) {

  const history = useHistory();

  let data2 = {
    id : id,
    comment : comment
  }


    const onClickHandler = (event) =>
    {
        event.preventDefault();
        history.push(
        {
            pathname : "/option2page",
            state : {data3 : data2} // 
        }
        ) //옵션 2페이지로 이동
    
    }
  
    return (
        <QuestionBlock>
            <TextBlock>{id}. {comment}</TextBlock>
            <ImoticonButton onClick= {onClickHandler}>{children}</ImoticonButton>
        </QuestionBlock>
    )
}
