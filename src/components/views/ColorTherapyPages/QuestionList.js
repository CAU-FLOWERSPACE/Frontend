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
            comment : ' ① 무기력함',
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
            comment : '② 슬픔, 우울',
            img : "img/sad.PNG",
            color : [
                "red",
                "orange",
                "green"
            ]
        },

        {
            id : 3,
            comment : '③ 자신감 하락',
            img : "img/proud.PNG",
            color : [
                "yellow",
                "pink"
            ]
        },

        {
            id : 4,
            comment : '④ 집중력 부족',
            img : "img/study.PNG",
            color : [
                "yellow",
                "purple"
            ]
        },

        {
            id : 5,
            comment : '⑤ 식욕 저하',
            img : "img/eat.PNG",
            color : [
                "yellow",
                "orange"
            ]
        },

        {
            id : 6,
            comment : '⑥ 스트레스',
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
            comment : '⑦ 외로움',
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