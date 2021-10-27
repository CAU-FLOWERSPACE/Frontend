import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {Template, Title, QuestionList} from './';


const GlobalStyle = createGlobalStyle`

    body {
        background : #f7f4e3;
    }

`


function Option1Page() {


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
            <GlobalStyle/>
            <Template>
                <Title/>
                <QuestionList/>
            </Template>
            
        </>
    );
}

export default withRouter(Option1Page)
