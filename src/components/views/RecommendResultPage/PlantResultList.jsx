import React from 'react'
import { PlantResult } from './';
import styled from 'styled-components';

const ListBlock = styled.div`//바깥으로 안나가게
    display: flex;

    width : 375px; //수정
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-x: auto;
`


export default function PlantResultList({result}) { //한번 깐 상태의..

    console.log(result);
    const results = result;

    const resultList = results.map((plant) => (<PlantResult key={plant.id} name = {plant.name} image = {plant.image} id = {plant.id}></PlantResult>))
    return (
        <ListBlock>
            {resultList}
        </ListBlock>
        
    )
}
