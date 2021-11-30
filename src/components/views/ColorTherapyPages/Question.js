import React from 'react'
import styled from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md';
import { css } from 'styled-components';
import {useHistory} from 'react-router-dom';


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
            <TextButton onClick= {onClickHandler}>{comment}</TextButton>

    )
}
