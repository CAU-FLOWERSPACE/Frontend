import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {Template, Title, QuestionList, Img, Option1Title} from './';
import {Container, BackButton} from '../Common';



function Option1Page() {


    return (
        <>
            <Option1Title> 
                요즘 당신에게 가장 필요한 것은 무엇인가요?
            </Option1Title>
            <Img><img src = "img/option/ex3.jpg" style ={{width : "120%"}}/></Img>
            <QuestionList/>
            <BackButton>이전으로</BackButton>
        </>
    );
}

export default withRouter(Option1Page)
