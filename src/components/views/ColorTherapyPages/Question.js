import React from 'react'
import styled from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md';
import { css } from 'styled-components';
import {useHistory} from 'react-router-dom';

//질문 한개
const QuestionBlock = styled.div`

    display: inline-block;
    object-fit : cover;
    //border : 1px solid green;
  
 
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    //display : flex;
    justify-content : center;
    margin : 10px;
   
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
  width : 123px;
  height : 123px;

  border : 5px solid rgba(217, 207, 182, 0.5);
  
  outline : none;
  //overflow : hidden;

  display : inline-block;
  justify-content : center;
  align-items : center;
  
  margin : 2px;
  

`




export default function Question({id, comment, children,...rest}) {

  const history = useHistory();

  let data = {
    id : id,
    comment : comment
  }


    const onClickHandler = (event) =>
    {
        event.preventDefault();
        history.push(
        {
            pathname : "/option2page",
            state : {data : data} // 
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
