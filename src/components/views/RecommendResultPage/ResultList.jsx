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

export default function ResultList({result}) 
{
    console.log(result);

    const results = result;

    const resultList = results.map((flower) => (<Result key = {flower.flower_id} name = {flower.flower_name} image = {flower.image} flower_id = {flower.flower_id}></Result>));

    return (
        <ListBlock>
            {resultList}
        </ListBlock>
    )
}
