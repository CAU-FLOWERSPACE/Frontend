import React from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {Template, Title, QuestionList} from './';


const GlobalStyle = createGlobalStyle`

    body {
        background : #f7f4e3;
    }

`




function Option1Page() {


    return (
        <>
            <div>
                <Template>
                    <Title> 요즘 당신의 기분, 어떤가요? </Title>
                    
                    <QuestionList/>
                </Template>
            </div>
            
            
        </>
    );
}

export default withRouter(Option1Page)
