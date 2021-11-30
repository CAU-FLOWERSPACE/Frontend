import React from 'react'
import styled from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md';
import { css } from 'styled-components';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { colorRecommend } from '../../../_actions/user_action';

const QuestionBlock = styled.div`

   
`

const TextButton = styled.button`

  margin : 12px;
  font-size: 13px;

  width: 100px;
  height: 30px;

  background-color: #AEC4BA;
  border : none;
  border-radius: 5px;

  outline : none;

  color : #FFFFFF;
  font-style: normal;
  font-size: 13px;
  line-height: 15px;

  &:active{
    background-color : #698F7E;
  }

  &:hover{
    background-color : #698F7E;
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
            <TextButton onClick= {onClickHandler}>{text}</TextButton>

    )
}
