import React from 'react'
import { useLocation, useHistory, withRouter } from 'react-router';
import { Title, ResultList, Container, ArButton, PlaceColorTitle, ButtonContainer, ToGoButton } from './';


function PlaceColorRecommendResultPage() {

    const location = useLocation();
    const results = location.state.response; //전체 데이터
    
    const history = useHistory();

    console.log(`결과 : ${results}`);
    const flowerList = results.flowers;

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
            <div>
                <Container>
                    <Title>당신의 공간에 어울리는 꽃은 ...</Title>
                    <ButtonContainer>
                        <ToGoButton onClick = {onMoveToMain}>메인으로</ToGoButton>
                        <ToGoButton onClick = {onMoveToAR}>ar 이동</ToGoButton>
                    </ButtonContainer>
                    <ResultList result = {flowerList}/>
                </Container>
            </div>
        </div>
    )
}
export default withRouter(PlaceColorRecommendResultPage)
