import React from 'react'
import { useHistory, useLocation, withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, ArButton, PlaceTherapyTitle, PlantResultList, TherapyEffect, ButtonContainer, ToGoButton, Title, UserImage } from './';
import { arSubmit } from '../../../_actions/user_action';
import InfoMessage from './InfoMessage';
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
    const userImage = results.user_image;

    const onMoveToMain = (event) =>
    {
        history.push('/');

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
        <>
            <PlaceTherapyTitle>{results.place}</PlaceTherapyTitle>
            <TherapyEffect>{results.effect}</TherapyEffect>

            <UserImage><img src = {userImage} width = "100%" height = "100%" overFit = "cover"/></UserImage>
            <InfoMessage>
                <p>'AR 이동'을 클릭하시면 AR 체험으로 이동합니다.</p>
            </InfoMessage>

            <ButtonContainer>
                <ToGoButton onClick = {onMoveToMain}>이전으로</ToGoButton>
                <ToGoButton onClick = {onMoveToAR}>AR 이동</ToGoButton>
            </ButtonContainer>

            <InfoMessage>
                이름 아래의 버튼을 클릭하시면 더 많은 정보를 보실 수 있습니다.
            </InfoMessage>
    
            <PlantResultList result = {plants}/>
            <ToGoButton onClick = {onMoveToMain}>메인으로</ToGoButton>
        </>
    )
}
export default withRouter(PlaceTherapyRecommendResultPage)
