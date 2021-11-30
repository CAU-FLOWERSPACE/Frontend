import React from 'react'
import styled from 'styled-components'
import { Question, Question2, CheckBox, RadioButton} from './';




const ListBlock = styled.div`

    margin : 20px;
    flex-wrap : wrap;

    display : flex;
    justify-content : center;
    
`

export default function QuestionList({id}) {

    const optionId = id;
    console.log(optionId);

    const symp1 = [
        {keyword : "두통", value :"BLUE"},
        {keyword : "혈액순환 부족", value : "RED"}, 
        {keyword : "불면증", value :"BLUE"},
        {keyword : "빈혈", value : "ORANGE"}, 
        {keyword : "저혈압", value : "RED"}, 
        {keyword : "냉증", value : "RED"}, 
        {keyword : "당뇨병", value : "ORANGE"}, 
        {keyword : "고혈압", value :"BLUE"}
    ];
    const symp2 = [
        {keyword : "호흡기 질환", value : "GREEN"},
        {keyword : "냉증", value : "RED"},
        {keyword : "혈액순환 부족", value : "RED"}, 
        {keyword : "저혈압", value : "RED"},
        {keyword : "빈혈", value : "RED"}, 
        {keyword : "비염", value : "GREEN"},
        {keyword : "눈 피로감", value : "GREEN"},
        {keyword : "당뇨병", value : "ORANGE"}
    ];

    const symp3 = [
        {keyword : "피부트러블", value : "YELLOW"},
        {keyword : "변비", value : "YELLOW"},
        {keyword : "소화불량", value : "YELLOW"}

    ];

    const symp4 = [
        
        {keyword : "정신피로", value : "PURPLE"},
        {keyword : "변비", value : "YELLOW"},
        {keyword : "두통", value :"BLUE"},
        {keyword : "소화불량", value : "YELLOW"},
        {keyword : "피부트러블", value : "YELLOW"},
        {keyword : "불면증", value :"BLUE"},
        {keyword : "고혈압", value :"BLUE"}, 
        {keyword : "어깨통증", value : "PURPLE"},
        {keyword : "귀울림", value : "PURPLE"}

    ];

    const symp5 = [
        {keyword : "빈혈", value : "ORANGE"},
        {keyword : "변비", value : "YELLOW"},
        {keyword : "소화불량", value : "YELLOW"},
        {keyword : "피부트러블", value : "YELLOW"}
    ];

    const symp6 = [
        {keyword : "호흡기 질환", value : "GREEN"},
        {keyword : "비염", value : "GREEN"},
        {keyword : "눈 피로감", value : "GREEN"}

    ];

    const symp7 = [
        {keyword : "다이어트", value : "WHITE"},
        {keyword : "정신피로", value : "PURPLE"},
        {keyword : "불면증", value :"BLUE"},
        {keyword : "두통", value :"BLUE"},
        {keyword : "호흡기 질환", value : "GREEN"},
        {keyword : "비염", value : "GREEN"},
        {keyword : "눈 피로감", value : "GREEN"},
        {keyword : "고혈압", value :"BLUE"}, 
        {keyword : "귀울림", value : "PURPLE"},
        {keyword : "어깨통증", value : "PURPLE"},
        {keyword : "천식", value : "WHITE"},
        {keyword : "피부병", value : "WHITE"}
    ];

    var symptomList;

    switch(optionId)
    {
        case 1 :
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