import React from 'react'
import { useLocation, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { ResultList, Title, ToGoButton, ButtonContainer } from './';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {arSubmit} from '../../../_actions/user_action';
import InfoMessage from './InfoMessage';
function RecommendResultPage() { 

    const location = useLocation();
    const results = location.state.response;
    console.log(`result : ${results}`);

    const history = useHistory();
    const dispatch = useDispatch();

    let body = {
        "plants" : results.flowers
    }

    console.log(`body : ${body}`);

    const onMoveToGoBack = (event) =>
    {
        history.push('/option1page');

    }

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
            <Title>
                <p>회원님의 심신을 안정시켜줄</p>
                <p>테라피 컬러는 '{results.color}'입니다.</p>
                <br/>
                <p>'AR 이동'을 클릭하시면 AR 체험으로 이동합니다.</p>
            </Title>
            <ButtonContainer>
                <ToGoButton onClick = {onMoveToGoBack}>다시하기</ToGoButton>
                <ToGoButton onClick = {onMoveToAR}>AR 이동</ToGoButton>
            </ButtonContainer>

            <InfoMessage>
                이름 아래의 버튼을 클릭하시면 더 많은 정보를 보실 수 있습니다.
            </InfoMessage>
            <ResultList result = {results.flowers}/>
    
            <ToGoButton onClick = {onMoveToMain}>메인으로</ToGoButton>
        </>
    )
}

export default withRouter(RecommendResultPage)
