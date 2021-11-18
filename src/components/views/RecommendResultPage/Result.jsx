import React from 'react'
import Button from '@restart/ui/esm/Button'
// import Card from 'react-bootstrap/Card'
import {Card, Img, Name, ToInfoButton} from './';
import '../../../Card.css';

//카드하나

export default function Result({name, image, flower_id}) { //이미지 넘겨받아야함
    return (
        <Card>
            <Img><img src = {image}/></Img> 
            <Name>{name}</Name>
            <ToInfoButton id = {flower_id}>상세정보</ToInfoButton>
        </Card>

    
    )
}
