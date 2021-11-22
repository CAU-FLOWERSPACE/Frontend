import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { withRouter } from 'react-router';
import {Template, Title, QuestionList2, Img} from './';

function Option2Page() {

    const location = useLocation();
    const optionId = location.state.id; 
    console.log(optionId);
    //case 1~7에 대한 키워드 여기서도 정의 

    return (
        <>
            <Template>
                <Title>
                    <p>다음 중 나의 요즘 몸 상태를 잘 나타내는</p>
                    <p>키워드를 골라주세요 !</p>
                </Title>
                
                <Img><img src = "img/disease.jpg" style ={{width : "100%"}}/></Img>
                <QuestionList2 id = {optionId}/>
                
            </Template>
        </>
    )
}

export default withRouter(Option2Page)