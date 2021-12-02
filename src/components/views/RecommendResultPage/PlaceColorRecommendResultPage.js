import React from 'react'
import { useLocation, useHistory, withRouter } from 'react-router';
import { Title, ResultList, Container, ArButton, PlaceColorTitle, ButtonContainer, ToGoButton, UserImage, InfoMessage } from './';
import { useDispatch } from 'react-redux';
import { arSubmit } from '../../../_actions/user_action';

function PlaceColorRecommendResultPage() {

    const location = useLocation();
    const results = location.state.response; //전체 데이터
    
    const history = useHistory();

    const dispatch = useDispatch();

    console.log(`결과 : ${results}`);
    const flowerList = results.flowers;
    const userImage = results.user_image;

    let body = {
        "plants" : flowerList
    }

    const onMoveToMain = (event) =>
    {
        history.push('/');
    }

    const onMoveToGoBack = (event) =>
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
        <>
            <Title>
                <p>회원님의 공간에 추천드리는 꽃입니다.</p>
                <p>'AR 이동'을 클릭하시면 AR 체험으로 이동합니다.</p>
            </Title>
            <UserImage><img src = {userImage} width = "100%" height = "100%" overFit = "cover"/></UserImage>
            <ButtonContainer>
                <ToGoButton onClick = {onMoveToGoBack}>다시하기</ToGoButton>
                <ToGoButton onClick = {onMoveToAR}>AR 이동</ToGoButton>
            </ButtonContainer>

            <InfoMessage>
                이름 아래의 버튼을 클릭하시면 더 많은 정보를 보실 수 있습니다.
            </InfoMessage>
            <ResultList result = {flowerList}/>
            <ToGoButton onClick = {onMoveToMain}>메인으로</ToGoButton>
           
        </>
    )
}
export default withRouter(PlaceColorRecommendResultPage)
