import React from 'react'
import styled from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md';
import { css } from 'styled-components';

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
  border: 1px solid #D7B19D;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

   ${props =>
    props.done &&
    css`
      border: 1px solid #402218;
      color: #402218;
    `}
`

const Text = styled.div`
  flex: 1;
  font-size: 13px;
  color: #B4846C;
  ${props =>
    props.done &&
    css`
      color: #402218;
    `}
`;

export default function Question({id, done, text}) {
    return (
        <QuestionBlock>
            <CheckCircle done = {done}>{done &&<MdDone />}</CheckCircle>
            <Text done = {done}>{text}</Text>
        </QuestionBlock>
    )
}
