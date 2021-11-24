import React from 'react'
import { useLocation, withRouter } from 'react-router';
import { Container, ArButton, PlaceTherapyTitle, PlantResultList, TherapyEffect } from './';

function PlaceTherapyRecommendResultPage() {

    const location = useLocation();
    const results = location.state.response;

    console.log(results); 

    const plants = results.plants;

    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div >
                <Container>
                    <PlaceTherapyTitle>{results.place}</PlaceTherapyTitle>
                    <TherapyEffect>{results.effect}</TherapyEffect>
                    <PlantResultList result = {plants}/>
                </Container>
                {/* <ArButton onClick = {onClickHandler}/> */}
            </div>
           
        </div>
    )
}
export default withRouter(PlaceTherapyRecommendResultPage)
