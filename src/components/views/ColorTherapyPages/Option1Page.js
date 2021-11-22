import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {Template, Title, QuestionList} from './';
import {Container} from '../Common';



function Option1Page() {


    return (
        <>
            
                <Template>
                    <Title> 
                        <p>다음 중 나의 현재 상태를 가장 잘 표현한</p>
                        <p>이모티콘을 골라주세요 !</p>
                    </Title>
                    <QuestionList/>
                </Template>
            
            
            
        </>
    );
}

export default withRouter(Option1Page)
