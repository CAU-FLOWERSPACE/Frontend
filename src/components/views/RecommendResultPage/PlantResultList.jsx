import React from 'react'
import { PlantResult } from './';
import styled from 'styled-components';

const ListBlock = styled.div`//바깥으로 안나가게
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y: auto;
   // background : gray; 
   //height 지정해야할듯 안튀어나가게 하려면
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
