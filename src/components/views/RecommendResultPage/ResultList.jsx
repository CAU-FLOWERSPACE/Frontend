import React from 'react'
import { Result } from './';
import styled from 'styled-components';

const ListBlock = styled.div`//바깥으로 안나가게
    flex : 1;
    //display : flex;//
    //width : 400px;
    height : 600px; 
    //border : 1px solid green;
    padding : 20px 32px;
    padding-bottom : 48px;
    //overflow-y: auto;
    overflow:scroll;
`

export default function ResultList({result}) 
{
    console.log(result);

    const results = result;

    const resultList = results.map((flower) => (<Result key = {flower.id} name = {flower.name} image = {flower.image} id = {flower.id}></Result>));

    return (
        <ListBlock>
            {resultList}
        </ListBlock>
    )
}
