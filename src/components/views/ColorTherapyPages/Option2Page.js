import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { withRouter } from 'react-router';
import {Template, Title, QuestionList2, Img} from './';

function Option2Page() {



    const location = useLocation();

    console.log(location.state);
    const optionId = location.state.data3.id;
    const comment = location.state.data3.comment; 
    console.log(optionId);
    //case 1~7에 대한 키워드 여기서도 정의 

    return (
        <>
            <Template>
                <Img><img src = "img/disease.jpg" style ={{width : "100%"}}/></Img>
                <Title>
                    <p>'{comment}'을 얻고 싶어하는 당신, </p>
                    <p>아래의 보기 중 경험한 적이 있거나</p>
                    <p>걱정되는 증상이 있다면</p>
                    <p>하나를 선택해주세요 ! </p>
                </Title>
                <QuestionList2 id = {optionId}/>
                
            </Template>
        </>
    )
}

export default withRouter(Option2Page)