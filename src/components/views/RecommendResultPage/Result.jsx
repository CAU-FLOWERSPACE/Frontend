import React from 'react'
import Button from '@restart/ui/esm/Button'
// import Card from 'react-bootstrap/Card'
import {Card, Img, Name, ToInfoButton} from './';
import '../../../Card.css';

//카드하나

export default function Result({name, image, id}) { //이미지 넘겨받아야함
    return (
        <Card>
            <Img><img src = {image} width = "100%" height = "100%" overFit = "cover"/></Img> 
            <Name>{name}</Name>
            {/* 상세정보라는 말 없애고 />로 마무리하기 */}
            <ToInfoButton id = {id}/>
        </Card>

    
    )
}
