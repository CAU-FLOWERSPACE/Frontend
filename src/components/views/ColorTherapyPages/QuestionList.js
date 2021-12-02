import React from 'react'
import styled from 'styled-components'
import Question from './Question';
import { useHistory } from 'react-router';

const ListBlock = styled.div`

    // margin : 30px;
    // flex-wrap : wrap;

    // display : flex;
    // justify-content : flex-start;
    // margin-left : auto;
    // margin-right : auto;

    margin : 20px;
    flex-wrap : wrap;

    display : flex;
    justify-content : center;
  
`

export default function QuestionList() {



    const options = [
        {
            id : 1,
            comment : '활력',
            img : "img/condition/fairness.png",
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
            comment : '행복',
            img : "img/condition/happiness.png",
            color : [
                "red",
                "orange",
                "green"
            ]
        },

        {
            id : 3,
            comment : '자신감',
            img : "img/condition/proud.png",
            color : [
                "yellow",
                "pink"
            ]
        },

        {
            id : 4,
            comment : '집중력',
            img : "img/condition/concentration.png",
            color : [
                "yellow",
                "purple"
            ]
        },

        {
            id : 5,
            comment : '식욕',
            img : "img/condition/eating.png",
            color : [
                "yellow",
                "orange"
            ]
        },

        {
            id : 6,
            comment : '안정',
            img : "img/condition/stress.png",
            color : [
                "green",
                "blue",
                "purple",
                "white"
            ]
        },

        {
            id : 7,
            comment : '애정',
            img : "img/condition/alone.png",
            color : [
                "green",
                "pink"
            ]
        }
    ];




    const optionList = options.map((option) => (<Question key = {option.id} id ={option.id} comment = {option.comment}/>));

    return (
        <ListBlock>
            {optionList}
        </ListBlock>
    );
}