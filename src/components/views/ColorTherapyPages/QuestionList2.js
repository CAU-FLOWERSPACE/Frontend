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

    const symp1 = [
        "혈액순환이 부족해요.", 
        "저혈압이 있어요.", 
        "냉증 체질이예요.", 
        "빈혈이 잦아요.", 
        "당뇨병을 앓고 있어요.", 
        "불면증이 있어요.",
        "고혈압이 있어요.", 
        "두통이 잦아요."];
    const symp2 = [
        "혈액순환 부족해요.",
        "저혈압이 있어요.",
        "냉증이 있어요.",
        "빈혈이 잦아요.",
        "당뇨병을 앓고 있어요.",
        "호흡기 질환이 있어요.",
        "비염을 달고 살아요.",
        "눈에 피로가 자주 와요."];

    const symp3 = [
        "변비가 있어요.",
        "소화불량이 잦아요.",
        "피부트러블이 잦아요."

    ];

    const symp4 = [
        "변비가 있어요.",
        "소화불량이 잦아요.",
        "불면증을 앓아요.",
        "두통이 있어요.", 
        "피부트러블이 잦아요.",
        "어깨통증을 겪고 있어요.",
        "귀울림이 가끔 있어요."

    ];

    const symp5 = [
        "변비가 있어요.",
        "소화불량이 잦아요.",
        "피부트러블이 잦아요.",
        "빈혈이 있어요.",
        "저혈압 환자예요.",
        "당뇨병을 앓고 있어요."

    ];

    const symp6 = [
        "호흡기 질환 환자예요.",
        "비염을 달고 살아요.",
        "눈 피로감이 자주 와요.",
        "불면증이 있어요.",
        "두통이 잦아요.",
        "어깨통증이 가끔 있어요.",
        "귀울림이 느껴져요.",
        "고혈압 환자예요.",
        "천식을 앓고 있어요.",
        "피부병이 있어요.",
        "다이어트를 하고 있어요."
    ];

    const symp7 = [
        "불면증을 앓고 있어요.",
        "두통이 잦아요.",
        "고혈압 환자예요."

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
            symptomList = symp1.map((symp) => <CheckBox key = {symp} text = {symp}></CheckBox>); // 아래도 다 고치기, onClcik 하면!
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