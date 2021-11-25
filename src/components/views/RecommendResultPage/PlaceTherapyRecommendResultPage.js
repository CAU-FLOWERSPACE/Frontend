import React from 'react'
import { useHistory, useLocation, withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, ArButton, PlaceTherapyTitle, PlantResultList, TherapyEffect, ButtonContainer, ToGoButton } from './';
import { arSubmit } from '../../../_actions/user_action';
function PlaceTherapyRecommendResultPage() {

    const location = useLocation();
    const results = location.state.response;

    const history = useHistory();
    const dispatch = useDispatch();

    let body = {
        "plants" : results.plants
    }
    
    console.log(results); 

    const plants = results.plants;

    const onMoveToMain = (event) =>
    {
        history.goBack();

    }

    const onMoveToAR = (event) =>
    {
        dispatch(arSubmit(body))
        .then(response => {
            console.log(`데이터 : ${response.payload}`)
            history.push(
                {
                    pathname : "/ar",
                    state : { response : response.payload}
                }
            )
        })
    }


    return (
        <div style ={{display : "block", justifyContent : "center", alignItems : "center"}}>
            <div >
                <Container>
                    <PlaceTherapyTitle>{results.place}</PlaceTherapyTitle>
                    <TherapyEffect>{results.effect}</TherapyEffect>
                    <ButtonContainer>
                        <ToGoButton onClick = {onMoveToMain}>이전으로</ToGoButton>
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
