import React from 'react'
import styled from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md';
import { css } from 'styled-components';
import {useHistory} from 'react-router-dom';

//질문 한개
const QuestionBlock = styled.div`

    // display: flex;
 
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
   
`

const TextBlock = styled.div`

  font-family: 'Nanum Myeongjo', serif; 
  font-size: 14px;

  margin-bottom : 5px;
`

const ImoticonButton = styled.div`

  flex: 1;
  font-size: 13px;

  width: 110px;
  height: 110px;

  //background: rgba(217, 207, 182, 0.7);
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //border: 1px solid rgba(217, 207, 182, 0.7);
  //border-radius: 50px;

  outline : none;
  overflow : hidden;

  display : flex;
  justify-content : center;
  align-items : center

  font-family: 'Nanum Myeongjo', serif; 
  // color : #7D5A50;
  // font-style: normal;
  font-weight: bold;
  // font-size: 13px;
  // line-height: 15px;
  



  // &:active{

  //   background: #CFC19F;
  //   border: 1px solid #CFC19F;
    

  //    color : #F7F4E3;
  //  // color :  rgba(217, 207, 182, 0.9);


  // }

  & + & {
    margin : 10rem;
  }

`




export default function Question({id, comment, children,...rest}) {

  const history = useHistory();

    const onClickHandler = (event) =>
    {
        event.preventDefault();
        history.push(
        {
            pathname : "/option2page",
            state : {id : id}
        }
        ) //옵션 2페이지로 이동
    
    }
  
    return (
        <QuestionBlock>
            <TextBlock>{comment}</TextBlock>
            <ImoticonButton onClick= {onClickHandler}>{children}</ImoticonButton>
        </QuestionBlock>
    )
}
