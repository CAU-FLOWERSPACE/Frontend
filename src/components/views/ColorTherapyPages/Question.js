import React from 'react'
import styled from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md';
import { css } from 'styled-components';
import {useHistory} from 'react-router-dom';


const TextButton = styled.button`

  margin : 5px;
  font-size: 13px;

  width: 80px;
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
