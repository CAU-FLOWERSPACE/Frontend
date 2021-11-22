import React from 'react'
import {Card, Img, Name, ToPlantInfoButton} from './';
import '../../../Card.css';


export default function PlantResult({name, image, id}) {
    return (
        <Card>
            <Img><img src = {image}/></Img>
            <Name>{name}</Name>
            <ToPlantInfoButton id = {id}>상세정보</ToPlantInfoButton>
        </Card>
    )
}
