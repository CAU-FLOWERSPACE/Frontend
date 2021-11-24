import React from 'react'
import { withRouter } from 'react-router';
import { Container } from '../Common';
import {useLocation} from 'react-router-dom';
import {Img, Name, Feature} from './';

function PlantDetailPage() {

    const location = useLocation();
    const plant = location.state.response; //json

    console.log(plant);

    // console.log(plant.)


    return (
        <Container>
            <div>
                <Img><img src = {plant.image}/></Img>
                <Name>{plant.name}</Name>
                <Feature>{plant.feature}</Feature>
            </div>
        </Container>
    )
}
export default withRouter(PlantDetailPage)
