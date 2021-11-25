import React from 'react'
import { useLocation, useHistory, withRouter } from 'react-router';
import { Title, ResultList, Container, ArButton, PlaceColorTitle, ButtonContainer, ToGoButton } from './';
import { useDispatch } from 'react-redux';
import { arSubmit } from '../../../_actions/user_action';

function PlaceColorRecommendResultPage() {

    const location = useLocation();
    const results = location.state.response; //전체 데이터
    
    const history = useHistory();

    const dispatch = useDispatch();

    console.log(`결과 : ${results}`);
    const flowerList = results.flowers;

    let body = {
        "plants" : flowerList
    }

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
            <div>
                <Container>
                    <Title>
                        <p>당신의 소중한 공간에 </p>
                        <p>인테리어 효과를 줄 수 있는 꽃들입니다.</p>
                       
                    </Title>
                    <ButtonContainer>
                        <ToGoButton onClick = {onMoveToMain}>이전으로</ToGoButton>
                        <ToGoButton onClick = {onMoveToAR}>ar 이동</ToGoButton>
                    </ButtonContainer>
                    <ResultList result = {flowerList}/>
                </Container>
            </div>
        </div>
    )
}
export default withRouter(PlaceColorRecommendResultPage)
