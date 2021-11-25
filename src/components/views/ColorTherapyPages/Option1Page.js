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
                        <p>요즘 가장 필요한 것이라고 생각되는</p>
                        <p>보기를 하나 골라주세요. </p>
                    </Title>
                    <div style={{overflowY : "auto"}}>
                    <QuestionList/>
                    </div>
                </Template>
            
            
            
        </>
    );
}

export default withRouter(Option1Page)
