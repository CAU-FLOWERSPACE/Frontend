import React from 'react'
import styled from 'styled-components'
import Question from './Question';

const ListBlock = styled.div`
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y: auto;
   // background : gray; 
`

export default function QuestionList() {



    const options = [
        {
            id : 1,
            comment : '무기력하고 금방 피로가 찾아와요.',
            color : [
                "red",
                "orange",
                "blue",
                "green",
                "purple"
            ]
        },

        {
            id : 2,
            comment : '슬픔과 우울감에 젖어있어요.',
            color : [
                "red",
                "orange",
                "green"
            ]
        },

        {
            id : 3,
            comment : '자존감이 부족하다고 느껴요.',
            color : [
                "yellow",
                "pink"
            ]
        },

        {
            id : 4,
            comment : '집중력이나 창의력이 부족한 것 같아요.',
            color : [
                "yellow",
                "purple"
            ]
        },

        {
            id : 5,
            comment : '입맛이 별로 없어요.',
            color : [
                "yellow",
                "orange"
            ]
        },

        {
            id : 6,
            comment : '스트레스와 불안감에 시달려요.',
            color : [
                "green",
                "blue",
                "purple",
                "white"
            ]
        },

        {
            id : 7,
            comment : '외로운 감정이 자주 들곤 해요.',
            color : [
                "green",
                "pink"
            ]
        }
    ];


    const optionList = options.map((option) => (<Question key = {option.id} text = {option.comment} id ={option.id}></Question>));

    return (
        <ListBlock>
            {optionList}
        </ListBlock>
    );
}