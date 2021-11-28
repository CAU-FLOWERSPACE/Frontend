import React from 'react'
import { withRouter } from 'react-router';
import {useLocation} from 'react-router-dom';
import {Img, Name, FlowerMean, Feature, BackButton} from './';


function FlowerDetailPage() {

    const location = useLocation();
    const flower = location.state.response; //json

    console.log(flower); //json

    return (
        <>
            <Img>
                <img src = {flower.image} width = "100%" height = "100%" overFit = "cover"/>
            </Img>
            <Name>{flower.name}</Name>
            <FlowerMean>{flower.mean}</FlowerMean>
            <Feature>{flower.feature}</Feature>
            <BackButton/>
        </>
    )
}

export default withRouter(FlowerDetailPage)
