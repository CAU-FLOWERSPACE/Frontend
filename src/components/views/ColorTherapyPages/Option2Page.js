import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import {Template, Title, QuestionList2} from './';

const Container = styled.div`
    background : #F7F4E3;

    position : absolute;
    border: none;
    outline : none;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

`

export default function Option2Page() {

    const location = useLocation();
    const optionId = location.state.id; //나중에 리덕스로 구현해보자
    console.log(optionId);

    // const color = [
    //     {
    //         id : 1,
    //         color : "red",
    //         symptoms : [
    //             "혈액순환 부족",
    //             "기운 없음",
    //             "저혈압",
    //             "냉증"
    //         ]
    //     },
    //     {
    //         id : 2,
    //         color : "yellow",
    //         symptoms : [
    //             "변비",
    //             "소화불량",
    //             "피부트러블"
    //         ]
    //     },
    //     {
    //         id : 3,
    //         color : "orange",
    //         symptoms : [
    //             "빈혈",
    //             "암예방",
    //             "우울증",
    //             "당뇨병"
    //         ]
    //     },
    //     {
    //         id : 4,
    //         color : "blue",
    //         symptoms : [
    //             "불면증",
    //             "고혈압",
    //             "두통"
    //         ]
    //     },
    //     {
    //         id : 5,
    //         color : "green",
    //         symptoms : [
    //             "호흡기 질환",
    //             "심장",
    //             "비염",
    //             "눈의 피로감"
    //         ]
    //     },
    //     {
    //         id : 6,
    //         color : "purple",
    //         symptoms : [
    //             "정신피로",
    //             "어깨통증",
    //             "귀울림"
    //         ]
    //     },
    //     {
    //         id : 7,
    //         color : "red",
    //         symptoms : [
    //             "천식",
    //             "피부병",
    //             "다이어트"
    //         ]
    //     }
    // ];


    return (
    <>
        <Container/>
            <Template>
                <Title> 몸 상태가 이렇지는 않나요? </Title>
                <QuestionList2 id = {optionId}/>
            </Template>

        
    </>

    )
}
