import React from 'react'
import styled from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md';
import { css } from 'styled-components';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { colorRecommend } from '../../../_actions/user_action';

const QuestionBlock = styled.div`

    display: inline;
    justify-content : center;
    align-items: center;

    padding-top: 12px;
    padding-bottom: 12px;
   
`

const TextButton = styled.button`

  //flex: 1;
  margin : 10px;
  font-size: 13px;

  width: 100px;
  height: 30px;

  background: rgba(217, 207, 182, 0.7);
  border: 3px solid #CFC19F;
  border-radius: 50px;

  outline : none;

  font-family: 'Nanum Myeongjo', serif; 
  color : #7D5A50;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;

  display : inline-block;

  &:active{

    background: #CFC19F;
    border: 1px solid #CFC19F;
    

     color : #F7F4E3;
   // color :  rgba(217, 207, 182, 0.9);


  }

`


export default function Question2({text, color}) {

    
    const dispatch = useDispatch();
    const history = useHistory();

    const onClickHandler = (event) => //여기다가 백에게 보내는 그거 클릭 
    {
        event.preventDefault();
        
        console.log(color);

        // let body = {
        //     color : color
        // }
        
        dispatch(colorRecommend(color))
        .then(response => {
             //백에게 받은 데이터를 다음 페이지에 넘겨주는 아래의 로직

            console.log(` dispatch해서 받아오기 성공 : ${response.payload}`) //
            history.push(
            {
                pathname : "/result",
                state : { response : response.payload } //뭉텅이를 다음 페이지에 전달
            }
           )
        })
    
    }

    return (
        <QuestionBlock>
            <TextButton onClick= {onClickHandler}>{text}</TextButton>
        </QuestionBlock>
    )
}
