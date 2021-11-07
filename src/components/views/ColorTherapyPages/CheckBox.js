import React, {useState} from 'react'
import styled, {css} from 'styled-components';
import { MdDone} from 'react-icons/md';

const QuestionBlock = styled.div`

    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
   
`

const CheckCircle = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 16px;
  border: 1px solid #D9CFB6;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

   ${props =>
    props.checker &&
    css`
      border: 2px solid #CAB88D;
      color: #968661;
    `}

    .done {
        color : #968661;
        width : 18px;
    }
`

const Text = styled.div`
  flex: 1;
  font-family: 'Nanum Myeongjo', serif; 
  font-size: 14px;
  font-weight : bold;
  color: #7D5A50;
  //color : 7E714B;

`;


export default function CheckBox({id, text}) { //원 + 텍스트

    const [checker, setChecker] = useState(false);
    const onToggle = () =>
    {
        setChecker(!checker);
    }

    return (
        <QuestionBlock>
            <CheckCircle  onClick = {onToggle}>{checker && <MdDone className = "done" size />}</CheckCircle> 
            <Text>{text}</Text>
        </QuestionBlock>
    )
}
