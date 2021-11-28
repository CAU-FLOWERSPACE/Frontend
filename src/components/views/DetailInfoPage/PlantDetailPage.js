import React from 'react'
import { withRouter } from 'react-router';
import { Container } from '../Common';
import {useLocation} from 'react-router-dom';
import {Img, Name, Feature, BackButton} from './';

function PlantDetailPage() {

    const location = useLocation();
    const plant = location.state.response; //json

    console.log(plant);

    // console.log(plant.)


    return (
        <>
            <Img><img src = {plant.image} width = "100%" height = "100%" overFit = "cover"/></Img>
            <Name>{plant.name}</Name>
            <Feature>{plant.feature}</Feature>
            <BackButton/>
        </>
    )
}
export default withRouter(PlantDetailPage)
