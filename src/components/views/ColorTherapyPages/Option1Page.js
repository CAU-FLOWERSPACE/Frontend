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
            <Img><img src = "img/disease.jpg" style ={{width : "100%"}}/></Img>

            <Title> 
                <p>요즘 가장 필요한 것이라고 생각되는</p>
                <p>보기를 하나 골라주세요. </p>
            </Title>
            <QuestionList/>
        
            
            
        </>
    );
}

export default withRouter(Option1Page)
