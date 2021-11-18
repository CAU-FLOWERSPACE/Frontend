import React from 'react'
import { withRouter } from 'react-router';
import { Container } from '../Common';
import {useLocation} from 'react-router-dom';
import {Img, Name, FlowerMean, Feature, BackButton} from './';


function FlowerDetailPage() {

    const location = useLocation();
    const flower = location.state.response; //json

    console.log(flower); //json

    return (
        <Container>
            <BackButton/>
            <div>
                <Img><img src = {flower.image}/></Img>
                <Name>{flower.flower_name}</Name>
                <FlowerMean>{flower.mean}</FlowerMean>
                <Feature>{flower.flower_feature}</Feature>
            </div>
            
        </Container>
    )
}

export default withRouter(FlowerDetailPage)
