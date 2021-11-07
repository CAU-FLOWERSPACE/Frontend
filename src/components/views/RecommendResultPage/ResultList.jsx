import React from 'react'
import { Result } from './';
import styled from 'styled-components';

const ListBlock = styled.div`//바깥으로 안나가게
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y: auto;
   // background : gray; 
`

export default function ResultList() {

    const results = [1,2,3,4,5]; //temp

    const resultList = results.map((resultNum) => (<Result key = {resultNum} title = {resultNum}></Result>));

    return (
        <ListBlock>
            {resultList}
        </ListBlock>
    )
}
