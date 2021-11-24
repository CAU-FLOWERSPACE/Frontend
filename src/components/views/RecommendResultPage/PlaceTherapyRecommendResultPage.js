import React from 'react'
import { useHistory, useLocation, withRouter } from 'react-router';
import { Container, ArButton, PlaceTherapyTitle, PlantResultList, TherapyEffect, ButtonContainer, ToGoButton } from './';

function PlaceTherapyRecommendResultPage() {

    const location = useLocation();
    const results = location.state.response;

    const history = useHistory();
    
    console.log(results); 

    const plants = results.plants;

    const onMoveToMain = (event) =>
    {
        history.push('/');

    }

    const onMoveToAR = (event) =>
    {
        console.log("ar 이동")
    }


    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div >
                <Container>
                    <PlaceTherapyTitle>{results.place}</PlaceTherapyTitle>
                    <TherapyEffect>{results.effect}</TherapyEffect>
                    <ButtonContainer>
                        <ToGoButton onClick = {onMoveToMain}>메인으로</ToGoButton>
                        <ToGoButton onClick = {onMoveToAR}>ar 이동</ToGoButton>
                    </ButtonContainer>
                    <PlantResultList result = {plants}/>
                </Container>
                {/* <ArButton onClick = {onClickHandler}/> */}
            </div>
           
        </div>
    )
}
export default withRouter(PlaceTherapyRecommendResultPage)
