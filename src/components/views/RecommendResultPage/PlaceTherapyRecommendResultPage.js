import React from 'react'
import { useLocation, withRouter } from 'react-router';
import { Container, ArButton, PlaceTherapyTitle, PlantResultList } from './';

function PlaceTherapyRecommendResultPage() {

    const location = useLocation();
    const results = location.state.response;

    console.log(results); 

    const place = results.place;
    const plants = results.plants;

    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div >
                <Container>
                    <PlaceTherapyTitle>{place}</PlaceTherapyTitle>
                    <PlantResultList result = {plants}/>
                </Container>
                {/* <ArButton onClick = {onClickHandler}/> */}
            </div>
           
        </div>
    )
}
export default withRouter(PlaceTherapyRecommendResultPage)
