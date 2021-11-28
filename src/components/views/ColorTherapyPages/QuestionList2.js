import React from 'react'
import styled from 'styled-components'
import { Question, Question2, CheckBox, RadioButton} from './';




const ListBlock = styled.div`

    border : 1px solid red;
    flex-wrap : wrap;

    display : flex;
    //justify-content : space-around;
    justify-content : center;
    
`

export default function QuestionList({id}) {

    const optionId = id;
    console.log(optionId);

    const symp1 = [
        {keyword : "혈액순환 부족", value : "RED"}, 
        {keyword : "저혈압", value : "RED"}, 
        {keyword : "냉증", value : "RED"}, 
        {keyword : "빈혈", value : "ORANGE"}, 
        {keyword : "당뇨병", value : "ORANGE"}, 
        {keyword : "불면증", value :"BLUE"},
        {keyword : "고혈압", value :"BLUE"}, 
        {keyword : "두통", value :"BLUE"}
    ];
    const symp2 = [
        {keyword : "혈액순환 부족", value : "RED"}, 
        {keyword : "저혈압", value : "RED"}, 
        {keyword : "냉증", value : "RED"}, 
        {keyword : "빈혈", value : "RED"}, 
        {keyword : "당뇨병", value : "ORANGE"}, 
        {keyword : "호흡기 질환", value : "GREEN"},
        {keyword : "비염", value : "GREEN"},
        {keyword : "눈 피로감", value : "GREEN"}
    ];

    const symp3 = [
        {keyword : "변비", value : "YELLOW"},
        {keyword : "소화불량", value : "YELLOW"},
        {keyword : "피부트러블", value : "YELLOW"}

    ];

    const symp4 = [
        {keyword : "변비", value : "YELLOW"},
        {keyword : "소화불량", value : "YELLOW"},
        {keyword : "피부트러블", value : "YELLOW"},
        {keyword : "불면증", value :"BLUE"},
        {keyword : "고혈압", value :"BLUE"}, 
        {keyword : "두통", value :"BLUE"},
        {keyword : "어깨통증", value : "PURPLE"},
        {keyword : "정신피로", value : "PURPLE"},
        {keyword : "귀울림", value : "PURPLE"}

    ];

    const symp5 = [
        {keyword : "변비", value : "YELLOW"},
        {keyword : "소화불량", value : "YELLOW"},
        {keyword : "피부트러블", value : "YELLOW"},
        {keyword : "빈혈", value : "ORANGE"}

    ];

    const symp6 = [
        {keyword : "호흡기 질환", value : "GREEN"},
        {keyword : "비염", value : "GREEN"},
        {keyword : "눈 피로감", value : "GREEN"},

    ];

    const symp7 = [
        {keyword : "호흡기 질환", value : "GREEN"},
        {keyword : "비염", value : "GREEN"},
        {keyword : "눈 피로감", value : "GREEN"},
        {keyword : "불면증", value :"BLUE"},
        {keyword : "고혈압", value :"BLUE"}, 
        {keyword : "두통", value :"BLUE"},
        {keyword : "귀울림", value : "PURPLE"},
        {keyword : "어깨통증", value : "PURPLE"},
        {keyword : "정신피로", value : "PURPLE"},
        {keyword : "천식", value : "WHITE"},
        {keyword : "피부병", value : "WHITE"},
        {keyword : "다이어트", value : "WHITE"}


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

   
    var symptomList;

    switch(optionId)
    {
        case 1 :
            // symptomList = symp1.map((symp) => <RadioButton key = {symp.keyword} text = {symp.keyword} val = {symp.value}></RadioButton>); // 아래도 다 고치기, onClcik 하면!
            symptomList = symp1.map((symp) => <Question2 key = {symp.keyword} text={symp.keyword} color = {symp.value}></Question2>)
            break;
        case 2 :
            symptomList = symp2.map((symp) => <Question2 key = {symp.keyword} text={symp.keyword} color = {symp.value}></Question2>)
            break;
        case 3 :
            symptomList = symp3.map((symp) => <Question2 key = {symp.keyword} text={symp.keyword} color = {symp.value}></Question2>)
            break;
        case 4 :
            symptomList = symp4.map((symp) => <Question2 key = {symp.keyword} text={symp.keyword} color = {symp.value}></Question2>)
            break;
        case 5 :
            symptomList = symp5.map((symp) => <Question2 key = {symp.keyword} text={symp.keyword} color = {symp.value}></Question2>)
            break;
        case 6 :
            symptomList = symp6.map((symp) => <Question2 key = {symp.keyword} text={symp.keyword} color = {symp.value}></Question2>)
            break;
        case 7 :
            symptomList = symp7.map((symp) => <Question2 key = {symp.keyword} text={symp.keyword} color = {symp.value}></Question2>)
            break;
        default :
        

    
    }

    return (
        <ListBlock>
            {symptomList}
        </ListBlock>
        
    );
}