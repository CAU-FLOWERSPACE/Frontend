import React from 'react'
import styled from 'styled-components'
import { Question, CheckBox} from './';


const ListBlock = styled.div`
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y: auto;
   // background : gray; 
`

export default function QuestionList({id}) {

    const optionId = id;
    console.log(optionId);

    const symp1 = ["혈액순환 부족", "저혈압", "냉증", "빈혈", "당뇨병", "불면증","고혈압", "두통"];
    const symp2 = [
        "혈액순환 부족",
        "저혈압",
        "냉증",
        "빈혈",
        "당뇨병",
        "호흡기 질환",
        "비염",
        "눈 피로감"];

    const symp3 = [
        "변비",
        "소화불량",
        "피부트러블"

    ];

    const symp4 = [
        "변비",
        "소화불량",
        "피부트러블",
        "불면증",
        "두통", 
        "어깨통증",
        "귀울림"

    ];

    const symp5 = [
        "변비",
        "소화불량",
        "피부트러블",
        "빈혈",
        "저혈압",
        "당뇨병"

    ];

    const symp6 = [
        "호흡기 질환",
        "비염",
        "눈 피로감",
        "불면증",
        "두통",
        "어깨통증",
        "귀울림",
        "고혈압",
        "천식",
        "피부병",
        "다이어트"
    ];

    const symp7 = [
        "불면증",
        "두통",
        "고혈압"

    ];

    // const symptoms = [
    //     {
    //         id : 1,
    //         symptom : [
    //             "혈액순환 부족",
    //             "저혈압",
    //             "냉증",
    //             "빈혈",
    //             "암예방",
    //             "당뇨병",
    //             "불면증",
    //             "고혈압",
    //             "두통"
    //         ]
    //     },

    //     {
    //         id : 2,
    //         symptom : [
    //             "혈액순환 부족",
    //             "저혈압",
    //             "냉증",
    //             "빈혈",
    //             "당뇨병",
    //             "호흡기 질환",
    //             "비염",
    //             "눈 피로감"
    //         ]
    //     },

    //     {
    //         id : 3,
    //         symptom : [
    //             "변비",
    //             "소화불량",
    //             "피부트러블"
    //         ]
    //     },

    //     {
    //         id : 4,
    //         symptom : [
    //             "변비",
    //             "소화불량",
    //             "피부트러블",
    //             "불면증",
    //             "두통", 
    //             "어깨통증",
    //             "귀울림"
    //         ]
    //     },

    //     {
    //         id : 5,
    //         symptom : [
    //             "변비",
    //             "소화불량",
    //             "피부트러블",
    //             "빈혈",
    //             "저혈압",
    //             "당뇨병"
                
    //         ]
    //     },

    //     {
    //         id : 6,
    //         symptom : [
    //             "호흡기 질환",
    //             "비염",
    //             "눈 피로감",
    //             "불면증",
    //             "두통",
    //             "어깨통증",
    //             "귀울림",
    //             "고혈압",
    //             "천식",
    //             "피부병",
    //             "다이어트"
    //         ]
    //     },

    //     {
    //         id : 7,
    //         symptom : [
    //             "불면증",
    //             "고혈압",
    //             "두통"
    //         ]
    //     }

    // ];

    //const option2 = symptoms.filter(symp => symp.id == optionId); //===?
   // console.log(option2);

    //const symptomList = Object.key(symptoms1).map((symp) => (<Question key = {symp} text = {symp}></Question>));
     //symptoms1.map((symp) => (<Question key = { symptoms1}))
    //const symptomList = option2.symptom.map((symp) => (<Question key = {option2.symptom} text = {option2.symptom}></Question>));//

    var symptomList;

    switch(optionId)
    {
        case 1 :
            symptomList = symp1.map((symp) => <Question key = {symp} text = {symp}></Question>); // 아래도 다 고치기, onClcik 하면!
            break;
        case 2 :
            symptomList = symp2.map((symp) => <CheckBox key = {symp} text = {symp}></CheckBox>);
            break;
        case 3 :
            symptomList = symp3.map((symp) => <CheckBox key = {symp} text = {symp}></CheckBox>);
            break;
        case 4 :
            symptomList = symp4.map((symp) => <CheckBox key = {symp} text = {symp}></CheckBox>);
            break;
        case 5 :
            symptomList = symp5.map((symp) => <CheckBox key = {symp} text = {symp}></CheckBox>);
            break;
        case 6 :
            symptomList = symp6.map((symp) => <CheckBox key = {symp} text = {symp}></CheckBox>);
            break;
        case 7 :
            symptomList = symp7.map((symp) => <CheckBox key = {symp} text = {symp}></CheckBox>);
            break;

    
    }

    return (
        <ListBlock>
            {symptomList}
        </ListBlock>
        
    );
}