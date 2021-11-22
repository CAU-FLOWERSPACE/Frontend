import React from 'react'
import { withRouter } from 'react-router';
import { Container } from '../Common';
import {useLocation} from 'react-router-dom';
import {Img, Name, Effect, Feature} from './';

function PlantDetailPage() {

    const location = useLocation();
    const plant = location.state.response; //json

    console.log(plant);


    return (
        <Container>
            <div>
                <Img><img src = {plant.image}/></Img>
                <Name>{plant.plant_name}</Name>
                <Effect>{plant.effect}</Effect>
                <Feature>{plant.plant_feature}</Feature>
            </div>
        </Container>
    )
}
export default withRouter(PlantDetailPage)
