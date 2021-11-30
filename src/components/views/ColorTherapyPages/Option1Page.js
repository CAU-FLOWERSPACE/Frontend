import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {Template, Title, QuestionList, Img} from './';
import {Container} from '../Common';



function Option1Page() {


    return (
        <>
            <Title> 
                요즘 당신에게 가장 필요한 것은 무엇인가요?
            </Title>
            <Img><img src = "img/disease.jpg" style ={{width : "100%"}}/></Img>
            <QuestionList/>
        </>
    );
}

export default withRouter(Option1Page)
