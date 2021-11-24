import React from 'react'
import styled from 'styled-components'
import Question from './Question';
import { useHistory } from 'react-router';

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
            comment : '활력',
            img : "img/idle.PNG",
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
            img : "img/sad.PNG",
            color : [
                "red",
                "orange",
                "green"
            ]
        },

        {
            id : 3,
            comment : '자신감',
            img : "img/proud.PNG",
            color : [
                "yellow",
                "pink"
            ]
        },

        {
            id : 4,
            comment : '집중력',
            img : "img/study.PNG",
            color : [
                "yellow",
                "purple"
            ]
        },

        {
            id : 5,
            comment : '식욕',
            img : "img/eat.PNG",
            color : [
                "yellow",
                "orange"
            ]
        },

        {
            id : 6,
            comment : '안정',
            img : "img/stress2.PNG",
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
            img : "img/lonely.PNG",
            color : [
                "green",
                "pink"
            ]
        }
    ];




    const optionList = options.map((option) => (<Question key = {option.id} id ={option.id} comment = {option.comment}>
        <img src = {option.img} />
    </Question>));

    return (
        <ListBlock>
            {optionList}
        </ListBlock>
    );
}