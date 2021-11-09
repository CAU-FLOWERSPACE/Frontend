import React from 'react'
import styled from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md';
import { css } from 'styled-components';
import {useHistory} from 'react-router-dom';

//질문 한개
const QuestionBlock = styled.div`

    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
   
`
const TextButton = styled.button`

  flex: 1;
  font-size: 13px;

  width: 279px;
  height: 30px;

  background: rgba(217, 207, 182, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(217, 207, 182, 0.7);
  border-radius: 50px;

  outline : none;

  font-family: 'Nanum Myeongjo', serif; 
  color : #7D5A50;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;


  &:active{

    background: #CFC19F;
    border: 1px solid #CFC19F;
    

     color : #F7F4E3;
   // color :  rgba(217, 207, 182, 0.9);


  }

`


export default function Question({id, text}) {

  const history = useHistory();

  const onClickHandler = (event) =>
  {
    event.preventDefault();
    console.log("hi");
    history.push(
      {
        pathname : "/option2page",
        state : {id : id}
      }
    ) //옵션 2페이지로
    
  }

    return (
        <QuestionBlock>
            <TextButton onClick = {onClickHandler}>{text}</TextButton>
        </QuestionBlock>
    )
}
